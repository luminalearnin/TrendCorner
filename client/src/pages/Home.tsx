import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import {
  instagramImage,
  products,
  type ProductCategory,
} from "@/data/products";
import "../storefront.css";

const INSTAGRAM = "https://www.instagram.com/trendcorner_mes/";
const WHATSAPP = "919101153092";
const STORE_MAP =
  "https://maps.google.com/?q=Madhuripathar%2C+Silapathar%2C+Likhabali+Road";

function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

const categories: Array<{ label: string; value: ProductCategory | "All" }> = [
  { label: "All styles", value: "All" },
  { label: "Tees", value: "Tees" },
  { label: "Denim", value: "Denim" },
  { label: "Shirts", value: "Shirts" },
  { label: "Accessories", value: "Accessories" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">(
    "All"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProducts = products.filter(
    product => activeCategory === "All" || product.category === activeCategory
  );
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="sf-site" id="top">
      <div className="sf-announcement">
        <span>Streetwear from Silapathar, Assam</span>
        <span className="sf-announcement-separator" aria-hidden="true">
          •
        </span>
        <span>Message us for sizes and delivery details</span>
      </div>

      <header className="sf-header">
        <a
          className="sf-brand"
          href="#top"
          aria-label="Trend Corner home"
          onClick={closeMenu}
        >
          <span className="sf-brand-mark" aria-hidden="true">
            TC
          </span>
          <span className="sf-brand-copy">
            <span className="sf-brand-name">TREND CORNER</span>
            <span className="sf-brand-location">STREETWEAR · SILAPATHAR</span>
          </span>
        </a>

        <nav
          className={`sf-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#collection" onClick={closeMenu}>
            Shop all
          </a>
          <a
            href="#collection"
            onClick={() => {
              setActiveCategory("Tees");
              closeMenu();
            }}
          >
            Tees
          </a>
          <a
            href="#collection"
            onClick={() => {
              setActiveCategory("Denim");
              closeMenu();
            }}
          >
            Denim
          </a>
          <a href="#about" onClick={closeMenu}>
            Our store
          </a>
          <a
            className="sf-nav-instagram"
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            aria-label="Trend Corner on Instagram"
          >
            <Instagram size={17} />
          </a>
        </nav>

        <div className="sf-header-actions">
          <a
            className="sf-header-whatsapp"
            href={whatsappLink(
              "Hi Trend Corner, can you share current collection, sizes and prices?"
            )}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} />
            <span>WhatsApp us</span>
          </a>
          <button
            className="sf-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(open => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="sf-hero" aria-labelledby="sf-hero-title">
          <img
            className="sf-hero-photo"
            src={instagramImage("2026-10-08-heavy-boxy-stonewash-rack.jpg")}
            alt="Trend Corner's real clothing and denim collection displayed in the Silapathar store"
            fetchPriority="high"
          />
          <div className="sf-hero-tint" aria-hidden="true" />
          <div className="sf-hero-panel">
            <p className="sf-eyebrow">
              <span className="sf-eyebrow-mark" />
              TREND CORNER · SILAPATHAR
            </p>
            <h1 id="sf-hero-title">
              Wear your
              <br />
              <span>own story.</span>
            </h1>
            <p className="sf-hero-description">
              Browse real tees, denim and everyday streetwear from our
              collection.
            </p>
            <div className="sf-hero-actions">
              <a className="sf-button sf-button-primary" href="#collection">
                Explore the collection <ArrowRight size={16} />
              </a>
              <a
                className="sf-button sf-button-plain"
                href={whatsappLink(
                  "Hi Trend Corner, please share your latest collection and current prices."
                )}
                target="_blank"
                rel="noreferrer"
              >
                Ask on WhatsApp <ArrowUpRight size={15} />
              </a>
            </div>
            <p className="sf-hero-fineprint">
              Prices and availability are confirmed by the store.
            </p>
          </div>
          <a
            className="sf-photo-credit"
            href="https://www.instagram.com/trendcorner_mes/p/DePUNesgV08/"
            target="_blank"
            rel="noreferrer"
          >
            From Trend Corner on Instagram <ArrowUpRight size={13} />
          </a>
        </section>

        <div className="sf-highlights" aria-label="How to shop">
          <span>REAL PHOTOS FROM THE TREND CORNER FEED</span>
          <span className="sf-highlight-dot" aria-hidden="true" />
          <span>ASK THE STORE FOR PRICE & AVAILABILITY</span>
          <span className="sf-highlight-dot" aria-hidden="true" />
          <span>ORDER ENQUIRIES VIA WHATSAPP</span>
        </div>

        <section
          className="sf-collection sf-content-width"
          id="collection"
          aria-labelledby="sf-collection-title"
        >
          <div className="sf-section-heading">
            <div>
              <p className="sf-eyebrow">The latest from our Instagram</p>
              <h2 id="sf-collection-title">Shop the collection</h2>
            </div>
            <a
              className="sf-text-link sf-desktop-link"
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
            >
              Follow @trendcorner_mes <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="sf-collection-toolbar">
            <div
              className="sf-filter-list"
              role="group"
              aria-label="Filter by category"
            >
              {categories.map(category => (
                <button
                  key={category.value}
                  type="button"
                  className={`sf-filter${activeCategory === category.value ? " is-active" : ""}`}
                  aria-pressed={activeCategory === category.value}
                  onClick={() => setActiveCategory(category.value)}
                >
                  {category.label}
                </button>
              ))}
            </div>
            <span className="sf-results-count">
              {visibleProducts.length}{" "}
              {visibleProducts.length === 1 ? "style" : "styles"}
            </span>
          </div>

          <div className="sf-product-grid">
            {visibleProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <aside
            className="sf-catalogue-note"
            aria-label="Catalogue and ordering information"
          >
            <span className="sf-note-icon" aria-hidden="true">
              i
            </span>
            <div>
              <h3>A catalogue, not checkout</h3>
              <p>
                Product photos and names link to public Trend Corner Instagram
                posts. This site has no cart or online payment. Ask the store to
                confirm current price, sizes, availability, delivery options,
                payment methods and any return or exchange terms before
                ordering.
              </p>
            </div>
          </aside>
        </section>

        <section
          className="sf-about"
          id="about"
          aria-labelledby="sf-about-title"
        >
          <a
            className="sf-about-photo"
            href="https://www.instagram.com/trendcorner_mes/p/DePUNesgV08/"
            target="_blank"
            rel="noreferrer"
            aria-label="View Trend Corner's October 8 store collection post on Instagram"
          >
            <img
              src={instagramImage("2026-10-08-denim-and-tees-rack.jpg")}
              alt="Clothing, denim and accessories on display at Trend Corner"
              loading="lazy"
            />
            <span>
              INSIDE TREND CORNER <ArrowUpRight size={14} />
            </span>
          </a>
          <div className="sf-about-copy">
            <p className="sf-eyebrow">Our store · Madhuripathar</p>
            <h2 id="sf-about-title">
              Local roots.
              <br />
              <span>Everyday fits.</span>
            </h2>
            <p>
              Find Trend Corner on Likhabali Road in Madhuripathar, Silapathar.
              Browse the collection here, then message the store to check the
              details before placing an order.
            </p>
            <div className="sf-about-actions">
              <a
                className="sf-button sf-button-primary"
                href={STORE_MAP}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={15} /> Find the store
              </a>
              <a
                className="sf-text-link"
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
              >
                Visit Instagram <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section
          className="sf-contact"
          id="contact"
          aria-labelledby="sf-contact-title"
        >
          <div>
            <p className="sf-eyebrow">Need a size, price or delivery detail?</p>
            <h2 id="sf-contact-title">Talk to the store.</h2>
            <p>
              Send a quick WhatsApp message and confirm the details directly.
            </p>
          </div>
          <a
            className="sf-button sf-button-light"
            href={whatsappLink(
              "Hi Trend Corner, can you help me with product availability, size, price and delivery details?"
            )}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} /> WhatsApp · +91 91011 53092
          </a>
        </section>
      </main>

      <footer className="sf-footer">
        <div className="sf-footer-main">
          <div className="sf-footer-brand-block">
            <a className="sf-brand sf-footer-brand" href="#top">
              <span className="sf-brand-mark" aria-hidden="true">
                TC
              </span>
              <span className="sf-brand-copy">
                <span className="sf-brand-name">TREND CORNER</span>
                <span className="sf-brand-location">
                  STREETWEAR · SILAPATHAR
                </span>
              </span>
            </a>
            <p>Streetwear from Silapathar, Assam.</p>
          </div>
          <div className="sf-footer-column">
            <h2>Shop</h2>
            <a href="#collection" onClick={() => setActiveCategory("Tees")}>
              Tees
            </a>
            <a href="#collection" onClick={() => setActiveCategory("Denim")}>
              Denim
            </a>
            <a href="#collection" onClick={() => setActiveCategory("Shirts")}>
              Shirts
            </a>
            <a
              href="#collection"
              onClick={() => setActiveCategory("Accessories")}
            >
              Accessories
            </a>
          </div>
          <div className="sf-footer-column">
            <h2>Find us</h2>
            <a href={STORE_MAP} target="_blank" rel="noreferrer">
              Madhuripathar, Silapathar
            </a>
            <a
              href={whatsappLink("Hi Trend Corner!")}
              target="_blank"
              rel="noreferrer"
            >
              +91 91011 53092
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer">
              Instagram <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
        <div className="sf-footer-bottom">
          <span>© {new Date().getFullYear()} TREND CORNER</span>
          <span>Instagram-sourced catalogue · no online checkout</span>
        </div>
      </footer>
    </div>
  );
}
