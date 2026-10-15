import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Menu,
  MoveRight,
  X,
} from "lucide-react";

type Category = "All" | "Tees" | "Denim" | "Outerwear" | "Accessories";
type Palette = "amber" | "forest";

const INSTAGRAM = "https://www.instagram.com/trendcorner_mes/";
const WHATSAPP = "919101153092";

const siteAsset = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

const products = [
  {
    id: "tee-faith",
    name: "Faith Washed Tee",
    type: "Tees",
    price: 1199,
    detail: "Heavy cotton · Oversized fit",
    image: siteAsset("tee-look.webp"),
    alt: "Trend Corner editorial look featuring a warm ivory oversized streetwear tee",
    label: "New drop",
  },
  {
    id: "jeans-star",
    name: "Star Wash Baggy Jeans",
    type: "Denim",
    price: 2199,
    detail: "Rigid denim · Wide-leg fit",
    image: siteAsset("baggy-denim.webp"),
    alt: "Close-up editorial photograph of relaxed dark washed wide-leg denim",
    label: "The fit",
  },
  {
    id: "jkt-varsity",
    name: "Varsity Bomber",
    type: "Outerwear",
    price: 3499,
    detail: "Ribbed trim · Relaxed layer",
    image: siteAsset("hero-sunset.webp"),
    alt: "Layered charcoal streetwear against a dramatic amber dusk landscape",
    label: "Last pieces",
  },
  {
    id: "chain-cross",
    name: "Cross Pendant Chain",
    type: "Accessories",
    price: 599,
    detail: "Metal · 22 inch",
    image: siteAsset("chain-accessories.webp"),
    alt: "Silver-toned chain, dark metal rings and accessories on earth-brown stone",
    label: "Finish the fit",
  },
];

const categories: Category[] = [
  "All",
  "Tees",
  "Denim",
  "Outerwear",
  "Accessories",
];
function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}
function formatPrice(price: number) {
  return `₹${price.toLocaleString("en-IN")}`;
}

