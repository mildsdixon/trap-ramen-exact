import { useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock3,
  Camera,
  MapPin,
  Menu,
  Phone,
  ShoppingCart,
  X,
} from "lucide-react";

const phoneHref = "tel:+15866300099";
const categories = ["Ramen", "Rice", "Trapetizers", "Wraps", "Desserts"];

const favorites = {
  Ramen: [
    { name: "Seafood Boil Ramen", price: "$16.99", image: "assets/food/seafood-boil-ramen.jpg" },
    { name: "Trap Rice", price: "$15.99", image: "assets/food/pineapple-bowls.jpg" },
    { name: "Lobster Egg Roll", price: "$13.99", image: "assets/food/lobster-egg-roll.jpg" },
    { name: "Trap Whole Wings", price: "$14.99", image: "assets/food/trap-wings.jpg" },
  ],
  Rice: [
    { name: "Chicken Trap Rice", price: "$17", image: "assets/food/pineapple-bowls.jpg" },
    { name: "Steak Trap Rice", price: "$18", image: "assets/food/pineapple-bowls.jpg" },
    { name: "Shrimp Trap Rice", price: "$18", image: "assets/food/pineapple-bowl-cutout.png" },
    { name: "Three Meat Trap Rice", price: "$30", image: "assets/food/pineapple-bowls.jpg" },
  ],
  Trapetizers: [
    { name: "Trap Whole Wings", price: "5/$10", image: "assets/food/trap-wings.jpg" },
    { name: "Trap Rolls", price: "3/$18", image: "assets/food/lobster-egg-roll.jpg" },
    { name: "Trap Jumbo Shrimp", price: "$18", image: "assets/ads/ad-01.jpg" },
    { name: "Trap Trio", price: "$25", image: "assets/food/trap-wings.jpg" },
  ],
  Wraps: [
    { name: "Chicken Trap Wrap", price: "$15", image: "assets/food/pineapple-bowls.jpg" },
    { name: "Steak Trap Wrap", price: "$15", image: "assets/food/pineapple-bowls.jpg" },
    { name: "Shrimp Trap Wrap", price: "$15", image: "assets/food/pineapple-bowl-cutout.png" },
    { name: "Trap Veggie Wrap", price: "$15", image: "assets/food/pineapple-bowls.jpg" },
  ],
  Desserts: [
    { name: "Banana Pudding", price: "$5", image: "assets/ads/ad-14.jpg" },
    { name: "Strawberry Banana Pudding", price: "$6", image: "assets/ads/ad-14.jpg" },
    { name: "Dipped Cheesecake", price: "$8", image: "assets/ads/ad-14.jpg" },
    { name: "Trapade", price: "$6", image: "assets/ads/ad-17.jpg" },
  ],
};

const promos = [
  "assets/ads/ad-20.jpg",
  "assets/ads/ad-17.jpg",
  "assets/ads/ad-13.jpg",
  "assets/ads/ad-10.jpg",
  "assets/ads/ad-11.jpg",
  "assets/ads/ad-14.jpg",
];

const gallery = [
  "assets/food/pineapple-bowls.jpg",
  "assets/food/pineapple-bowl-cutout.png",
  "assets/food/seafood-boil-ramen.jpg",
];

function Brand() {
  return <img className="brand" src="assets/brand/trap-ramen-logo.png" alt="Trap Ramen — Ramen Done Different" />;
}

function Header({ menuOpen, onToggle }) {
  const close = () => menuOpen && onToggle();
  return (
    <header className="site-header">
      <a className="brand-link" href="#top" aria-label="Trap Ramen home"><Brand /></a>
      <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
        <a href="#menu" onClick={close}>Menu</a>
        <a href="#top" onClick={close}>About</a>
        <a href={phoneHref} onClick={close}>Catering</a>
        <a href="#visit" onClick={close}>Contact</a>
      </nav>
      <a className="order-button order-button--header" href={phoneHref}>Order now <ChevronRight /></a>
      <button className="menu-button" type="button" onClick={onToggle} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>
        {menuOpen ? <X /> : <Menu />}<span>Menu</span>
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <h1 aria-label="Ramen Done Different">
          <span className="hero-white">Ramen</span>
          <span className="hero-gold">Done</span>
          <span className="hero-red">Different</span>
        </h1>
        <div className="hero-actions">
          <a className="order-button" href={phoneHref}>Order now <ChevronRight /></a>
          <a className="view-button" href="#menu">View menu <ChevronRight /></a>
        </div>
      </div>
      <div className="hero-food">
        <img src="assets/food/pineapple-bowl-cutout.png" alt="Pineapple bowl loaded with shrimp, steak, rice and vegetables" />
      </div>
    </section>
  );
}

