/*
  # Create Products System

  1. New Tables
    - `product_categories`
      - `id` (uuid, primary key)
      - `name` (text) - Category name: "Roasted Makhana" or "Raw Makhana"
      - `slug` (text, unique) - URL-friendly identifier
      - `description` (text) - Category description
      - `target_audience` (text) - "B2C" or "B2B"
      - `created_at` (timestamp)

    - `products`
      - `id` (uuid, primary key)
      - `name` (text) - Product name
      - `category_id` (uuid) - Foreign key to product_categories
      - `description` (text) - Short description
      - `long_description` (text) - Detailed description
      - `image_url` (text) - Product image URL
      - `price` (numeric) - Price in rupees
      - `size` (text) - Size/variant info (e.g., "250g", "3 Suta")
      - `specification` (text) - Size range for raw makhana (e.g., "12.5-15.5mm")
      - `stock_status` (text) - "in_stock" or "out_of_stock"
      - `featured` (boolean) - Featured product flag
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `product_inventory`
      - `id` (uuid, primary key)
      - `product_id` (uuid) - Foreign key to products
      - `quantity` (integer) - Stock quantity
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Public read access for products
    - Admin-only write access (future)

  3. Indexes
    - Index on category_id for faster filtering
    - Index on slug for URL lookups
    - Index on stock_status for inventory queries
*/

CREATE TABLE IF NOT EXISTS product_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  target_audience text DEFAULT 'B2C',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category_id uuid NOT NULL REFERENCES product_categories(id) ON DELETE CASCADE,
  description text NOT NULL,
  long_description text,
  image_url text,
  price numeric NOT NULL,
  size text NOT NULL,
  specification text,
  stock_status text DEFAULT 'in_stock',
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS product_inventory (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid NOT NULL UNIQUE REFERENCES products(id) ON DELETE CASCADE,
  quantity integer DEFAULT 0,
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_products_category_id ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_slug ON product_categories(slug);
CREATE INDEX IF NOT EXISTS idx_products_stock_status ON products(stock_status);

ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_inventory ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view categories"
  ON product_categories FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view inventory"
  ON product_inventory FOR SELECT
  USING (true);

CREATE OR REPLACE FUNCTION update_product_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'update_products_updated_at'
  ) THEN
    CREATE TRIGGER update_products_updated_at
      BEFORE UPDATE ON products
      FOR EACH ROW
      EXECUTE FUNCTION update_product_updated_at();
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'update_inventory_updated_at'
  ) THEN
    CREATE TRIGGER update_inventory_updated_at
      BEFORE UPDATE ON product_inventory
      FOR EACH ROW
      EXECUTE FUNCTION update_product_updated_at();
  END IF;
END $$;