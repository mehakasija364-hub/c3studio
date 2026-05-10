C3 Studio — Static Multi-Page Site
=====================================

Pages:
  index.html      → Home
  shop.html       → Shop (filter by category/price/search)
  product.html    → Product detail page (uses ?slug=product-slug)
  cart.html       → Shopping cart (WhatsApp checkout)
  contact.html    → Contact form (sends via WhatsApp)
  about.html      → About page
  gifts.html      → For Gifts page
  bulk.html       → Bulk & Corporate Gifting

  assets/
    styles-D3NVSlnM.css  → All styles (original from your build)
    site.js              → Shared JS: products data, cart, nav, footer

  images/         → Drop all your product/banner images here
  _redirects      → Netlify SPA fallback
  .htaccess       → Apache fallback

Deployment:
  Netlify: Drag-drop this folder to netlify.com/drop
  Apache/cPanel: Upload contents via FTP/File Manager
  Any static host: Just upload all files maintaining folder structure

Notes:
  - Cart persists in localStorage (same as original)
  - All orders go via WhatsApp (same behavior as original)
  - All image paths are identical to the original React build
