import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase, getSessionId } from '@/lib/supabase';

export interface CartItem {
  id: string;
  product_id: string;
  product_name: string;
  product_price: string;
  product_image: string;
  product_weight: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Omit<CartItem, 'id' | 'quantity'>, quantity?: number) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  getTotalPrice: () => number;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loadCart = async () => {
    try {
      const sessionId = getSessionId();
      const { data, error } = await supabase
        .from('cart_items')
        .select('*')
        .eq('session_id', sessionId);

      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      console.error('Error loading cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const addToCart = async (
    product: Omit<CartItem, 'id' | 'quantity'>,
    quantity: number = 1
  ) => {
    try {
      const sessionId = getSessionId();

      const existingItem = items.find(item => item.product_id === product.product_id);

      if (existingItem) {
        await updateQuantity(existingItem.id, existingItem.quantity + quantity);
      } else {
        const { data, error } = await supabase
          .from('cart_items')
          .insert({
            session_id: sessionId,
            ...product,
            quantity,
          })
          .select()
          .single();

        if (error) throw error;
        setItems([...items, data]);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  };

  const removeFromCart = async (itemId: string) => {
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', itemId);

      if (error) throw error;
      setItems(items.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Error removing from cart:', error);
      throw error;
    }
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    if (quantity < 1) {
      await removeFromCart(itemId);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('id', itemId)
        .select()
        .single();

      if (error) throw error;
      setItems(items.map(item => item.id === itemId ? data : item));
    } catch (error) {
      console.error('Error updating quantity:', error);
      throw error;
    }
  };

  const clearCart = async () => {
    try {
      const sessionId = getSessionId();
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('session_id', sessionId);

      if (error) throw error;
      setItems([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
      throw error;
    }
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.product_price.replace('₹', '').replace(',', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
