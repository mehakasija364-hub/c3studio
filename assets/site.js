// C3 Studio — Site JS
const WA = "919319763966";
const ADDRESS = "E 10, Sector 15, Noida";
const PHONE = "+91 93197 63966";
const EMAIL = "mailc3studio@gmail.com";

function fmtPrice(n) { return "₹" + n.toLocaleString("en-IN"); }

const CATEGORIES = [
  {key:"Occasions",label:"Occasions",subs:["Anniversary/ 25th Anniversary","Baby Shower And Baby Announcement/ Baby Arrival","First Haircut","Housewarming"]},
  {key:"Festivals",label:"Festivals",subs:["Diwali","Lohri","Rakhi","Christmas","Karva Chauth","Holi","Eid Mubarak"]},
  {key:"Wedding",label:"Wedding",subs:["Wedding Trousseau And Return Favours"]},
  {key:"Birthday",label:"Birthday",subs:["First Birthday — Boy","First Birthday — Girl","Kids Return Favours","Birthday Single Hampers"]},
  {key:"Kids",label:"Kids",subs:["Boss Baby","Cocomelon","Disney","Avengers & Superheroes","Cars","Minions","Jungle","Little Man","Mermaid / Sea Animals","Princess / Barbie","Unicorn","Candyland","Carnival / Circus","Butterfly"]},
  {key:"Cake/Flower Hampers",label:"Cake/Flower Hampers",subs:["Flower Hampers","Cake Hampers"]},
  
];

