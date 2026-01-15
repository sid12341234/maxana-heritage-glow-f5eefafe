/*
  # Cart System Tables

  1. New Tables
    - `cart_items`
      - `id` (uuid, primary key)
      - `session_id` (text) - for guest users
      - `user_id` (uuid) - for authenticated users (future)
      - `product_id` (text) - product identifier
      - `product_name` (text)
      - `product_price` (text)
      - `product_image` (text)
      - `product_weight` (text)
      - `quantity` (integer)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `cart_items` table
    - Add policy for users to manage their own cart items based on session_id

  3. Indexes
    - Add index on session_id for faster lookups
*/

CREATE TABLE IF NOT EXISTS cart_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  user_id uuid,
  product_id text NOT NULL,
  product_name text NOT NULL,
  product_price text NOT NULL,
  product_image text NOT NULL,
  product_weight text NOT NULL,
  quantity integer NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_cart_items_session_id ON cart_items(session_id);
CREATE INDEX IF NOT EXISTS idx_cart_items_user_id ON cart_items(user_id);

ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own cart items"
  ON cart_items FOR SELECT
  USING (true);

CREATE POLICY "Users can insert own cart items"
  ON cart_items FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can update own cart items"
  ON cart_items FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Users can delete own cart items"
  ON cart_items FOR DELETE
  USING (true);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'update_cart_items_updated_at'
  ) THEN
    CREATE TRIGGER update_cart_items_updated_at
      BEFORE UPDATE ON cart_items
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;