export default function Home() {
  const [palette, setPalette] = useState<Palette>("amber");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      targets.forEach(target => target.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 }
    );
    targets.forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, []);
  const visibleProducts = products.filter(
    product => activeCategory === "All" || product.type === activeCategory
  );
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" data-palette={palette} id="top">
      <div className="announcement">
        <span>From Silapathar, Assam</span>
        <span className="announcement-mark" aria-hidden="true">
          ✳
        </span>
        <span>Ask us about shipping</span>
      </div>
      <header className="site-header">
        <a
          className="brand-lockup"
          href="#top"
          aria-label="Trend Corner home"
          onClick={closeMenu}
        >
          <span className="brand-seal">TC</span>
          <span className="brand-name">
            Trend Corner<span>Streetwear, considered.</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          {menuOpen ? (
            <X size={22} strokeWidth={1.5} />
          ) : (
            <Menu size={22} strokeWidth={1.5} />
          )}
        </button>
        <nav
          className={`primary-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#collection" onClick={closeMenu}>
            Collection
          </a>
          <a href="#story" onClick={closeMenu}>
            Our corner
          </a>
          <a href="#contact" onClick={closeMenu}>
            Find us
          </a>
          <a
            className="nav-instagram"
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            aria-label="Trend Corner on Instagram"
          >
            <Instagram size={16} strokeWidth={1.6} />
          </a>
          <button
            className="palette-switch"
            type="button"
            onClick={() =>
              setPalette(current => (current === "amber" ? "forest" : "amber"))
            }
            aria-label={`Switch to ${palette === "amber" ? "forest and citrus" : "charcoal and amber"} color palette`}
            title="Compare the two color palettes"
          >
            <span className="palette-dots" aria-hidden="true">
              <i />
              <i />
            </span>
            <span>{palette === "amber" ? "Try forest" : "Try amber"}</span>
          </button>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-visual">
            <img
              className="hero-image"
              src={siteAsset("hero-sunset.webp")}
              alt="A lone streetwear model stands in an amber-lit grassland at dusk"
              fetchPriority="high"
            />
            <div className="hero-image-shade" />
            <div className="hero-overlay-copy">
              <p className="eyebrow">
                <span className="eyebrow-line" /> Independent streetwear · Est.
                Silapathar
              </p>
              <h1 id="hero-title">
                Wear
                <br />
                <em>your</em> own
                <br />
                story.
              </h1>
            </div>
            <div className="hero-image-note">
              <span>THE NEW UNIFORM</span>
              <span>TC / 001</span>
            </div>
            <span className="hero-orbit orbit-one" aria-hidden="true" />
            <span className="hero-orbit orbit-two" aria-hidden="true" />
            <a
              className="hero-scroll"
              href="#collection"
              aria-label="Scroll to collection"
            >
              <ArrowDown size={16} />
            </a>
          </div>
          <div className="hero-below">
            <div>
              <p className="hero-description">
                Everyday essentials with a little more attitude. Found in Assam.
                Message the store to check current availability and delivery
                options.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#collection">
                  Explore the edit <ArrowRight size={16} />
                </a>
                <a
                  className="text-link"
                  href={whatsappLink(
                    "Hi Trend Corner, I'd love to see your latest streetwear drops."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Order on WhatsApp <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
            <div className="hero-footnote">
              <span className="footnote-mark">01</span>
              <span>Easy layers. Strong presence.</span>
            </div>
          </div>
        </section>

        <div className="ticker" aria-label="Trend Corner, shipped across India">
          <div className="ticker-track">
            {Array.from({ length: 4 }, (_, index) => (
              <span key={index}>
                Dress on your terms <i>✳</i> Made for the everyday <i>✳</i>{" "}
                Silapathar to everywhere <i>✳</i>
              </span>
            ))}
          </div>
        </div>
        <section
          className="collection section-wrap"
          id="collection"
          aria-labelledby="collection-title"
        >
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">The considered edit / 01</p>
              <h2 id="collection-title">
                Pieces with
                <br />
                <em>presence.</em>
              </h2>
            </div>
            <p className="section-intro">
              A little shape. A lot of character. Find your next everyday
              favourite.
            </p>
          </div>
          <div className="collection-toolbar">
            <div
              className="filter-list"
              role="group"
              aria-label="Filter products by category"
            >
              {categories.map(category => (
                <button
                  type="button"
                  className={`filter-chip${activeCategory === category ? " is-active" : ""}`}
                  key={category}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <span className="item-count">
              {String(visibleProducts.length).padStart(2, "0")} / EDITED
              SELECTION
            </span>
          </div>
          <div className="product-grid">
            {visibleProducts.map((product, index) => (
              <article
                className="product-card reveal"
                key={product.id}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <a
                  className="product-image-link"
                  href={whatsappLink(
                    `Hi Trend Corner, I'm interested in the ${product.name}. Could you confirm current availability, sizes and price?`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ask about ${product.name} on WhatsApp`}
                >
                  <div className="product-image-frame">
                    <img src={product.image} alt={product.alt} loading="lazy" />
                    <span className="product-label">{product.label}</span>
                    <span className="image-cta">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </a>
                <div className="product-info">
                  <div>
                    <p className="product-type">{product.type} / TC EDIT</p>
                    <h3>{product.name}</h3>
                  </div>
                  <span className="product-price">
                    {formatPrice(product.price)}
                  </span>
                </div>
                <p className="product-detail">{product.detail}</p>
              </article>
            ))}
          </div>
          <div
            className="catalogue-note reveal"
            role="note"
            aria-label="Catalogue and ordering information"
          >
            <p className="eyebrow">A note before you order</p>
            <h3>Preview catalogue · WhatsApp orders</h3>
            <p>
              Product names, photos, descriptions and prices on this page are
              illustrative demo content, not a live stock or price guarantee.
              This catalogue has no cart or online checkout. Message the store
              to confirm the actual item, availability, size and final price;
              ask about delivery coverage, charges and timing, payment options,
              and any return or exchange terms before paying.
            </p>
          </div>
          <div className="collection-foot reveal">
            <span>Small-batch finds. Big main-character energy.</span>
            <a
              href={whatsappLink(
                "Hi Trend Corner, please send me your full product catalogue."
              )}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Ask for the full edit <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <section className="manifesto" aria-labelledby="manifesto-title">
          <div className="manifesto-image-wrap reveal">
            <img
              src={siteAsset("tee-look.webp")}
              alt="A relaxed streetwear look in a heavyweight ivory tee against a warm textured wall"
              loading="lazy"
            />
            <span className="image-caption">
              A BETTER KIND OF EVERYDAY / TC STUDIO
            </span>
          </div>
          <div className="manifesto-copy reveal">
            <p className="eyebrow">Not here to blend in / 02</p>
            <h2 id="manifesto-title">
              Good clothes.
              <br />
              <em>Good energy.</em>
            </h2>
            <p>
              Trend Corner is for the ones who know their style doesn’t need
              permission. From oversized tees to the details that finish a fit,
              we bring together pieces made for showing up exactly as you are.
            </p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Meet us on Instagram <ArrowUpRight size={15} />
            </a>
            <span className="manifesto-index" aria-hidden="true">
              02 — 03
            </span>
          </div>
        </section>
        <section className="category-band" aria-labelledby="category-title">
          <div className="category-heading reveal">
            <p className="eyebrow">A wardrobe, your way / 03</p>
            <h2 id="category-title">
              Start with
              <br />
              <em>what moves you.</em>
            </h2>
          </div>
          <div className="category-links">
            {[
              ["01", "The oversized tee", "Tees" as Category],
              ["02", "The wide-leg denim", "Denim" as Category],
              ["03", "The extra layer", "Outerwear" as Category],
              ["04", "The finishing touch", "Accessories" as Category],
            ].map(([number, label, category]) => (
              <a
                href="#collection"
                className="category-link reveal"
                key={number}
                onClick={() => setActiveCategory(category as Category)}
              >
                <span className="category-number">{number}</span>
                <span>{label}</span>
                <MoveRight size={17} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </section>
        <section
          className="story-section"
          id="story"
          aria-labelledby="story-title"
        >
          <div className="story-copy reveal">
            <p className="eyebrow">Our corner of the world / 04</p>
            <h2 id="story-title">
              Rooted here.
              <br />
              <em>Worn everywhere.</em>
            </h2>
            <p>
              Born in Madhuripathar, Silapathar. Built around good fits, easy
              self-expression and making great streetwear a little closer to
              home.
            </p>
            <div className="story-location">
              <span className="location-dot" />
              <span>Silapathar, Assam</span>
              <span className="location-separator">/</span>
              <span>Ask us about shipping</span>
            </div>
            <a
              className="button button-outline"
              href="https://maps.google.com/?q=Madhuripathar%2C+Silapathar%2C+Assam"
              target="_blank"
              rel="noreferrer"
            >
              Find our corner <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="story-art reveal">
            <div className="story-art-ring" aria-hidden="true" />
            <span className="story-art-tc">TC</span>
            <span className="story-art-caption">
              A LITTLE OUT OF THE WAY.
              <br />
              RIGHT WHERE WE BELONG.
            </span>
            <span className="story-art-number">
              26° 12′ N<br />
              92° 00′ E
            </span>
          </div>
        </section>
        <section
          className="contact-cta"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-inner reveal">
            <p className="eyebrow">Your next favourite is one message away</p>
            <h2 id="contact-title">
              Make it
              <br />
              <em>yours.</em>
            </h2>
            <p>
              Ask about a piece, find your size, or just say hello. We’re right
              here in Silapathar.
            </p>
            <a
              className="button button-dark"
              href={whatsappLink(
                "Hi Trend Corner, I'd like to know more about your collection."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Start a WhatsApp chat <ArrowUpRight size={16} />
            </a>
            <a
              className="contact-instagram"
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={16} /> @trendcorner_mes
            </a>
          </div>
          <span className="contact-stamp" aria-hidden="true">
            TREND
            <br />
            CORNER
            <br />
            <i>ASSAM</i>
          </span>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <div className="footer-grid">
          <div className="footer-intro">
            <div className="footer-logo-mark">TC</div>
            <div className="footer-wordmark">Trend Corner</div>
            <div className="footer-kicker">SILAPATHAR · ASSAM</div>
            <p>
              Premium streetwear essentials.
              <br />
              Shipped across India.
            </p>
          </div>
          <div className="footer-column">
            <h3>Shop</h3>
            <a href="#collection" onClick={() => setActiveCategory("Tees")}>
              Tees
            </a>
            <a href="#collection" onClick={() => setActiveCategory("Denim")}>
              Jeans
            </a>
            <a
              href="#collection"
              onClick={() => setActiveCategory("Outerwear")}
            >
              Jackets
            </a>
            <a
              href="#collection"
              onClick={() => setActiveCategory("Accessories")}
            >
              Chains
            </a>
            <a
              href="#collection"
              onClick={() => setActiveCategory("Accessories")}
            >
              Rings
            </a>
          </div>
          <div className="footer-column">
            <h3>Info</h3>
            <a href="#contact">How to order</a>
            <a
              href="https://maps.google.com/?q=Madhuripathar%2C+Silapathar%2C+Assam"
              target="_blank"
              rel="noreferrer"
            >
              Visit the store
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer">
              Instagram <ArrowUpRight size={13} />
            </a>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <span>Madhuripathar, Silapathar, Assam</span>
            <a
              href={whatsappLink("Hi Trend Corner!")}
              target="_blank"
              rel="noreferrer"
            >
              +91 91011 53092
            </a>
            <a
              href={whatsappLink("Hi Trend Corner!")}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp us <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
        <div className="footer-display-name">Trend Corner</div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} TREND CORNER</span>
          <span>
            <b>PREVIEW</b> · sample products, prices, photos and contact details
            · confirm with the store before ordering
          </span>
        </div>
      </footer>
    </div>
  );
}