const PRODUCTS = [
  //holi
  {id:"1",slug:"holi-basket-hamper",name:"Holi Basket Hamper",price:1299,image:"/images/holii1.jpg",category:"Festivals",subcategory:["Holi","Festivals"],tagline:"Rustic festive charm",description:"Handwoven basket hamper with vibrant Holi goodies, colours and artisanal treats — a perfect traditional festive delight.",details:["Handwoven basket","Organic gulal","Festive snacks & sweets","Decorative floral accents"]},
  {id:"2",slug:"holi-cycle-hamper",name:"Holi Cycle Hamper",price:1399,image:"/images/holi2.jpg",category:"Festivals",subcategory:["Holi","Festivals"],tagline:"Playful festive vibes",description:"Quirky cycle-themed Holi hamper loaded with colours, treats and fun elements — spreading joy and celebration in style.",details:["Decorative cycle base","Organic colours","Snacks & sweets","Fun props & tags"]},
  {id:"3",slug:"holi-cart-hamper",name:"Holi Cart Hamper",price:1499,image:"/images/holi3.jpg",category:"Festivals",subcategory:["Holi","Festivals"],tagline:"Mini festive cart",description:"Colorful cart-style Holi hamper filled with festive treats, gulal and playful decor — a vibrant gifting experience.",details:["Wooden cart design","Organic gulal","Festive snacks","Decorative hangings"]},
  {id:"4",slug:"holi-thandai-cart-hamper",name:"Holi Thandai Cart Hamper",price:1599,image:"/images/holi4.jpg",category:"Festivals",subcategory:["Holi","Festivals"],tagline:"Festive street charm",description:"Traditional thandai cart-inspired Holi hamper with colours, drinks and festive goodies — bringing authentic celebration vibes.",details:["Cart style base","Thandai bottles","Organic colours","Festive snacks & decor"]},
 
   //christmas 
  {id:"30",slug:"christmas-cart-hamper",name:"Christmas Cart Hamper",price:1500,image:["/images/christmas.jpg","/images/christmas1.2.jpg","/images/christmas1.3.jpg"],category:"Festivals",subcategory:["Christmas","Festivals"],tagline:"A merry ride of festive delights",description:"A whimsical cart-style Christmas hamper filled with treats, greenery and festive charm.",details:["Decorative wooden cart base","Gourmet jars & treats","Mini plant for freshness","Christmas-themed props & ribbons"]},
  {id:"31",slug:"christmas-mini-tray-hamper",name:"Christmas Mini Tray Hamper",price:1200,image:["/images/christmas2.jpg","/images/christmas2.2.jpg"],category:"Festivals",subcategory:["Christmas","Festivals"],tagline:"Cute, cosy & full of cheer",description:"A delightful mini Christmas tray featuring adorable festive elements, gourmet jars and a cosy mug.",details:["Wooden mini tray with handle","Festive ceramic mug","2 premium snack jars","Christmas décor accents & florals"]},
  {id:"32",slug:"christmas-combo-hamper",name:"Christmas Combo Hamper",price:2800,image:"/images/christmas3.jpg",category:"Festivals",subcategory:["Christmas","Festivals"],tagline:"Double the hampers, double the joy",description:"A beautifully coordinated Christmas hamper duo combining festive elegance and playful charm.",details:["Set of 2 curated hampers","Mix of treats, décor & utility items","Premium festive styling","Ideal for gifting & celebrations"]},
  {id:"33",slug:"christmas-wicker-hamper",name:"Christmas Wicker Hamper",price:1800,image:["/images/christmas4.jpg","/images/christmas4.2.jpg"],category:"Festivals",subcategory:["Christmas","Festivals"],tagline:"A festive bundle of warmth & joy",description:"A charming wicker Christmas hamper adorned with merry accents, cosy candles and festive treats.",details:["Handwoven wicker basket with festive décor","Premium candle for cosy vibes","Curated holiday treats & goodies","Christmas-themed embellishments"]},
  
  //diwali
  {id:"50",slug:"mint-elegance-diwali-basket",name:"Mint Elegance Diwali Basket",price:1800,image:"/images/diwali1.jpg",category:"Festivals",subcategory:["Diwali","Festivals"],tagline:"Fresh hues, festive feels",description:"An elegant Diwali basket featuring curated treats and gifting essentials in a premium setup.",details:["Crystal jars with edible fillings","Gift pouch with goodies","Decorative basket base","Diwali greeting card"]},
  {id:"51",slug:"wooden-crate-jar-hamper",name:"Wooden Crate Jar Hamper",price:1400,image:["/images/diwali2.jpg","/images/diwali2.2.jpg"],category:"Festivals",subcategory:["Diwali","Festivals"],tagline:"Rustic charm, festive warmth",description:"A rustic wooden crate hamper packed with gourmet jars and festive treats.",details:["Gourmet jar preserves","Wooden crate base","Festive fillers","Diwali greeting card"]},
  {id:"52",slug:"golden-deer-jar-set",name:"Golden Deer Jar Gift Set",price:2200,image:["/images/diwali3.jpg","/images/diwali3.2.jpg"],category:"Festivals",subcategory:["Diwali","Festivals"],tagline:"Luxury in every lid",description:"A premium Diwali hamper featuring decorative jars filled with dry fruits and festive treats.",details:["4 jars with dry fruits & nuts","Premium display tray","Festive gift setup","Diwali card"]},
  {id:"53",slug:"pink-basket-marble-cake-hamper",name:"Pink Basket Marble Cake Hamper",price:1600,image:"/images/diwali5.jpg",category:"Festivals",subcategory:["Diwali","Festivals"],tagline:"Sweet gestures, beautifully packed",description:"A festive pink basket hamper with cakes and sweet treats for gifting.",details:["Marble cake","Sweet jars","Gift basket","Diwali greeting card"]},
  {id:"54",slug:"motichoor-ladoo-luxury-box",name:"Motichoor Ladoo Luxury Box",price:2500,image:"/images/diwali7.jpg",category:"Festivals",subcategory:["Diwali","Festivals"],tagline:"Traditional sweets, elevated gifting",description:"A luxury Diwali gift box packed with traditional sweets and premium goodies.",details:["Motichoor ladoos","Vanilla chocolate laddoos","Potli bag","Ceramic mugs","Decor gift items"]},
  {id:"55",slug:"velvet-bowl-diwali-hamper",name:"Velvet Bowl Diwali Hamper",price:1300,image:"/images/diwali8.jpg",category:"Festivals",subcategory:["Diwali","Festivals"],tagline:"Soft luxury, festive essentials",description:"A compact Diwali hamper with chocolates, incense and small gifting essentials.",details:["Chocolates","Incense cones","Potli bag","Gift bowl base","Diwali card"]},
  {id:"56",slug:"premium-red-diwali-gift-box",name:"Premium Red Diwali Gift Box",price:3000,image:"/images/diwali9.jpg",category:"Festivals",subcategory:["Diwali","Festivals"],tagline:"Everything festive, all in one box",description:"A premium Diwali box loaded with sweets, chocolates and festive essentials.",details:["Motichoor ladoos","Ferrero Rocher chocolates","Vanilla laddoos","Snacks & munchies","Incense cones","Decor items"]},
  {id:"57",slug:"namalaya-wellness-hamper",name:"Namalaya Wellness Diwali Hamper",price:2800,image:"/images/diwali11.jpg",category:"Festivals",subcategory:["Diwali","Festivals"],tagline:"Fragrance & wellness, gifted with love",description:"A wellness-focused Diwali hamper with fragrances, chocolates and self-care items.",details:["Fragrance tins","Ferrero Rocher chocolates","Artisan soap","Candle","Gift box"]},
   {id:"58",slug:"nysa-personalized-basket",name:"Nysa Personalized Diwali Basket",price:1700,image:["/images/diwali12.jpg"],category:"Festivals",subcategory:["Diwali","Festivals"],tagline:"Named for someone special",description:"A personalized Diwali basket filled with cookies and festive treats.",details:["Assorted cookies","Stuffed dates","Personalized name tag","Gift basket","Diwali card"]},
  {id:"59",slug:"ganesha-basket",name:"Ganesha Seagrass Festive Basket",price:1200,image:["/images/diwali13.jpg"],category:"Festivals",subcategory:["Diwali","Festivals"],tagline:"Woven with blessings",description:"A traditional Diwali basket with assorted treats and festive gifting items.",details:["Assorted sweets & treats","Seagrass basket","Decor gift items","Diwali greeting card"]},
  {id:"60",slug:"glass-jar-tray-hamper",name:"Glass Jar Elephant Tray Hamper",price:1900,image:["/images/diwali14.jpg"],category:"Festivals",subcategory:["Diwali","Festivals"],tagline:"Gifting that sits beautifully",description:"An elegant tray hamper with jars, candles and festive essentials.",details:["Glass jar with fillings","Candle","Ganesha idol","Diya","Gift tray"]},
  {id:"61",slug:"pink-rose-gold-hamper",name:"Pink Rose Gold Diwali Hamper",price:2400,image:["/images/diwali15.jpg","/images/diwali15.2.jpg"],category:"Festivals",subcategory:["Diwali","Festivals"],tagline:"Blush, gold and utterly beautiful",description:"A premium Diwali hamper with candles, jars and luxury gifting items.",details:["Scented candle","Dry fruit jar","Gift wrap item","Premium tray","Festive card"]},
  {id:"62",slug:"mint-box-diwali-hamper",name:"Mint Keepsake Box Hamper",price:2600,image:["/images/diwali16.jpg","/images/diwali16.2.jpg"],category:"Festivals",subcategory:["Diwali","Festivals"],tagline:"Open the box, light up your Diwali",description:"A keepsake Diwali box filled with sweets, candles and festive goodies.",details:["Motichoor ladoos","Mukhwas/snacks box","Candles","Jewelry item","Keepsake box"]},
  {id:"63",slug:"pink-transparent-hamper",name:"Pink Transparent Tote Hamper",price:1500,image:["/images/diwali18.jpg"],category:"Festivals",subcategory:["Diwali","Festivals"],tagline:"Gifting you can see through — literally",description:"A trendy Diwali tote hamper with candles, incense and festive items.",details:["Pillar candle","Incense cones","Mini lantern","Gift tote bag","Festive filler"]},
  {id:"64",slug:"traditional-tray-diwali-hamper",name:"Traditional Tray Diwali Hamper",price:2100,image:["/images/diwali19.jpg","/images/diwali19.2.jpg"],category:"Festivals",subcategory:["Diwali","Festivals"],tagline:"Roots, rituals and rich gifting",description:"A traditional Diwali hamper with puja essentials and gifting items.",details:["Potli bags","Candle","Ganesha idol","Diya","Festive tray","Greeting card"]},
  {id:"65",slug:"blush-clear-basket-hamper",name:"Blush Clear Basket Hamper",price:1600,image:["/images/diwali21.jpg"],category:"Festivals",subcategory:["Diwali","Festivals"],tagline:"Pastel pretty, festively packed",description:"A clear basket Diwali hamper filled with sweets and festive treats.",details:["Assorted sweets & treats","Gift basket","Festive decor items","Diwali card"]},
  {id:"66",slug:"diwali-glow-gift-crates",name:"Diwali Glow Gift Crates",price:1299,image:["/images/diwali6.jpg"],category:"Festivals",subcategory:["Diwali","Festivals"],tagline:"Festive glow packed in elegant crates",description:"Traditional Diwali hampers with diyas, jars and sweets packed in decorative wooden crates.",details:["Wooden crate base","Decorative diya","Sweet jars","Net wrapping","Festive tags"]},
  {id:"67",slug:"diwali-gold-luxe-hamper",name:"Diwali Gold Luxe Hamper",category:"Festivals",subcategory:["Diwali","Festivals"],price:2499,oldPrice:2999,tagline:"Festive elegance in gold",image:["/images/diwali22.webp","/images/diwali22.2.webp"],description:"A luxurious Diwali hamper featuring golden decor, diya theme, and festive treats.",details:["Designer gold container","Diwali diya theme setup","Decorative base platter","Dry fruits / sweets","Custom Diwali message card"]},
  { id:"68", slug:"floral-diwali-cake-basket", name:"Floral Diwali Cake Basket", price:1899, image:["/images/diwali23.webp","/images/diwali23.2.webp"], category:"Festivals", subcategory:["Diwali","Festivals"], tagline:"Elegant festive sweetness", description:"A graceful Diwali hamper featuring marble cake, gourmet jars and floral decor in a premium handled basket.", details:["Marble cake","Dry fruit jars","Decorative flowers","Diwali greeting card","Premium handle basket"] },
  



   //karwachauth
  {id:"71",slug:"karwa-chauth-classic-thali",name:"Karwa Chauth Classic Thali",price:1800,image:["/images/karva1.jpg","/images/karva1.2.jpg"],category:"Festivals",subcategory:["Karva Chauth","Festivals"],tagline:"Everything she needs for her special fast",description:"A complete Karwa Chauth thali set with ritual essentials and premium festive treats.",details:["Karwa pot for rituals","Bikanervala Fenni","Bikanervala Matar Para","Zari potli bags","Silk fabric gift","Festive greeting card"]},
  {id:"72",slug:"karwa-chauth-tray-hamper",name:"Karwa Chauth Tray Hamper",price:1600,image:["/images/karva2.jpg","/images/karva2.2.jpg","/images/karva2.3.jpg"],category:"Festivals",subcategory:["Karva Chauth","Festivals"],tagline:"Festive love, beautifully arranged",description:"A festive tray hamper combining Karwa Chauth essentials with delicious treats and gifting items.",details:["Karwa pot","Bikanervala Fenni","Bikanervala Matar Para","Crystal candle jar","Zari potli bag","Festive greeting card"]},
  {id:"73",slug:"karwa-chauth-silver-tray-set",name:"Karwa Chauth Silver Tray Set",price:1700,image:["/images/karva3.jpg","/images/karva3.2.jpg"],category:"Festivals",subcategory:["Karva Chauth","Festivals"],tagline:"Simple, sweet and full of love",description:"An elegant Karwa Chauth hamper with ritual essentials and snack items for a complete celebration.",details:["2 Karwa pots","Bikanervala Matar Para (2 boxes)","2 Zari potli bags","Lotus tealight holder","Festive greeting card"]},
 
   //lohri
  {id:"91",slug:"lohri-mini-cart-hamper",name:"Lohri Mini Cart Hamper",price:1500,image:"/images/lohri1.jpg",category:"Festivals",subcategory:["Lohri","Festivals"],tagline:"A little cart full of big celebrations",description:"A cute Lohri hamper packed with festive treats and gifting items.",details:["Gourmet treat jars","2 potli bags","Personalized name tag","Festive greeting card"]},
  {id:"92",slug:"lohri-seagrass-basket",name:"Lohri Seagrass Basket",price:1200,image:["/images/lohri2.jpg","/images/lohri2.2.jpg"],category:"Festivals",subcategory:["Lohri","Festivals"],tagline:"Woven in warmth, gifted with joy",description:"A natural basket filled with Lohri treats and gifting essentials.",details:["Gourmet treat jars","Seagrass basket","Personalized name tag","Thank you card"]},
  {id:"93",slug:"lohri-scene-crate",name:"Lohri Scene Wooden Crate",price:1800,image:["/images/lohri3.jpg","/images/lohri3.2.jpg"],category:"Festivals",subcategory:["Lohri","Festivals"],tagline:"The whole Lohri vibe in one box",description:"A festive wooden crate hamper with treats and traditional Lohri gifting items.",details:["Gourmet treat jars","Zari potli bag","Wooden crate base","Festive greeting card"]},
  {id:"94",slug:"lohri-pind-night-hamper",name:"Lohri Pind Night Hamper",price:2000,image:["/images/lohri4.jpg","/images/lohri4.2.jpg"],category:"Festivals",subcategory:["Lohri","Festivals"],tagline:"Dhamal, dhol and Lohri gifts",description:"A premium Lohri hamper filled with festive treats and gifting essentials.",details:["Assorted chocolates","Zari potli bag","Festive gift base"]},
  {id:"95",slug:"lohri-white-cart-hamper",name:"Lohri White Cart Hamper",price:1900,image:["/images/lohri6.jpg"],category:"Festivals",subcategory:["Lohri","Festivals"],tagline:"Roll into Lohri in style",description:"A fun Lohri cart hamper with treats and gifting items for festive celebrations.",details:["Gourmet treat jars","Potli bag","Festive greeting card"]},
  {id:"96",slug:"lohri-gold-basket",name:"Lohri Gold Basket",price:1400,image:["/images/lohri7.jpg","/images/lohri7.2.jpg"],category:"Festivals",subcategory:["Lohri","Festivals"],tagline:"Golden vibes, Lohri feels",description:"A stylish Lohri basket with gifting items and festive treats.",details:["Potli bag","Gift basket","Festive greeting card"]},
  {id:"97",slug:"lohri-jar-carrier",name:"Lohri Jar Carrier Set",price:1600,image:["/images/lohri8.jpg"],category:"Festivals",subcategory:["Lohri","Festivals"],tagline:"Four jars, full of festive love",description:"A wooden carrier set with multiple jars filled with Lohri treats.",details:["4 gourmet treat jars","Wooden jar carrier","Festive tag"]},
  {id:"98",slug:"lohri-truck-cart-hamper",name:"Lohri Truck Cart Hamper",price:2200,image:["/images/lohri9.jpg","/images/lohri9.2.jpg"],category:"Festivals",subcategory:["Lohri","Festivals"],tagline:"Lohri on the move!",description:"A playful Lohri hamper loaded with treats and gifting items.",details:["Gourmet treat jars","Potli bag","Festive greeting card"]},
  {id:"99",slug:"lohri-chakri-basket-set",name:"Lohri Chakri Basket Set",price:1700,image:["/images/lohri10.jpg","/images/lohri10.2.jpg"],category:"Festivals",subcategory:["Lohri","Festivals"],tagline:"Spin into the celebrations",description:"A creative Lohri gift set with treats and festive elements.",details:["Seagrass gift box","Festive items","Greeting card"]},
  {id:"100",slug:"lohri-pinwheel-tray",name:"Lohri Pinwheel Tray Hamper",price:2100,image:["/images/lohri11.jpg"],category:"Festivals",subcategory:["Lohri","Festivals"],tagline:"Color, kites and Lohri treats",description:"A festive tray hamper filled with Lohri treats and gifting essentials.",details:["3 gourmet jars","Fabric gift","Personalized name tag"]},
  {id:"101",slug:"lohri-red-roof-cart",name:"Lohri Red Roof Cart Hamper",price:1500,image:["/images/lohri12.jpg"],category:"Festivals",subcategory:["Lohri","Festivals"],tagline:"Baby's first Lohri, extra special",description:"A personalized Lohri cart hamper with treats and festive goodies.",details:["Gourmet treat jars","2 potli bags","Personalized name tag","Greeting card"]},
  {id:"102",slug:"punjabi-lohri-celebration-cart",name:"Punjabi Lohri Celebration Cart",price:1799,image:["/images/p-lohri-truck.png"],category:"Festivals",subcategory:["Lohri","Festivals"],tagline:"Traditional Punjabi vibes in a festive cart",description:"Colorful wooden truck hamper inspired by Lohri celebrations, decorated with tassels and cultural elements.",details:["Wooden truck base","Punjabi decor elements","Tassel detailing","Festive goodies space","Reusable structure"]},
   

  //rakhi  
  {id:"110",slug:"rakhi-sweet-treats-hamper",name:"Rakhi Sweet Treats Hamper",price:850,oldPrice:1000,image:"/images/rakhi1.jpg",category:"Festivals",subcategory:["Rakhi","Festivals"],tagline:"Celebrate Raksha Bandhan with love",description:"A compact Rakhi hamper featuring sweet treats and thoughtful gifting essentials for your brother.",details:["Assorted sweet treats","Chocolate jars or snack items","Rakhi & small gifting add-ons","Greeting card"]},
  {id:"111",slug:"rakhi-chocolate-delight-hamper",name:"Rakhi Chocolate Delight Hamper",price:750,oldPrice:900,image:"/images/rakhi2.jpg",category:"Festivals",subcategory:["Rakhi","Festivals"],tagline:"Perfect festive surprise for your brother",description:"A festive Rakhi hamper curated with sweets, chocolates and small gifting essentials.",details:["Assorted sweets & chocolates","Snack jars","Rakhi with accessories","Greeting card"]},
   

  //eid
  {id:"211",slug:"eid-golden-luxury-tray-hamper",name:"Eid Golden Luxury Tray Hamper",price:2499,image:["/images/eid1.webp","/images/eid1.2.webp"],category:["Festivals"],subcategory:["Eid Mubarak","Festivals"],tagline:"Golden elegance in every detail",description:"A luxurious golden tray hamper with cake and premium jars, ideal for special occasions.",details:["Designer golden tray","Mini cake","Decorative jars with lids","Artificial floral accents","Premium filler base","Elegant styling"]},
   {id:"212",slug:"eid-festive-floral-hamper",name:"Eid Festive Floral Hamper",price:1799,image:["/images/eid2.webp"],category:["Festivals"],subcategory:["Eid Mubarak","Festivals"],tagline:"Celebrate Eid with elegance",description:"A beautifully curated Eid hamper with floral decor, sweets and festive essentials.",details:["Macrame basket tray","Cupcakes or sweets box","Decorative flowers","Dry grass arrangement","Greeting card (Eid Mubarak)","Ribbon detailing"]},



  //wedding  
  {id:"121",slug:"wedding-elegance-trousseau-hamper",name:"Wedding Elegance Trousseau Hamper",price:650,oldPrice:700,image:"/images/wedding1.jpg",category:"Wedding",subcategory:"Wedding Trousseau And Return Favours",tagline:"Elegant gifting for wedding celebrations",description:"A wedding hamper curated with premium treats and useful gifting items.",details:["Sweet treats or dessert items","Snack jars or gourmet items","Useful gifting essentials","Personalized card"]},
  {id:"122",slug:"wedding-classic-gifting-hamper",name:"Wedding Classic Gifting Hamper",price:750,oldPrice:900,image:"/images/wedding2.jpg",category:"Wedding",subcategory:"Wedding Trousseau And Return Favours",tagline:"Thoughtful wedding gifting made easy",description:"A beautifully curated wedding hamper filled with sweets, snacks and gifting essentials.",details:["Assorted sweets","Gourmet snacks or jars","Gifting essentials","Greeting card"]},
  {id:"123",slug:"blush-bloom-basket-hamper",name:"Blush Bloom Basket Hamper",price:850,oldPrice:999,image:"/images/weddings1.webp",category:"Wedding",subcategory:"Wedding Trousseau And Return Favours",tagline:"Soft floral baskets crafted for dreamy wedding gifting",description:"An elegant wicker basket hamper decorated with blush florals and premium treats for wedding celebrations.",details:["Dessert jars or sweet treats","Mini candles or favors","Artificial floral décor","Personalized name tag"]},

{id:"124",slug:"lavender-luxe-return-favour",name:"Lavender Luxe Return Favour",price:720,oldPrice:850,image:"/images/weddings2.webp",category:"Wedding",subcategory:"Wedding Trousseau And Return Favours",tagline:"Pastel purple gifting with a luxurious touch",description:"A charming lavender-themed hamper curated with elegant goodies and floral styling.",details:["Snack jars or treats","Decorative floral arrangement","Customized thank you card","Premium wedding favor items"]},

{id:"125",slug:"royal-mauve-potli-hamper",name:"Royal Mauve Potli Hamper",price:950,oldPrice:1100,image:"/images/wedding3.webp",category:"Wedding",subcategory:"Wedding Trousseau And Return Favours",tagline:"Royal-inspired hampers for unforgettable wedding moments",description:"A luxurious mauve satin hamper featuring gourmet jars and floral embellishments.",details:["Dry fruit jars","Decorative floral styling","Premium wrapped gifts","Wedding thank you card"]},

{id:"126",slug:"sage-garden-trousseau-box",name:"Sage Garden Trousseau Box",price:1200,oldPrice:1400,image:"/images/wedding6.webp",category:"Wedding",subcategory:"Wedding Trousseau And Return Favours",tagline:"Elegant pastel gifting for sophisticated weddings",description:"A graceful sage green hamper styled with pearls, florals and premium gifting essentials.",details:["Dry fruits or snack jars","Decorative floral netting","Premium wrapped favors","Customized wedding card"]},

{id:"127",slug:"pink-pearl-royale-hamper",name:"Pink Pearl Royale Hamper",price:1350,oldPrice:1500,image:"/images/wedding4.webp",category:"Wedding",subcategory:"Wedding Trousseau And Return Favours",tagline:"Pearl embellished hampers with timeless wedding elegance",description:"A luxury golden tray hamper decorated with pink florals and premium gifting items.",details:["Assorted dry fruits","Decorative pearl detailing","Premium sweets or treats","Personalized wedding invite card"]},

{id:"128",slug:"golden-anniversary-fruit-hamper",name:"Golden Anniversary Fruit Hamper",price:880,oldPrice:1020,image:"/images/wedding7.webp",category:"Wedding",subcategory:"Wedding Trousseau And Return Favours",tagline:"Celebration hampers curated for memorable anniversaries",description:"A vibrant anniversary hamper featuring fruits, dry fruits and elegant floral décor.",details:["Fresh fruits","Dry fruit jars","Decorative floral styling","Customized anniversary tag"]},

{id:"129",slug:"pastel-bloom-return-crate",name:"Pastel Bloom Return Crate",price:690,oldPrice:850,image:"/images/wedding8.webp",category:"Wedding",subcategory:"Wedding Trousseau And Return Favours",tagline:"Minimal pastel hampers with refreshing gifting vibes",description:"A handcrafted basket hamper filled with floral décor, treats and small plants.",details:["Mini plant favors","Chocolate or sweet box","Snack jars","Customized thank you card"]},

{id:"130",slug:"sky-blue-celebration-basket",name:"Sky Blue Celebration Basket",price:920,oldPrice:1100,image:"/images/wedding9.webp",category:"Wedding",subcategory:"Wedding Trousseau And Return Favours",tagline:"Refreshing blue-themed hampers for elegant occasions",description:"A stylish blue hamper beautifully arranged with sweets, jars and floral accents.",details:["Glass sweet jars","Decorative dried flowers","Wrapped gifting box","Customized occasion card"]},

{id:"131",slug:"personalized-memory-keepsake-box",name:"Personalized Memory Keepsake Box",price:1500,oldPrice:1700,image:"/images/wedding10.webp",category:"Wedding",subcategory:"Wedding Trousseau And Return Favours",tagline:"Customized keepsake hampers made with love",description:"A premium memory box featuring personalized elements, sweets and decorative gifts.",details:["Customized photo frame","Chocolate or dessert jars","Personalized pouch","Wedding keepsake accessories"]},

{id:"132",slug:"mint-glam-metal-hamper",name:"Mint Glam Metal Hamper",price:980,oldPrice:1200,image:"/images/wedding11.webp",category:"Wedding",subcategory:"Wedding Trousseau And Return Favours",tagline:"Modern metallic hampers with elegant floral styling",description:"A chic mint green metal hamper curated with gourmet jars and wedding favors.",details:["Dry fruit jars","Decorative flowers","Customized wedding tags","Premium snack items"]},

{id:"133",slug:"ivory-regal-chocolate-basket",name:"Ivory Regal Chocolate Basket",price:1450,oldPrice:1650,image:"/images/wedding14.webp",category:"Wedding",subcategory:"Wedding Trousseau And Return Favours",tagline:"Luxury chocolate hampers crafted for royal celebrations",description:"A grand ivory basket hamper filled with assorted chocolates and decorative gifting essentials.",details:["Premium assorted chocolates","Dry fruit jars","Pearl and floral décor","Customized wedding tags"]},

{id:"134",slug:"golden-floral-lantern-hamper",name:"Golden Floral Lantern Hamper",price:1600,oldPrice:1850,image:"/images/wedding13.webp",category:"Wedding",subcategory:"Wedding Trousseau And Return Favours",tagline:"Statement hampers inspired by royal wedding décor",description:"An elegant golden cage-style hamper featuring decorative jars and luxurious floral accents.",details:["Premium decorative jars","Artificial floral décor","Luxury tassel detailing","Customized wedding hashtag"]},

{id:"135",slug:"golden-cart-snack-hamper",name:"Golden Cart Snack Hamper",price:790,oldPrice:950,image:"/images/wedding12.webp",category:"Wedding",subcategory:"Wedding Trousseau And Return Favours",tagline:"Cute cart hampers designed for stylish gifting",description:"A charming golden cart hamper arranged with gourmet jars and floral styling.",details:["Snack jars","Decorative floral arrangement","Customized thank you card","Premium hamper base"]},

{id:"136",slug:"ruby-royale-gift-box",name:"Ruby Royale Gift Box",price:1150,oldPrice:1350,image:"/images/wedding17.webp",category:"Wedding",subcategory:"Wedding Trousseau And Return Favours",tagline:"Luxury boxed gifting with a premium finish",description:"A sophisticated gift box hamper featuring elegant packaging and premium containers.",details:["Premium storage jars","Decorative gift packaging","Luxury carry bag","Customized brand tag"]},

{id:"137",slug:"emerald-festive-tray-hamper",name:"Emerald Festive Tray Hamper",price:1050,oldPrice:1250,image:"/images/wedding15.webp",category:"Wedding",subcategory:"Wedding Trousseau And Return Favours",tagline:"Festive hampers with vibrant wedding aesthetics",description:"A glamorous festive tray hamper styled with decorative jars and floral embellishments.",details:["Decorative sweet jars","Premium gifting tray","Customized wedding hashtag","Artificial floral décor"]},



  //baby
  {id:"131",slug:"baby-blue-rosette-hamper",name:"Baby Blue Rosette Hamper",price:950,oldPrice:1100,image:"/images/babybirth.jpg",category:"Occasions",subcategory:["Baby Shower And Baby Announcement/ Baby Arrival","Occasions"],tagline:"Soft blues for your little prince",description:"A charming baby shower hamper designed in soothing blue tones with rosette décor and curated treats.",details:["Designer rosette fan décor","Mini plant pot","Assorted snack jars","Teddy & balloon cutouts","Personalized baby tag","Thank you card"]},
  {id:"132",slug:"baby-pink-rosette-hamper",name:"Baby Pink Rosette Hamper",price:950,oldPrice:1100,image:"/images/babybirth2.webp",category:"Occasions",subcategory:["Baby Shower And Baby Announcement/ Baby Arrival","Occasions"],tagline:"Pretty pink surprises for your little angel",description:"A delightful pink-themed baby shower hamper with elegant rosette styling and sweet treats.",details:["Pink rosette fan décor","Mini plant pot","Assorted snack jars","Teddy & balloon cutouts","Personalized baby tag","Thank you card"]},
  {id:"133",slug:"baby-krishna-blessing-hamper",name:"Baby Krishna Blessing Hamper",price:1200,oldPrice:1400,image:"/images/babybirth3.jpg",category:"Occasions",subcategory:["Baby Shower And Baby Announcement/ Baby Arrival","Occasions"],tagline:"Divine blessings for your little one",description:"A spiritual baby hamper inspired by Lord Krishna, featuring traditional elements and premium treats.",details:["Krishna theme décor cutout","Premium glass jars with treats","Decorative tray base","Festive thank you card","Customized baby name tag"]},
  {id:"134",slug:"its-twins-celebration-hamper",name:"It's Twins Celebration Hamper",price:1400,oldPrice:1600,image:"/images/babybirth4.jpg",category:"Occasions",subcategory:["Baby Shower And Baby Announcement/ Baby Arrival","Occasions"],tagline:"Double the joy, double the celebration",description:"A premium baby hamper crafted for twin celebrations with elegant styling and delightful goodies.",details:["Luxury tray base","Twin-themed décor elements","Mini plant pot","Premium snack jars","Scented candle","Personalized message tag"]},
  {id:"135",slug:"golden-baby-shower-elegance-hamper",name:"Golden Baby Shower Elegance Hamper",price:1100,oldPrice:1300,image:"/images/babybirth5.jpg",category:"Occasions",subcategory:["Baby Shower And Baby Announcement/ Baby Arrival","Occasions"],tagline:"A golden touch for precious beginnings",description:"An elegant baby shower hamper with gold accents, soft pastel styling, and curated treats.",details:["Gold-accented tray setup","Premium snack jars","Floral decoration","Decorative ribbon styling","Thank you card","Custom baby tag"]},
  { id:"136", slug:"blue-elegance-baby-announcement-hamper", name:"Blue Elegance Baby Announcement Hamper", price:1799, image:["/images/birthdayboy4.webp","/images/birthdayboy4.2.webp"], category:"Occasions", subcategory:["Baby Shower And Baby Announcement/ Baby Arrival","Occasions"], tagline:"Soft tones, precious moments", description:"A premium baby announcement hamper with elegant blue theme, pearls and curated keepsakes.", details:["Decorative container","Baby-themed jars","Pearl embellishment","Mini bottles","Custom message card"] },
  { id:"137", slug:"cocomelon-birthday-return-hamper", name:"Cocomelon Birthday Return Hamper", price:1399, image:["/images/babybirth7.webp"], category:["Occasions","Birthday","Kids"], subcategory:["Kids","Cocomelon","Return Favours","Baby Shower And Baby Announcement/ Baby Arrival","Occasions","First Birthday — Boy","First Birthday — Girl"], tagline:"Cute, colorful & joyful", description:"A vibrant Cocomelon themed birthday hamper filled with treats, candles and fun goodies for kids.", details:["Snack jars","Mini candles","Themed cutouts","Return gift basket","Personalized note"] }, 
  
  //kidsreturn
  {id:"151",name:"Pastel Mug Duo Hamper",slug:"pastel-mug-duo-hamper",price:650,oldPrice:700,image:"/images/kidsreturn1.jpg",category:"Birthday",subcategory:["Kids Return Favours","Birthday"],tagline:"Cute pastel mugs for adorable return gifts",description:"Set of two pastel green ceramic mugs with a minimal ribbed design, perfect as return gifts for kids.",details:["Set of 2 ceramic mugs","Soft pastel green finish","Minimal ribbed texture","Reusable & durable","Ideal for return gifting"]},
  {id:"152",name:"Heart Print Mug Hamper",slug:"heart-print-mug-hamper",price:650,oldPrice:700,image:"/images/kidsreturn2.jpg",category:"Birthday",subcategory:["Kids Return Favours","Birthday"],tagline:"Spread love with every sip",description:"Set of two cream ceramic mugs with cute red heart prints, a charming return gift option.",details:["Premium ceramic mug","Red heart print design","Cute & aesthetic look","Kid-friendly gifting option","Perfect for birthday favours"]},
  {id:"153",name:"Mini Teddy Gift Box Blue",slug:"mini-teddy-gift-box-blue",price:650,oldPrice:700,image:["/images/kidsreturn3.jpg","/images/kidsreturn3.2.jpg"],category:"Birthday",subcategory:["Kids Return Favours","Birthday"],tagline:"Adorable teddy surprise in a box",description:"Transparent gift box featuring a cute blue teddy placed on decorative fillers, ready to be gifted as a return favour.",details:["Clear premium box","Blue teddy inside","Decorative shredded fillers","Compact & cute design","Ready-to-gift packaging"]},
  {id:"154",name:"Mini Teddy Gift Box Peach",slug:"mini-teddy-gift-box-peach",price:650,oldPrice:700,image:"/images/kidsreturn4.jpg",category:"Birthday",subcategory:["Kids Return Favours","Birthday"],tagline:"Elegant teddy hamper in soft tones",description:"Aesthetic transparent box with a peach teddy, styled with white fillers and finished with a soft pink ribbon bow.",details:["Transparent box with lid","Peach teddy centerpiece","White filler decoration","Pink ribbon bow styling","Perfect premium return gift"]},
 
   //birthday

   //birthday boy
  {id:"161",slug:"royal-boss-baby-blue-cart-hamper",name:"Royal Boss Baby Blue Cart Hamper",price:1799,image:["/images/babyboy1.jpg","/images/babyboy1.2.jpg"],category:["Occasions","Birthday","Kids"],subcategory:["Baby Shower And Baby Announcement/ Baby Arrival","First Birthday — Boy","Boss Baby"],tagline:"Stylish boss baby vibes in blue",description:"Premium boss baby themed cart hamper with cute decor, treats and personalized elements.",details:["Designer cart base","Boss baby theme cutouts","Snack jars & goodies","Mini plant decor","Custom name tag"]},
  {id:"162",slug:"blue-boss-baby-basket-favours",name:"Blue Boss Baby Basket Favours",price:1499,image:["/images/babyboy2.jpg","/images/babyboy2.2.jpg"],category:["Occasions","Birthday","Kids"],subcategory:["Baby Shower And Baby Announcement/ Baby Arrival","First Birthday — Boy","Boss Baby"],tagline:"Cute return favours with boss charm",description:"Adorable mini basket hampers in boss baby theme, filled with treats for baby boy celebrations.",details:["Handwoven baskets","Boss baby tags","Snack jars","Balloon accents","Return favour setup"]},
  {id:"163",slug:"jungle-baby-favour-baskets",name:"Jungle Baby Favour Baskets",price:1299,image:["/images/babyboy3.jpg","/images/babyboy3.2.jpg"],category:["Occasions","Birthday","Kids"],subcategory:["Baby Shower And Baby Announcement/ Baby Arrival","First Birthday — Boy","Jungle"],tagline:"Wild jungle cuteness for celebrations",description:"Fun jungle theme hampers with animal accents and goodies, perfect for baby boy birthdays and return gifting.",details:["Jungle theme cutouts","Woven baskets","Snack jars","Green ribbon styling","Thank you cards"]},
   {id:"164",slug:"baby-snack-surprise-box",name:"Baby Snack Surprise Box",price:999,image:"/images/babychips.jpg",category:["Birthday"],subcategory:["Kids Return Favours"],tagline:"Simple cute snack gifting box",description:"Compact and budget-friendly baby hamper filled with snacks and cute elements for small celebrations or return gifts.",details:["Snack assortment","Cute tags","Compact box","Budget friendly","Custom note option"]},
   {id:"165",slug:"little-prince-bloom-basket",name:"Little Bloom Basket",price:1199,image:["/images/baby4.jpg"],category:["Occasions","Birthday"],subcategory:["Baby Shower And Baby Announcement/Baby Arrival","First Birthday — Boy","First Birthday — Girl"],tagline:"Soft blue floral charm for newborn celebrations",description:"Elegant pastel blue baby hamper with floral handle decor, jars and potlis, finished with a cute teddy accent and card.",details:["Floral decorated basket","2 premium jars","Fabric potlis","Teddy embellishment","Greeting card"]},
   {id:"166",slug:"royal-blue-elephant-hamper",name:"Royal Blue Elephant Hamper",price:1899,image:["/images/birthdayboy1.webp"],category:["Birthday","Kids"],subcategory:["Kids Return Favours","First Birthday — Boy","Jungle"],tagline:"Elegance with a royal touch",description:"A premium hamper with rich blue floral decor, cakes and luxury jars for classy gifting.",details:["Mini cake with dome cover","Decorative jars with elephant lids","Artificial floral decor","Premium tray base","Luxury tassel accents"]},
   {id:"167",slug:"jungle-theme-kids-hamper",name:"Jungle Theme Kids Hamper",price:1299,image:["/images/birthdayboy2.webp"],category:["Birthday","Kids"],subcategory:["Kids Return Favours","First Birthday — Boy","Jungle"],tagline:"Wild fun in every hamper",description:"A fun jungle-themed hamper with plants and cute animal elements for kids’ celebrations.",details:["Printed animal theme basket","Indoor plant","Cookies/snacks jar","Decorative flowers","Personalized message card"]}, 
   { id:"168", slug:"kids-diy-activity-birthday-hamper", name:"Kids DIY Activity Birthday Hamper", price:1499, image:["/images/birthdayboy3.webp","/images/birthdayboy3.2.webp"], category:["Birthday","Kids"], subcategory:["First Birthday — Boy","Little Man"], tagline:"Fun, creativity & surprises", description:"An engaging birthday hamper packed with DIY activity kits, toys and fun goodies for kids.", details:["DIY activity kit","Mini toys","Stationery items","Themed greeting card","Decorative gift box"] },
   { id:"169", slug:"baby-tricycle-premium-hamper", name:"Baby Tricycle Premium Hamper", price:2499, image:["/images/bothbrdy.webp"], category:["Birthday","Kids"], subcategory:["First Birthday — Boy","First Birthday — Girl","Carnival / Circus"], tagline:"Elegant baby gifting with a premium touch", description:"A beautifully crafted tricycle-themed hamper with teddy, honey jar and decor.", details:["Metal tricycle frame","Teddy bear","Honey jar","Mini bottle decor","Floral accents","Net wrapping","Custom tag"] },
   { id:"170", slug:"cocomelon-first-birthday-hamper", name:"Cocomelon First Birthday Hamper", price:1799, image:["/images/birthdayboy6.webp"], category:["Birthday","Kids"], subcategory:["First Birthday — Boy","Cocomelon"], tagline:"Fun and colorful first birthday surprise", description:"A vibrant Cocomelon-themed hamper with plant, honey jar and birthday decor.", details:["Wooden tray","Live plant","Honey jar","Theme cutouts","Net wrapping","Birthday tag","Name card"] },

   //birthday girl
  {id:"181",slug:"princess-glass-luxury-hamper-box",name:"Princess Glass Luxury Hamper Box",price:1899,image:["/images/babygirl1.jpg","/images/babygirl1.1.jpg"],category:["Occasions","Birthday","Kids"],subcategory:["Baby Shower And Baby Announcement/ Baby Arrival","First Birthday — Girl","Princess / Barbie", "Disney"],tagline:"Elegant glass hamper for baby princess",description:"Premium transparent box hamper with floral styling, jars and personalized details.",details:["Luxury glass box","Floral decor","Snack jars","Custom name tag","Premium finish"]},
  {id:"182",slug:"pink-hot-air-balloon-hamper-set",name:"Pink Hot Air Balloon Hamper Set",price:1599,image:"/images/babygirl2.jpg",category:["Occasions","Birthday"],subcategory:["Baby Shower And Baby Announcement/ Baby Arrival","First Birthday — Girl"],tagline:"Dreamy pink hampers with balloon theme",description:"Charming pink hampers inspired by hot air balloon theme with cute decor and goodies.",details:["Ceramic jars","Balloon theme stickers","Floral ribbons","Return favours ready","Thank you cards"]},
  {id:"183",slug:"royal-princess-carriage-hamper",name:"Royal Princess Carriage Hamper",price:1999,image:"/images/babygirl4.jpg",category:["Occasions","Birthday","Kids"],subcategory:["Baby Shower And Baby Announcement/ Baby Arrival","First Birthday — Girl","Princess / Barbie","Disney"],tagline:"Luxury carriage hamper for little queen",description:"Grand princess carriage style hamper with rich florals and elegant setup — perfect for premium baby girl celebrations.",details:["Carriage base design","Artificial florals","Premium jars","Elegant decor","Customized message card"]},
  {id:"184",slug:"baby-girl-velvet-bliss-boxes",name:"Baby Girl Velvet Bliss Boxes",price:899,image:["/images/returngift3.jpg"],category:["Birthday"],subcategory:["Kids Return Favours"],tagline:"Cute pink keepsake boxes for little princess",description:"Velvet finish round favor boxes in blush pink with adorable elephant design, perfect for baby girl gifting.",details:["Velvet round boxes","Elephant motif topper","Premium finish","Ideal for sweets/dry fruits","Set of 4"]},
  {id:"185",slug:"princess-carousel-dream-hamper",name:"Princess Carousel Dream Hamper",price:1499,image:["/images/p-carousel.png"],category:["Occasions","Birthday","Kids"],subcategory:["Baby Shower And Baby Announcement/ Baby Arrival","First Birthday — Girl","Princess / Barbie","Disney"],tagline:"A dreamy carousel themed luxury hamper",description:"Beautiful pink themed hamper with carousel accents, florals and elegant gift arrangement for girls.",details:["Carousel decor elements","Premium gift boxes","Artificial florals","Luxury base tray","Soft pastel theme"]},
  { id: "186", slug: "kids-birthday-custom-hamper", name: "Kids Custom Birthday Hamper", category: ["Birthday"], subcategory: ["First Birthday — Girl"], price: 1499, oldPrice: 1899, tagline: "Fun, colorful & fully personalized", image: ["images/birthdaygirl1.webp","images/birthdaygirl1.1.webp"], description: "A vibrant birthday hamper with custom name banners, colorful decor, and treats for kids.", details: ["Custom name tags","Colorful theme decor","Snacks & jars","Mini gift items","Perfect for return gifts"] },
  { id: "187", slug: "pink-butterfly-birthday-hamper", name: "Pink Butterfly Birthday Hamper", category: ["Occasions","Birthday"], subcategory: ["Baby Shower And Baby Announcement/ Baby Arrival","First Birthday — Girl"], price: 1599, oldPrice: 1999, tagline: "Cute & dreamy pink celebration hamper", image: ["images/babygirl5.webp"], description: "A dreamy pink butterfly-themed hamper perfect for girls' birthday celebrations.", details: ["Butterfly theme decor","Pink fan accents","Glass jars with treats","Custom name tag","Premium wooden tray base"] },
  {id:"188",slug:"pastel-butterfly-return-hamper",name:"Pastel Butterfly Return Hamper",price:899,image:["/images/birthdaygirl2.webp"],category:["Occasions","Birthday","Kids"],subcategory:["Baby Shower And Baby Announcement/Baby Arrival","First Birthday — Girl","Kids Return Favours","Butterfly"],tagline:"Sweet memories in pastel charm",description:"A cute pastel-themed return hamper with jars and treats, perfect for kids’ birthdays.",details:["Decorative pastel box","2 Glass jars with chocolates","Shredded filler","Personalized thank you card","Ribbon bow packaging"]}, 
  
  
  //single hampers
  {id:"200",slug:"serenity-bloom-candle-basket",name:"Serenity Bloom Candle Basket",price:1999,image:"/images/flower1.jpg",category:["Cake/Flower Hampers"],subcategory:["Flower Hampers","Cake/Flower Hampers"],tagline:"Relaxing floral hamper with soothing vibes",description:"Aesthetic rope basket hamper with candle centerpiece, fresh flowers and curated treats.",details:["Rope basket base","Scented candle","Fresh floral arrangement","Snack items","Decorative ribbons"]},
  {id:"201",slug:"royal-bloom-luxe-hamper",name:"Royal Bloom Luxe Hamper",price:2299,image:["/images/flower2.jpg","/images/flower2.2.jpg"],category:["Cake/Flower Hampers"],subcategory:["Flower Hampers","Cake/Flower Hampers"],tagline:"Luxury floral hamper with elegant styling",description:"Premium hamper with delicate florals, jars and gourmet treats styled in a sophisticated arrangement.",details:["Premium basket base","Decor jars","Fresh flowers","Luxury styling","Gift tags"]},
  {id:"202",slug:"rustic-chai-delight-hampers",name:"Rustic Chai Delight Hampers",price:1499,image:["/images/hampers3.jpg"],category:["Cake/Flower Hampers"],subcategory:["Cake/Flower Hampers"],tagline:"Desi chai gifting with rustic charm",description:"Eco-friendly woven baskets filled with masala chai, snacks and thoughtful gifting elements.",details:["Woven basket","Masala chai box","Snack packs","Jute potli","Personalized note"]},
  {id:"203",slug:"boss-baby-thank-you-cake-hamper",name:"Boss Baby Thank You Cake Hampers",price:399,image:"/images/returncake.jpg",category:["Birthday","Cake/Flower Hampers"],subcategory:["Kids Return Favours","Cake/Flower Hampers","Cake Hampers"],tagline:"Cute boss baby treats for little celebrations",description:"Adorable individually packed cake hampers wrapped in boss baby theme — perfect as return favours.",details:["Individually packed cake slices","Boss baby themed wrap","Thank you printed label","Ready-to-gift packaging","Perfect for return favours"]},
  {id:"204",slug:"floral-basket-pink-hamper",name:"Floral Pink Basket Hamper",category:["Cake/Flower Hampers"],subcategory:["Flower Hampers","Cake/Flower Hampers"],price:1899,oldPrice:2299,tagline:"Soft florals with elegant gifting vibes",image:["/images/flower3.webp","/images/flower3.2.webp","/images/flower3.3.webp"],description:"A beautifully curated floral hamper with soft pink tones, perfect for baby showers or intimate celebrations.",details:["Premium rope basket with satin ribbon","Fresh floral arrangement","Gourmet treats & jar inclusions","Custom message card","Elegant pastel theme"]},
  {id:"205",slug:"floral-basket-premium-hamper",name:"Premium Floral Basket Hamper",category:["Cake/Flower Hampers"],subcategory:["Flower Hampers","Cake/Flower Hampers"],price:1199,oldPrice:2099,tagline:"A luxurious blend of florals & gifting",image:"/images/flower4.webp",description:"An elegant basket filled with premium flowers, jars, and curated goodies for sophisticated gifting.",details:["Handwoven basket with handle","Mixed fresh flowers","Premium jars & treats","Custom printed card","Luxury aesthetic finish"]},
  {id:"206",slug:"royal-blue-elephant-cake-hamper",name:"Royal Blue Elephant Cake Hamper",price:1999,image:"/images/cake1.webp",category:["Cake/Flower Hampers"],subcategory:["Cake/Flower Hampers","Cake Hampers"],tagline:"Royal charm with a sweet indulgence",description:"A luxurious blue-themed hamper featuring a freshly baked cake under a dome, paired with elegant elephant jars.",details:["Mini cake with transparent dome cover","2–3 premium jars with golden elephant lids","Artificial blue & teal floral arrangement","Decorative tassel accents","Premium round tray base"]},
  { id:"207", slug:"blue-floral-elegance-hamper", name:"Blue Floral Elegance Hamper", price:1999, image:["/images/flower5.webp"], category:["Cake/Flower Hampers"], subcategory:["Cake/Flower Hampers","Flower Hampers"], tagline:"Rustic charm meets elegance", description:"A sophisticated floral hamper with fresh blooms, candles and premium packaging for special gifting.", details:["Fresh floral arrangement","Decorative rope basket","Scented candle","Gift box","Custom tag"] }, 


];

