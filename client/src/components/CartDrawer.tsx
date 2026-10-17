import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { instagramImage, type Product } from "@/data/products";

export interface CartLine {
  productId: string;
  size: string;
  quantity: number;
}

export interface CartDisplayLine extends CartLine {
  product: Product;
}

interface CartDrawerProps {
  open: boolean;
  lines: CartDisplayLine[];
  onOpenChange: (open: boolean) => void;
  onQuantityChange: (line: CartLine, quantity: number) => void;
  onRemove: (line: CartLine) => void;
  onOrderOnWhatsApp: () => void;
}

const money = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

export default function CartDrawer({
  open,
  lines,
  onOpenChange,
  onQuantityChange,
  onRemove,
  onOrderOnWhatsApp,
}: CartDrawerProps) {
  const count = lines.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="tc-cart-dialog" aria-describedby="tc-cart-description">
        <div className="tc-cart-header">
          <div>
            <DialogTitle className="tc-cart-title">Your bag <span>({count})</span></DialogTitle>
            <DialogDescription id="tc-cart-description">Your selected styles, ready to review.</DialogDescription>
          </div>
          <DialogClose className="tc-dialog-close" aria-label="Close bag">×</DialogClose>
        </div>

        {lines.length === 0 ? (
          <div className="tc-cart-empty"><ShoppingBag size={28} /><h3>Your bag is empty</h3><p>Open a style to choose your size and add it here.</p></div>
        ) : (
          <>
            <div className="tc-cart-lines">
              {lines.map(line => (
                <article className="tc-cart-line" key={`${line.productId}:${line.size}`}>
                  <img src={instagramImage(line.product.images[0])} alt={line.product.imageAlts[0]} />
                  <div className="tc-cart-line-copy">
                    <h3>{line.product.name}</h3>
                    <p>Size: {line.size}</p>
                    <strong>{money(line.product.price)}</strong>
                    <div className="tc-cart-quantity" aria-label={`Quantity for ${line.product.name}`}>
                      <button type="button" aria-label="Decrease quantity" onClick={() => onQuantityChange(line, line.quantity - 1)}><Minus size={13} /></button>
                      <span>{line.quantity}</span>
                      <button type="button" aria-label="Increase quantity" onClick={() => onQuantityChange(line, line.quantity + 1)}><Plus size={13} /></button>
                    </div>
                  </div>
                  <button className="tc-cart-remove" type="button" aria-label={`Remove ${line.product.name}`} onClick={() => onRemove(line)}><Trash2 size={16} /></button>
                </article>
              ))}
            </div>
            <div className="tc-cart-total"><span>Preview subtotal</span><strong>{money(subtotal)}</strong></div>
            <p className="tc-cart-note">Preview prices only. Delivery, actual prices and availability require store confirmation. This demo does not submit an order or charge payment.</p>
            <button className="tc-buy-button tc-cart-checkout" type="button" onClick={onOrderOnWhatsApp}>
              Continue to WhatsApp <ArrowRight size={16} />
            </button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
