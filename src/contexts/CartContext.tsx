import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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
  addToCart: (product: Omit<CartItem, 'id' | 'quantity'>, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'jsv_cart';

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

  // Load cart from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse cart from localStorage');
      }
    }
    setIsLoading(false);
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, isLoading]);

  const addToCart = (
    product: Omit<CartItem, 'id' | 'quantity'>,
    quantity: number = 1
  ) => {
    const existingItem = items.find(item => item.product_id === product.product_id);

    if (existingItem) {
      updateQuantity(existingItem.id, existingItem.quantity + quantity);
    } else {
      const newItem: CartItem = {
        ...product,
        id: `item_${Date.now()}_${Math.random().toString(36).substring(7)}`,
        quantity,
      };
      setItems(prev => [...prev, newItem]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setItems(prev => prev.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(itemId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
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