function getImage(p) { return Array.isArray(p.image) ? p.image[0] : p.image; }
function getCat(p) { return Array.isArray(p.category) ? p.category[0] : p.category; }

function normStr(s) { return s == null ? "" : String(s).trim().toLowerCase(); }
function normArr(v) { return v == null ? [] : Array.isArray(v) ? v.map(normStr) : [normStr(v)]; }

function matchCat(p, cat) {
  if (cat === "All") return true;
  const c = normStr(cat);
  return normArr(p.category).includes(c) || normArr(p.subcategory).includes(c);
}
function matchSub(p, sub) {
  if (!sub) return true;
  return normArr(p.subcategory).includes(normStr(sub));
}

// CART
const CART_KEY = "c3-cart-v1";
function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); } catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cart:update"));
}
function cartAdd(id, qty = 1) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) item.qty += qty; else cart.push({ id, qty });
  saveCart(cart);
}
function cartRemove(id) { saveCart(getCart().filter(i => i.id !== id)); }
function cartSetQty(id, qty) { saveCart(getCart().map(i => i.id === id ? { ...i, qty: Math.max(1, qty) } : i)); }
function cartClear() { saveCart([]); }
function cartCount() { return getCart().reduce((s, i) => s + i.qty, 0); }

function updateCartCount() {
  const c = cartCount();
  const el = document.getElementById('cartCount');
  if (el) { el.textContent = c; el.style.display = c > 0 ? '' : 'none'; }
}

