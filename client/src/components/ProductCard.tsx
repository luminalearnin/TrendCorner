import { useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { instagramImage, type Product } from "@/data/products";

const WHATSAPP = "919101153092";

function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export default function ProductCard({ product }: { product: Product }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const message = `Hi Trend Corner, I saw the ${product.name} on your website. Could you confirm its current price, availability, sizes and delivery options?`;

  return (
    <article className="sf-product-card">
      <a
        className="sf-product-photo-link"
        href={product.sourcePost}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${product.name} in its original Instagram post`}
      >
        <div className="sf-product-photo-frame">
          <img
            src={instagramImage(product.images[photoIndex])}
            alt={product.imageAlts[photoIndex]}
            loading="lazy"
          />
          <span className="sf-product-badge">{product.badge}</span>
          <span className="sf-product-photo-hint">
            View Instagram post <ArrowUpRight size={14} />
          </span>
        </div>
      </a>
      {product.images.length > 1 && (
        <div
          className="sf-photo-dots"
          role="group"
          aria-label={`Photos of ${product.name}`}
        >
          {product.images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={photoIndex === index ? "is-active" : ""}
              aria-label={`Show photo ${index + 1} of ${product.name}`}
              aria-pressed={photoIndex === index}
              onClick={() => setPhotoIndex(index)}
            />
          ))}
        </div>
      )}
      <div className="sf-product-copy">
        <div className="sf-product-meta">
          <span>{product.category}</span>
          <span>{product.postDate}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.details}</p>
        <div className="sf-product-actions">
          <a
            className="sf-product-ask"
            href={whatsappLink(message)}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={15} /> Ask price & sizes
          </a>
          <a
            className="sf-product-source"
            href={product.sourcePost}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open the Instagram source post for ${product.name}`}
          >
            Post <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}