function CategoryRail({ active, onChange }) {
  return (
    <div className="category-rail" role="tablist" aria-label="Menu categories">
      {categories.map((category) => (
        <button key={category} type="button" role="tab" aria-selected={active === category} onClick={() => onChange(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

function Favorites({ category }) {
  return (
    <section className="favorites-panel" aria-labelledby="favorites-title">
      <h2 id="favorites-title"><span>Fan</span> favorites</h2>
      <div className="favorite-list" role="tabpanel">
        {favorites[category].map((item) => (
          <a className="favorite-row" href={phoneHref} key={item.name}>
            <img src={item.image} alt="" />
            <strong>{item.name}</strong>
            <b>{item.price}</b>
            <ChevronRight aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}

function Promos() {
  const [slide, setSlide] = useState(0);
  const shown = useMemo(() => [promos[slide], promos[(slide + 1) % promos.length]], [slide]);
  const move = (step) => setSlide((slide + step + promos.length) % promos.length);

  return (
    <section className="promo-panel" id="specials" aria-labelledby="promo-title">
      <h2 id="promo-title"><span>What’s</span> dropping</h2>
      <div className="promo-stage">
        <button type="button" aria-label="Previous promotions" onClick={() => move(-1)}><ChevronLeft /></button>
        <div className="promo-cards">
          {shown.map((image, index) => <img key={`${image}-${index}`} src={image} alt={`Trap Ramen current promotion ${index + 1}`} />)}
        </div>
        <button type="button" aria-label="Next promotions" onClick={() => move(1)}><ChevronRight /></button>
      </div>
      <div className="promo-dots" aria-label={`Promotion ${slide + 1} of ${promos.length}`}>
        {promos.slice(0, 3).map((_, index) => <span key={index} className={slide % 3 === index ? "is-active" : ""} />)}
      </div>
    </section>
  );
}

function GalleryStrip() {
  return (
    <div className="gallery-strip" aria-label="Trap Ramen food gallery">
      {gallery.map((image, index) => <img src={image} alt={`Trap Ramen dish ${index + 1}`} key={image} />)}
    </div>
  );
}

function Visit() {
  return (
    <section className="visit" id="visit">
      <h2>Pull up <span>hungry</span></h2>
      <div className="visit-detail"><MapPin /><a href="https://maps.google.com/?q=33415+Harper+Clinton+Township+MI+48035">33415 Harper,<br />Clinton Township</a></div>
      <div className="visit-detail"><Phone /><a href={phoneHref}>586-630-0099</a></div>
      <div className="visit-detail visit-hours"><Clock3 /><p><b>Tue–Thu</b> 2–10<br /><b>Fri–Sat</b> 2–11<br /><b>Sun–Mon</b> Closed</p></div>
      <div className="visit-detail"><Camera /><a href="https://instagram.com/trapramen">@TrapRamen</a></div>
      <a className="footer-order" href={phoneHref}><ShoppingCart /> <span>Order now</span> <ChevronRight /></a>
    </section>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("Ramen");

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <Header menuOpen={menuOpen} onToggle={() => setMenuOpen((value) => !value)} />
      <main>
        <Hero />
        <section className="menu-zone" id="menu">
          <CategoryRail active={category} onChange={setCategory} />
          <div className="menu-promo-grid">
            <Favorites category={category} />
            <Promos />
          </div>
          <GalleryStrip />
        </section>
        <Visit />
      </main>
      <a className="mobile-order" href={phoneHref}><ShoppingCart /><span>Order now</span><ChevronRight /></a>
    </div>
  );
}
