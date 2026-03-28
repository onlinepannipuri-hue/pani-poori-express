import { X, Minus, Plus, Send, ShoppingCart } from "lucide-react";
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
      <div className="fixed inset-0 bg-footer/40 backdrop-blur-md z-[60] animate-in fade-in duration-500" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-background z-[70] shadow-2xl flex flex-col animate-in slide-in-from-right duration-500 border-l border-white/10">
        <div className="flex items-center justify-between p-6 border-b border-black/5 bg-white/50 backdrop-blur-xl">
          <div className="flex flex-col">
            <span className="text-premium-xs text-primary mb-1">Your Selection</span>
            <h3 className="font-display text-2xl font-black uppercase tracking-tight">Cart</h3>
          </div>
          <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full bg-footer/5 hover:bg-footer/10 transition-colors"><X size={20} /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center opacity-40">
              <ShoppingCart size={48} strokeWidth={1} className="mb-4" />
              <p className="text-sm font-medium">Your cart is empty. <br /> Let's add some magic! ✨</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white border border-black/5 rounded-[1.5rem] p-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex-1 min-w-0 pr-4">
                  <p className="font-display font-black text-sm uppercase tracking-tight truncate">{item.name}</p>
                  <p className="text-primary font-black text-base">₹{item.price * item.qty}</p>
                </div>
                <div className="flex items-center gap-3 bg-footer/5 p-1 rounded-2xl">
                  <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-8 h-8 flex items-center justify-center rounded-xl bg-white border border-black/5 hover:bg-primary hover:text-white transition-all shadow-sm"><Minus size={14} /></button>
                  <span className="font-black text-sm w-4 text-center">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8 flex items-center justify-center rounded-xl bg-white border border-black/5 hover:bg-primary hover:text-white transition-all shadow-sm"><Plus size={14} /></button>
                  <button onClick={() => removeItem(item.id)} className="w-8 h-8 flex items-center justify-center text-destructive hover:bg-destructive/10 rounded-xl transition-all"><X size={14} /></button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="bg-white/50 backdrop-blur-2xl border-t border-black/5 p-8 space-y-8">
            <div className="space-y-4">
              <p className="text-premium-xs text-muted-foreground uppercase tracking-[0.2em]">Preferred Delivery</p>
              <div className="flex gap-3">
                {(["asap", "30min"] as const).map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setTimeSlot(slot)}
                    className={`flex-1 py-3 text-xs font-black uppercase tracking-widest rounded-2xl border transition-all duration-300 ${timeSlot === slot ? "bg-footer text-white border-footer shadow-lg" : "bg-white border-black/5 hover:border-primary text-foreground/60"}`}
                  >
                    {slot === "asap" ? "⚡ ASAP" : "🕐 +30 Min"}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-premium-xs text-muted-foreground uppercase tracking-[0.2em]">Accepted Payments</p>
              <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase text-foreground/40">
                {['GPay', 'PhonePe', 'Paytm', 'Cash'].map(p => (
                  <span key={p} className="bg-footer/5 px-3 py-1.5 rounded-lg border border-black/5">{p}</span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-black/5">
              <span className="text-premium-sm text-foreground/40">Grand Total</span>
              <span className="font-display font-black text-3xl text-primary">₹{total}</span>
            </div>

            <button
              onClick={sendOrder}
              className="w-full bg-whatsapp text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-whatsapp/20"
            >
              <Send size={18} /> Order Now
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
