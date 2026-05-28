## Plan: Rebrand to JSV International LLP + Restructure Products + Polish

### 1. Brand tokens & fonts (`src/index.css`, `tailwind.config.ts`, `index.html`)
- Swap Google Fonts import to **Fraunces** (headings) + **Outfit** (body).
- Update Tailwind `font-heading` / `font-body` mappings accordingly.
- Replace CSS variables with the JSV palette (HSL of):
  - Background cream `#FAF4E8`, card white `#FFFFFF`
  - Primary deep brown `#43271A` (foreground & headings)
  - Accent/gold `#D9A23E` (buttons, highlights), with `--gold` updated to the same value
- Update `index.html` `<title>`, meta description, and any "Maxana" text.

### 2. Logo asset & wiring
- Copy uploaded logo → `src/assets/jsv-logo.png`.
- Replace the "MAXANA" wordmark in `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, and `src/pages/Splash.tsx` with the logo image + "JSV International LLP" text where appropriate.
- Global find/replace "Maxana" → "JSV International" in copy (About, Index, WhyMakhana, FeaturedProducts, BrandStory, Export, Contact, Auth, NotFound, README, etc.). Footer uses full "JSV International LLP".

### 3. Splash intro (`src/pages/Splash.tsx`)
- New sequence: blooming lotus petals (SVG petals scaling/rotating outward from center) → logo image fades + scales in → "JSV International LLP" wordmark → tagline → "Enter" CTA → curtain transition into site.
- Keep click-to-enter; total runtime ~3s.

### 4. Products restructure (`src/data/products.ts`, `src/pages/Products.tsx`, `src/pages/ProductDetail.tsx`, `src/components/home/FeaturedProducts.tsx`)
Delete every roasted item and existing raw items. Define **two data sets**:

**Retail (cart-enabled, 250g):**
| id | name | price |
|---|---|---|
| `shahi-jumbo` | Shahi Jumbo (6+ Suta Handpicked) | ₹599 |
| `khaas-makhana` | Khaas Makhana (5 Suta) | ₹399 |
| `bachat-pack` | Bachat Pack (4 Suta) | ₹249 |

Each gets description, longDescription, ingredients, nutrition, benefits, image placeholder (reuse `janaki-makhana-pouch.png` for now; user can replace later). All wired into existing Cart + Checkout flow untouched.

**Bulk (catalogue only, no price/cart):**
Static list of grades (3 Suta, 4 Suta, 4 Suta HP, 4(+) Plus Suta, 4(+) Plus HP, 5 Suta Pure, 5 Suta Pure HP, 5(+) Plus Non-HP, 5(+) Plus HP, 6(+) Plus Non-HP, 6(+) Plus HP) rendered as a table grouped by suta size with sizes from the earlier chart.

**Products page rebuilt** with two sections (anchor tabs `#retail` / `#bulk`):
- Retail grid: 3 cards, Add-to-Cart buttons (existing flow).
- Bulk catalogue: table + legend "HP = Handpicked (premium) | Non-HP = Machine-sorted" + amber banner "Rates fluctuate daily — message us on WhatsApp for live pricing" + **Enquire on WhatsApp** button (wa.me link to existing number 9608429953 prefilled message) + enquiry form (Name, Phone, Quantity in kg, Grade dropdown, Message). Submit triggers toast success + sound chime (no backend wiring; placeholder handler — email forwarding is a separate task).

**ProductDetail** restored to cart/price flow for the 3 retail SKUs only. Bulk items don't get detail pages.

**FeaturedProducts** (home) shows the 3 retail products.

### 5. Animations
Reuse existing Framer Motion patterns and ensure:
- Hero & section reveals: `initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}`.
- Staggered children on hero load.
- Product cards: hover lift + soft shadow (already present via `card-luxury`, verify in gold/brown palette).
- Smooth scroll: `html { scroll-behavior: smooth }` already set — keep.

### 6. UI sounds
- Add three short royalty-free mp3s under `public/sounds/`: `click.mp3`, `add-to-cart.mp3`, `success.mp3` (downloaded via curl from a public CDN such as mixkit free sounds).
- Create `src/contexts/SoundContext.tsx` providing `{ isMuted, toggleMute, play(name) }` with localStorage persistence (default **unmuted** per request).
- Wrap app in `<SoundProvider>` in `src/App.tsx`.
- Add a `Volume2`/`VolumeX` toggle button in Header (desktop + mobile rows).
- Hook into: every `Button` click via a thin wrapper (call `play('click')` from a new `useButtonSound` invoked in key CTAs — luxury/gold/hero variants), Add-to-Cart in ProductDetail + retail cards (`play('add-to-cart')`), form-submit success on Contact + bulk enquiry (`play('success')`).
- No autoplay on load (sounds only fire on user interaction, satisfying autoplay policies).

### 7. Preserved as-is
Cart context, CartDrawer, Checkout page, Auth flow, routing, Contact form, maps, footer structure (only text/logo rebranded).

### Out of scope (deferred)
- Real product photography for the 3 retail SKUs (placeholder reused).
- Razorpay integration (kept as placeholder per user note).
- Email forwarding of contact/enquiry submissions (previously discussed; needs domain setup).
