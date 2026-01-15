# Cart System Documentation

## Overview
The Maxana cart system is a fully functional shopping cart with database persistence using Supabase. It supports guest users through session-based cart storage.

## Features

### 1. Persistent Cart Storage
- Cart items are stored in Supabase database
- Session-based storage for guest users
- Ready for user authentication integration
- Automatic cart loading on page load

### 2. Cart Management
- Add items to cart with quantity
- Update item quantities
- Remove items from cart
- Clear entire cart
- Real-time cart count badge in header

### 3. Smooth Animations
- Animated cart drawer slide-in
- Item count badge animation
- Cart item entrance/exit animations
- Loading states with spinners

### 4. User Interface
- Luxury-themed cart drawer
- Mobile-responsive design
- Empty cart state with CTA
- Product thumbnails in cart
- Real-time total calculation

## Technical Implementation

### Database Schema
```sql
cart_items (
  id uuid PRIMARY KEY,
  session_id text NOT NULL,
  user_id uuid,
  product_id text NOT NULL,
  product_name text NOT NULL,
  product_price text NOT NULL,
  product_image text NOT NULL,
  product_weight text NOT NULL,
  quantity integer NOT NULL,
  created_at timestamptz,
  updated_at timestamptz
)
```

### Cart Context API
```typescript
interface CartContextType {
  items: CartItem[];
  itemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product, quantity?) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  getTotalPrice: () => number;
  isLoading: boolean;
}
```

### Usage Example
```tsx
// In any component
import { useCart } from '@/contexts/CartContext';

function ProductCard({ product }) {
  const { addToCart, setIsCartOpen } = useCart();

  const handleAddToCart = async () => {
    await addToCart({
      product_id: product.id,
      product_name: product.name,
      product_price: product.price,
      product_image: product.image,
      product_weight: product.weight,
    });
    setIsCartOpen(true);
  };

  return (
    <button onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
}
```

## Setup Instructions

### 1. Environment Variables
Create a `.env` file with your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Database Setup
The migration has been automatically applied. The cart_items table includes:
- RLS (Row Level Security) enabled
- Policies for CRUD operations
- Indexes for performance
- Automatic updated_at timestamp trigger

### 3. Session Management
- Cart uses localStorage for session ID generation
- Session ID format: `session_${timestamp}_${random}`
- Persists across page reloads
- Can be migrated to user account when authentication is added

## Future Enhancements

### Planned Features
1. User authentication integration
2. Cart migration on login (session cart → user cart)
3. Saved for later functionality
4. Product recommendations in cart
5. Checkout process integration
6. Order history
7. Cart abandonment recovery
8. Promo code support

### Scalability
- Database queries optimized with indexes
- Batch operations for bulk updates
- Efficient state management with React Context
- Lazy loading of cart drawer

## Cart Flow

### Adding to Cart
1. User clicks "Add to Cart" on product
2. System checks for existing item in cart
3. If exists: increment quantity
4. If new: insert new cart item
5. Update UI with success toast
6. Animate cart badge with new count

### Viewing Cart
1. User clicks cart icon in header
2. Cart drawer slides in from right
3. Items load from database
4. Display with images, quantities, and prices
5. Calculate and show total

### Updating Quantities
1. User clicks +/- buttons
2. Optimistically update UI
3. Save to database
4. Recalculate total
5. If quantity becomes 0: remove item

### Checkout (Ready for Integration)
The cart system provides `getTotalPrice()` and `items` array ready for checkout integration.

## Performance Considerations

- Cart loads asynchronously after initial page render
- Supabase queries are cached where appropriate
- Optimistic UI updates for better UX
- Session ID stored in localStorage (not cookies)
- Minimal re-renders with proper React Context usage

## Security

- RLS policies ensure data isolation
- Session IDs are randomly generated
- No sensitive data in client-side storage
- SQL injection protected by Supabase client
- CORS properly configured

## Troubleshooting

### Cart Not Loading
- Check Supabase credentials in .env
- Verify database migration was applied
- Check browser console for errors

### Items Not Persisting
- Verify localStorage is enabled
- Check network tab for API errors
- Ensure RLS policies are correct

### Count Badge Not Updating
- Check CartProvider wraps entire app
- Verify useCart() is called within provider
- Check React DevTools for context value
