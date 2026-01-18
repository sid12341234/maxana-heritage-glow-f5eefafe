import { supabase } from '@/integrations/supabase/client';

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  target_audience: string;
}

export interface Product {
  id: string;
  name: string;
  category_id: string;
  description: string;
  long_description: string;
  image_url: string;
  price: number;
  size: string;
  specification: string | null;
  stock_status: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export async function getCategories(): Promise<ProductCategory[]> {
  const { data, error } = await supabase
    .from('product_categories')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return data || [];
}

export async function getProducts(categorySlug?: string): Promise<Product[]> {
  let query = supabase.from('products').select(`
    *,
    product_categories!inner(slug)
  `);

  if (categorySlug) {
    query = query.eq('product_categories.slug', categorySlug);
  }

  const { data, error } = await query.order('featured', { ascending: false }).order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }

  return data || [];
}

export async function getProductById(id: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    console.error('Error fetching product:', error);
    return null;
  }

  return data;
}

export async function getProductInventory(productId: string): Promise<number> {
  const { data, error } = await supabase
    .from('product_inventory')
    .select('quantity')
    .eq('product_id', productId)
    .maybeSingle();

  if (error) {
    console.error('Error fetching inventory:', error);
    return 0;
  }

  return data?.quantity || 0;
}
