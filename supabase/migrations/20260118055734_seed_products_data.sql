/*
  # Seed Products Data

  Populates product categories and products with:
  1. Roasted Makhana category with flavored variants
  2. Raw Makhana category with 11 grades
*/

INSERT INTO product_categories (name, slug, description, target_audience) VALUES
  ('Roasted Makhana', 'roasted-makhana', 'Premium flavored roasted makhana snacks - ready to eat delights with premium taste.', 'B2C'),
  ('Raw Makhana', 'raw-makhana', 'Premium raw makhana in various grades for bulk and wholesale - highest quality lotus seeds.', 'B2B')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (name, category_id, description, long_description, price, size, stock_status, featured) VALUES
  -- Roasted Makhana Products (250g, 500g, 1kg variants for each flavor)
  (
    'Himalayan Salt & Pepper - 250g',
    (SELECT id FROM product_categories WHERE slug = 'roasted-makhana'),
    'Pure Himalayan salt with freshly cracked pepper',
    'Experience pristine pink Himalayan salt paired with aromatic cracked black pepper. Hand-selected makhana roasted in small batches for consistent crunch and flavor.',
    399,
    '250g',
    'in_stock',
    true
  ),
  (
    'Himalayan Salt & Pepper - 500g',
    (SELECT id FROM product_categories WHERE slug = 'roasted-makhana'),
    'Pure Himalayan salt with freshly cracked pepper',
    'Experience pristine pink Himalayan salt paired with aromatic cracked black pepper. Hand-selected makhana roasted in small batches for consistent crunch and flavor.',
    699,
    '500g',
    'in_stock',
    false
  ),
  (
    'Himalayan Salt & Pepper - 1kg',
    (SELECT id FROM product_categories WHERE slug = 'roasted-makhana'),
    'Pure Himalayan salt with freshly cracked pepper',
    'Experience pristine pink Himalayan salt paired with aromatic cracked black pepper. Hand-selected makhana roasted in small batches for consistent crunch and flavor.',
    1199,
    '1kg',
    'in_stock',
    false
  ),
  (
    'Peri Peri Blaze - 250g',
    (SELECT id FROM product_categories WHERE slug = 'roasted-makhana'),
    'Fiery African-inspired spice blend with bold smoky heat',
    'Ignite your taste buds with African bird''s eye chili inspired seasoning. A perfect harmony of smoky paprika, garlic, lemon zest with carefully calibrated heat.',
    399,
    '250g',
    'in_stock',
    true
  ),
  (
    'Peri Peri Blaze - 500g',
    (SELECT id FROM product_categories WHERE slug = 'roasted-makhana'),
    'Fiery African-inspired spice blend with bold smoky heat',
    'Ignite your taste buds with African bird''s eye chili inspired seasoning. A perfect harmony of smoky paprika, garlic, lemon zest with carefully calibrated heat.',
    699,
    '500g',
    'in_stock',
    false
  ),
  (
    'Cream Cheese & Onion - 250g',
    (SELECT id FROM product_categories WHERE slug = 'roasted-makhana'),
    'Creamy savory delight with cheese and onion flavors',
    'Indulge in the rich, velvety taste of cream cheese and caramelized onion. Each puff is carefully roasted and generously coated with premium seasoning.',
    349,
    '250g',
    'in_stock',
    true
  ),
  (
    'Cream Cheese & Onion - 500g',
    (SELECT id FROM product_categories WHERE slug = 'roasted-makhana'),
    'Creamy savory delight with cheese and onion flavors',
    'Indulge in the rich, velvety taste of cream cheese and caramelized onion. Each puff is carefully roasted and generously coated with premium seasoning.',
    599,
    '500g',
    'in_stock',
    false
  ),
  (
    'Black Truffle & Parmesan - 250g',
    (SELECT id FROM product_categories WHERE slug = 'roasted-makhana'),
    'Decadent Italian-inspired luxury with real truffle essence',
    'Our most luxurious creation featuring real Italian black truffle essence and aged Parmigiano-Reggiano. An earthy, umami-rich gourmet experience.',
    899,
    '250g',
    'in_stock',
    false
  ),
  (
    'Wasabi & Nori - 250g',
    (SELECT id FROM product_categories WHERE slug = 'roasted-makhana'),
    'Japanese-inspired with authentic wasabi kick and seaweed',
    'Embrace the essence of Japan with real wasabi and premium nori seaweed. A sophisticated blend of Japanese flavors with Indian superfood tradition.',
    449,
    '250g',
    'in_stock',
    false
  ),

  -- Raw Makhana Products (11 grades, per kg pricing)
  (
    '3 Suta Raw Makhana',
    (SELECT id FROM product_categories WHERE slug = 'raw-makhana'),
    'Grade 3 Suta - Standard quality raw makhana',
    'Standard grade raw makhana suitable for general roasting and commercial use. Good quality lotus seeds from Mithila region.',
    450,
    '1kg',
    'in_stock',
    false
  ),
  (
    '4-5 Suta Standard - 12.5-15.5mm',
    (SELECT id FROM product_categories WHERE slug = 'raw-makhana'),
    'Grade 4-5 Suta Standard - Mid-range quality',
    'Mid-range quality raw makhana with 12.5-15.5mm size range. Standard hand-picked selection.',
    550,
    '1kg',
    'in_stock',
    false
  ),
  (
    '4 Suta Hand Picked - 12.5-15.5mm',
    (SELECT id FROM product_categories WHERE slug = 'raw-makhana'),
    'Grade 4 Suta Hand Picked - Premium selection',
    'Premium hand-picked selection of Grade 4 Suta raw makhana (12.5-15.5mm). Carefully sorted for consistency and quality.',
    650,
    '1kg',
    'in_stock',
    false
  ),
  (
    '4+ Plus Standard - 12.5-24mm',
    (SELECT id FROM product_categories WHERE slug = 'raw-makhana'),
    'Grade 4+ Plus Standard - Enhanced quality range',
    'Enhanced quality with larger size range (12.5-24mm). Standard selection for premium applications.',
    600,
    '1kg',
    'in_stock',
    false
  ),
  (
    '4+ Plus Hand Picked - 12.5-24mm',
    (SELECT id FROM product_categories WHERE slug = 'raw-makhana'),
    'Grade 4+ Plus Hand Picked - Premium large range',
    'Premium hand-picked Grade 4+ Plus with extended size range (12.5-24mm). Top-tier selection for demanding customers.',
    750,
    '1kg',
    'in_stock',
    false
  ),
  (
    '5 Suta Pure Standard - 15.7-19mm',
    (SELECT id FROM product_categories WHERE slug = 'raw-makhana'),
    'Grade 5 Suta Pure Standard - Fine quality',
    'Fine quality Grade 5 Suta Pure raw makhana (15.7-19mm). Excellent for premium roasted products.',
    700,
    '1kg',
    'in_stock',
    false
  ),
  (
    '5 Suta Pure Hand Picked - 15.7-19mm',
    (SELECT id FROM product_categories WHERE slug = 'raw-makhana'),
    'Grade 5 Suta Pure Hand Picked - Superior quality',
    'Superior quality hand-picked Grade 5 Suta Pure (15.7-19mm). Premium lotus seeds for luxury snack production.',
    850,
    '1kg',
    'in_stock',
    false
  ),
  (
    '5+ Plus Standard - 15.75-24mm',
    (SELECT id FROM product_categories WHERE slug = 'raw-makhana'),
    'Grade 5+ Plus Standard - Large premium range',
    'Large premium size range (15.75-24mm) in Grade 5+ Plus. Standard selection for commercial production.',
    750,
    '1kg',
    'in_stock',
    false
  ),
  (
    '5+ Plus Hand Picked - 15.75-24mm',
    (SELECT id FROM product_categories WHERE slug = 'raw-makhana'),
    'Grade 5+ Plus Hand Picked - Finest large variety',
    'Finest hand-picked Grade 5+ Plus with extended range (15.75-24mm). Excellence in size and quality combined.',
    900,
    '1kg',
    'in_stock',
    false
  ),
  (
    '6+ Plus Standard - 19-24mm',
    (SELECT id FROM product_categories WHERE slug = 'raw-makhana'),
    'Grade 6+ Plus Standard - Largest size standard',
    'Largest size standard Grade 6+ Plus (19-24mm). Premium quality for exclusive high-end applications.',
    850,
    '1kg',
    'in_stock',
    false
  ),
  (
    '6+ Plus Hand Picked - 19-24mm',
    (SELECT id FROM product_categories WHERE slug = 'raw-makhana'),
    'Grade 6+ Plus Hand Picked - Supreme quality',
    'Supreme quality hand-picked Grade 6+ Plus (19-24mm). The finest raw makhana available - largest and most premium selection.',
    1000,
    '1kg',
    'in_stock',
    false
  )
ON CONFLICT DO NOTHING;