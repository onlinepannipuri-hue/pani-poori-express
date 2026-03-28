import { useState } from "react";
import { Bot, X, Send } from "lucide-react";

interface Message {
  from: "bot" | "user";
  text: string;
}

const suggestions = [
  { label: "🌶️ Spicy", response: "Try our Classic Pani Puri (₹50) or Special Pani Puri (₹70) – both have our signature spicy mint water! 🔥" },
  { label: "🍦 Mild/Sweet", response: "Our Dahi Puri (₹60) is perfect for you! Creamy yogurt with sweet chutney – absolutely delicious! 😋" },
  { label: "👨‍👩‍👧‍👦 Combo/Family", response: "The Family Pack (₹120) feeds 3-4 people, or try the DIY Kit (₹150) for a fun family activity! 🎉" },
  { label: "💰 Budget Pick", response: "Our Classic Pani Puri at just ₹50 is the best value – fresh, tasty, and super affordable! 💪" },
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hi! 👋 I'm your Poori Assistant. What are you in the mood for today?" },
  ]);

  const handleSuggestion = (s: typeof suggestions[0]) => {
    setMessages((prev) => [...prev, { from: "user", text: s.label }, { from: "bot", text: s.response }]);
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 left-6 z-[45] w-14 h-14 rounded-2xl bg-footer text-primary flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-white/10 group"
          aria-label="Open chatbot"
        >
          <Bot size={24} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping" />
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 left-6 z-[60] w-[340px] max-h-[70vh] glass rounded-[2rem] shadow-2xl border border-white/40 flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
          <div className="bg-footer text-white p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Bot size={18} />
              </div>
              <div>
                <p className="text-premium-xs text-primary leading-none mb-1">AI Assistant</p>
                <h4 className="font-display font-black text-sm uppercase tracking-tight">Poori Bot</h4>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"><X size={18} /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 min-h-[300px]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "bot" ? "justify-start" : "justify-end"}`}>
                <div className={`text-sm p-4 rounded-2xl max-w-[85%] font-medium leading-relaxed shadow-sm ${m.from === "bot" ? "bg-footer/5 text-foreground border border-black/5" : "bg-primary text-primary-foreground ml-auto"}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-white/50 backdrop-blur-xl border-t border-black/5 space-y-4">
            <p className="text-premium-xs text-muted-foreground uppercase tracking-[0.2em]">Quick Expressions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s.label}
                  onClick={() => handleSuggestion(s)}
                  className="text-[11px] bg-white border border-black/5 hover:border-primary hover:text-primary px-4 py-2 rounded-xl font-bold transition-all duration-300 shadow-sm"
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
