import { useState } from "react";
import { ArrowRight, Minus, Plus, ShoppingBag, X } from "lucide-react";
import { instagramImage, sizeGuideText, type Product } from "@/data/products";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
  onBuyNow: (product: Product, size: string) => void;
}

const money = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

export default function ProductCard({
  product,
  onAddToCart,
  onBuyNow,
}: ProductCardProps) {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [size, setSize] = useState("");

  const add = () => {
    if (!size) return;
    onAddToCart(product, size);
    setOpen(false);
  };

  const buy = () => {
    if (!size) return;
    onBuyNow(product, size);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <article className="sf-product-card">
        <DialogTrigger asChild>
          <button
            className="sf-product-photo-button"
            type="button"
            aria-label={`View ${product.name} details`}
          >
            <div className="sf-product-photo-frame">
              <img
                src={instagramImage(product.images[photoIndex])}
                alt={product.imageAlts[photoIndex]}
                loading="lazy"
              />
              <span className="sf-product-badge">{product.badge}</span>
              <span className="sf-product-photo-hint">Quick view <ArrowRight size={14} /></span>
            </div>
          </button>
        </DialogTrigger>

        {product.images.length > 1 && (
          <div className="sf-photo-dots" role="group" aria-label={`Photos of ${product.name}`}>
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
          <DialogTrigger asChild>
            <button className="sf-product-title-trigger" type="button">
              <h3>{product.name}</h3>
            </button>
          </DialogTrigger>
          <p>{product.details}</p>
          <div className="sf-card-price">{money(product.price)} <span>Preview price</span></div>
          <DialogTrigger asChild>
            <button className="sf-card-quick-view" type="button">Choose size & shop</button>
          </DialogTrigger>
        </div>
      </article>

      <DialogContent className="tc-product-dialog" aria-describedby="tc-product-description">
        <div className="tc-product-dialog-photo">
          <img src={instagramImage(product.images[photoIndex])} alt={product.imageAlts[photoIndex]} />
          {product.images.length > 1 && (
            <div className="tc-dialog-photo-dots" role="group" aria-label="Product photos">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={photoIndex === index ? "is-active" : ""}
                  aria-label={`Show image ${index + 1}`}
                  aria-pressed={photoIndex === index}
                  onClick={() => setPhotoIndex(index)}
                />
              ))}
            </div>
          )}
        </div>
        <div className="tc-product-dialog-copy">
          <div className="tc-dialog-meta"><span>{product.category}</span><span>{product.badge}</span></div>
          <DialogTitle className="tc-dialog-title">{product.name}</DialogTitle>
          <DialogDescription id="tc-product-description" className="tc-dialog-description">
            {product.details}
          </DialogDescription>
          <div className="tc-dialog-price">{money(product.price)} <span>Preview price · owner confirmation pending</span></div>
          <div className="tc-size-block">
            <div className="tc-size-heading"><strong>Select size</strong><span>{size || "Required"}</span></div>
            <div className="tc-size-options" role="group" aria-label={`Select size for ${product.name}`}>
              {product.sizeOptions.map(option => (
                <button
                  key={option}
                  type="button"
                  className={size === option ? "is-selected" : ""}
                  aria-pressed={size === option}
                  onClick={() => setSize(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            {size && <p className="tc-size-fit">{sizeGuideText(product, size)}</p>}
            {product.sizeGuide !== "one-size" && (
              <p className="tc-size-note">Indicative fit guide for this demo. Actual fit and available sizes should be confirmed with the store.</p>
            )}
          </div>
          <div className="tc-dialog-actions">
            <button className="tc-add-button" type="button" onClick={add} disabled={!size}>
              <ShoppingBag size={16} /> Add to cart
            </button>
            <button className="tc-buy-button" type="button" onClick={buy} disabled={!size}>
              Buy now <ArrowRight size={16} />
            </button>
          </div>
          <div className="tc-preview-note"><X size={14} /> Preview only. No payment or order is submitted here.</div>
        </div>
        <DialogClose className="tc-dialog-close" aria-label="Close product details">×</DialogClose>
      </DialogContent>
    </Dialog>
  );
}
