import { X, Minus, Plus, Send } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const { items, updateQty, removeItem, total, clearCart } = useCart();
  const [timeSlot, setTimeSlot] = useState<"asap" | "30min">("asap");

  const sendOrder = () => {
    if (items.length === 0) return;
    const orderLines = items.map((i) => `• ${i.name} x${i.qty} = ₹${i.price * i.qty}`).join("%0A");
    const msg = `🛒 *New Order - Online Pani Poori*%0A%0A${orderLines}%0A%0A💰 *Total: ₹${total}*%0A⏰ Delivery: ${timeSlot === "asap" ? "ASAP" : "After 30 mins"}%0A%0APlease confirm! 🙏`;
    window.open(`https://wa.me/919787927818?text=${msg}`, "_blank");
    clearCart();
    onClose();
  };

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-card z-50 shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-display text-xl font-bold">Your Cart</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-muted transition"><X size={20} /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">Your cart is empty 🥲</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
                <div>
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-primary font-bold text-sm">₹{item.price * item.qty}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQty(item.id, item.qty - 1)} className="p-1 rounded-full bg-card border hover:bg-muted transition"><Minus size={14} /></button>
                  <span className="font-bold text-sm w-5 text-center">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} className="p-1 rounded-full bg-card border hover:bg-muted transition"><Plus size={14} /></button>
                  <button onClick={() => removeItem(item.id)} className="p-1 text-destructive hover:bg-destructive/10 rounded-full transition"><X size={14} /></button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase">Delivery Time</p>
              <div className="flex gap-2">
                {(["asap", "30min"] as const).map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setTimeSlot(slot)}
                    className={`flex-1 py-2 text-sm font-semibold rounded-lg border transition ${timeSlot === slot ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:border-primary"}`}
                  >
                    {slot === "asap" ? "⚡ ASAP" : "🕐 After 30 min"}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase">Payment</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="bg-muted px-2 py-1 rounded font-semibold">GPay</span>
                <span className="bg-muted px-2 py-1 rounded font-semibold">PhonePe</span>
                <span className="bg-muted px-2 py-1 rounded font-semibold">Paytm</span>
                <span>• Pay after confirmation</span>
              </div>
            </div>

            <div className="flex items-center justify-between font-display text-xl font-bold">
              <span>Total</span>
              <span className="text-primary">₹{total}</span>
            </div>

            <button
              onClick={sendOrder}
              className="w-full bg-accent text-accent-foreground py-3 rounded-full font-bold text-base flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-warm"
            >
              <Send size={18} /> Order via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