function showToast(msg) {
  let el = document.querySelector(".toast");
  if (!el) { el = document.createElement("div"); el.className = "toast"; document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(window._tt);
  window._tt = setTimeout(() => el.classList.remove("show"), 1800);
}

function waLink(text) { return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`; }
function waOrder(p) {
  return waLink(`Hi C3 Studio! 🌸\n\nI'd like to order:\n• ${p.name} — ${fmtPrice(p.price)}\n\nCould you please share availability & customisation options?`);
}
function waCustomise(p) {
  return waLink(`Hi C3 Studio! ✨\n\nI'd love to CUSTOMISE this hamper:\n• ${p.name} — ${fmtPrice(p.price)}\n\nI'd like to personalise:\n- Name / message:\n- Theme / colours:\n- Quantity:\n- Delivery date:\n\nPlease share options & pricing. Thank you!`);
}
function waCartOrder(items, total) {
  const lines = items.map((it, n) => `${n+1}. ${it.product.name} × ${it.qty} — ${fmtPrice(it.product.price * it.qty)}`).join("\n");
  return waLink(`Hi C3 Studio! 🌸\n\nI'd like to place an order:\n\n${lines}\n\nTotal: ${fmtPrice(total)}\n\nPlease confirm availability, customisation & delivery details.`);
}

// NAV HTML (shared) — dropdown handled via inline onclick + CSS
function navHTML(activePage) {
  const count = cartCount();
  return `
<div class="top-bar marquee">
  <div class="marquee-track">
    <span>✨ Trousseau & Luxury Gifting</span>
    <span>🌍 Shipping Worldwide</span>
    <span>💬 DM for Custom Orders</span>
    <span>🎁 Bulk & Corporate Gifting Available</span>
    <span>✨ Trousseau & Luxury Gifting</span>
    <span>🌍 Shipping Worldwide</span>
    <span>💬 DM for Custom Orders</span>
    <span>🎁 Bulk & Corporate Gifting Available</span>
  </div>
</div>
<header class="site-header">
  <div class="container-x nav-row">
    <a href="/" class="brand">
      <img src="/images/logo.png" alt="C3 Studio">
      <div>
        <div class="brand-name">C3 Studio</div>
        <div class="brand-tag">Luxury Gift Hampers</div>
      </div>
    </a>
    <nav class="main-menu">
      <a href="/" ${activePage==='home'?'class="active"':''}>Home</a>
      <div class="dd-wrap" id="ddWrap" style="position:relative">
        <button class="menu-link" id="ddBtn" onclick="c3ToggleDd(event)">Shop <span style="font-size:9px">▼</span></button>
        <div class="dd-menu" id="ddMenu" style="display:none;flex-direction:column;position:absolute;top:100%;left:0;background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:.5rem;min-width:220px;z-index:999;box-shadow:var(--shadow-soft)">
          <a href="/shop.html" style="padding:.5rem .75rem;display:block;white-space:nowrap;border-radius:6px" onmouseover="this.style.background='var(--secondary)'" onmouseout="this.style.background=''">All Hampers</a>
          ${CATEGORIES.map(c=>`<a href="/shop.html?category=${encodeURIComponent(c.key)}" style="padding:.5rem .75rem;display:block;white-space:nowrap;border-radius:6px" onmouseover="this.style.background='var(--secondary)'" onmouseout="this.style.background=''">${c.label}</a>`).join('')}
          <a href="/bulk.html" style="padding:.5rem .75rem;display:block;white-space:nowrap;border-radius:6px;color:var(--primary);font-weight:600" onmouseover="this.style.background='var(--secondary)'" onmouseout="this.style.background=''">Bulk & Corporate Order</a>
        </div>
      </div>
      <a href="/shop.html?category=Cake%2FFlower%20Hampers&sub=Cake%20Hampers">Cake</a>
      <a href="/gifts.html" ${activePage==='gifts'?'class="active"':''}>For Gifts</a>
      <a href="/about.html" ${activePage==='about'?'class="active"':''}>About</a>
      <a href="/contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a>
    </nav>
    <div style="display:flex;align-items:center;gap:.4rem">
      <form class="search-bar" id="searchForm" onsubmit="c3Search(event)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <input id="searchInput" placeholder="Search hampers…">
      </form>
      <a href="/cart.html" class="icon-btn" aria-label="Cart" style="position:relative">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <span class="cart-pill" id="cartCount" style="${count>0?'':'display:none'}">${count}</span>
      </a>
      <button class="icon-btn menu-toggle" aria-label="Menu" id="mobileMenuBtn" onclick="document.getElementById('mobileDrawer').style.display='flex'">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>
  </div>
</header>
<div class="mobile-drawer" id="mobileDrawer" style="display:none" onclick="if(event.target===this)this.style.display='none'">
  <aside class="mobile-panel" onclick="event.stopPropagation()">
    <button onclick="document.getElementById('mobileDrawer').style.display='none'" style="float:right;padding:.25rem .75rem;border:0;background:none;font-size:22px;cursor:pointer">×</button>
    <form style="margin-top:2rem" onsubmit="c3MobileSearch(event)">
      <input id="mobileSearchInput" placeholder="Search hampers…" style="width:100%;padding:.75rem 1rem;border-radius:999px;border:1px solid var(--border);background:var(--secondary);outline:0;font-family:inherit;font-size:14px;box-sizing:border-box">
    </form>
    <div style="margin-top:1.5rem">
      <a href="/" onclick="document.getElementById('mobileDrawer').style.display='none'">Home</a>
      <a href="/shop.html" onclick="document.getElementById('mobileDrawer').style.display='none'">Shop All</a>
      <a href="/shop.html?category=Cake%2FFlower%20Hampers&sub=Cake%20Hampers" onclick="document.getElementById('mobileDrawer').style.display='none'">Cake</a>
      <a href="/gifts.html" onclick="document.getElementById('mobileDrawer').style.display='none'">For Gifts</a>
      <a href="/about.html" onclick="document.getElementById('mobileDrawer').style.display='none'">About</a>
      <a href="/contact.html" onclick="document.getElementById('mobileDrawer').style.display='none'">Contact</a>
      <div style="padding-top:1rem;padding-bottom:.5rem;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--accent)">Shop by Category</div>
      ${CATEGORIES.map(c=>`<a href="/shop.html?category=${encodeURIComponent(c.key)}" class="mobile-sub" onclick="document.getElementById('mobileDrawer').style.display='none'">${c.label}</a>`).join('')}
      <a href="/bulk.html" class="mobile-sub" style="color:var(--primary);font-weight:600" onclick="document.getElementById('mobileDrawer').style.display='none'">Bulk & Corporate Order</a>
    </div>
  </aside>
</div>`;
}

function footerHTML() {
  return `
<footer class="site-footer">
  <div class="container-x footer-grid">
    <div class="footer-col">
      <a href="/" class="brand" style="margin-bottom:1rem">
        <img src="/images/logo.png" alt="C3 Studio">
        <div><div class="brand-name">C3 Studio</div><div class="brand-tag">Premium Gift Hampers</div></div>
      </a>
      <p style="font-size:14px;color:var(--muted-foreground);line-height:1.7;margin-top:1rem">Delhi's favourite premium gift hampers brand. Trousseau, weddings, baby showers, corporate & festive gifting. Shipped worldwide with love.</p>
    </div>
    <div class="footer-col">
      <h4>Explore</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/shop.html">Shop All</a></li>
        <li><a href="/about.html">About Us</a></li>
        <li><a href="/contact.html">Contact</a></li>
        <li><a href="/cart.html">Your Cart</a></li>
        <li><a href="/bulk.html">Bulk Order</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Categories</h4>
      <ul>
        <li><a href="/shop.html?category=Wedding">Wedding</a></li>
        <li><a href="/shop.html?category=Occasions">Occasions</a></li>
        <li><a href="/shop.html?category=Festivals">Festivals</a></li>
        <li><a href="/shop.html?category=Birthday">Birthday</a></li>
        <li><a href="/shop.html?category=Cake%2FFlower%20Hampers">Cake / Flower</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Get in Touch</h4>
      <ul>
        <li>📍 ${ADDRESS}</li>
        <li>📞 <a href="tel:${PHONE.replace(/\s+/g,'')}">${PHONE}</a></li>
        <li>✉ <a href="mailto:${EMAIL}">${EMAIL}</a></li>
        <li><a href="https://wa.me/${WA}" target="_blank" rel="noreferrer">💬 WhatsApp Us</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom container-x">© ${new Date().getFullYear()} C3 Studio. All rights reserved.</div>
</footer>`;
}

// Global nav functions — must be defined after navHTML is injected
function c3ToggleDd(e) {
  e.stopPropagation();
  const m = document.getElementById('ddMenu');
  if (m) m.style.display = m.style.display === 'none' ? 'flex' : 'none';
}
function c3Search(e) {
  e.preventDefault();
  const q = (document.getElementById('searchInput') || {}).value?.trim();
  if (q) window.location.href = '/shop.html?q=' + encodeURIComponent(q);
}
function c3MobileSearch(e) {
  e.preventDefault();
  const q = (document.getElementById('mobileSearchInput') || {}).value?.trim();
  if (q) window.location.href = '/shop.html?q=' + encodeURIComponent(q);
}

// Close dropdown on outside click
document.addEventListener('click', function() {
  const m = document.getElementById('ddMenu');
  if (m) m.style.display = 'none';
});

function productCardHTML(p, eager=false) {
  const img = getImage(p);
  const cat = getCat(p);
  return `<div class="card">
    <a href="/product.html?slug=${p.slug}" class="card-img">
      <img src="${img}" alt="${p.name}" ${eager?'':'loading="lazy"'} decoding="async">
      <span class="badge cat">${cat}</span>
      ${p.oldPrice ? '<span class="badge sale">Sale</span>' : ''}
    </a>
    <div class="card-body">
      <div class="card-tag">${p.tagline}</div>
      <a href="/product.html?slug=${p.slug}"><h3>${p.name}</h3></a>
      <div class="price-row">
        <span class="price">${fmtPrice(p.price)}</span>
        ${p.oldPrice ? `<span class="price-old">${fmtPrice(p.oldPrice)}</span>` : ''}
      </div>
      <div class="card-actions">
        <button class="btn btn-dark" onclick="cartAdd('${p.id}');showToast('Added to cart ✓')">Add to Cart</button>
        <a href="${waCustomise(p)}" target="_blank" rel="noreferrer" class="btn btn-gold">✨ Customise</a>
      </div>
      <a href="${waOrder(p)}" target="_blank" rel="noreferrer" class="btn-wa-mini">💬 Order on WhatsApp</a>
    </div>
  </div>`;
}
