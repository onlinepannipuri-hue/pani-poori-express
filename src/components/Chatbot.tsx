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
    { from: "bot", text: "Hi! 👋 I'm Poori Bot! What are you in the mood for today?" },
  ]);

  const handleSuggestion = (s: typeof suggestions[0]) => {
    setMessages((prev) => [...prev, { from: "user", text: s.label }, { from: "bot", text: s.response }]);
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-warm hover:scale-110 transition-transform"
          aria-label="Open chatbot"
        >
          <Bot size={24} />
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 left-6 z-50 w-80 max-h-[70vh] bg-card rounded-lg shadow-2xl border flex flex-col overflow-hidden">
          <div className="bg-hero-gradient text-primary-foreground p-3 flex items-center justify-between">
            <span className="font-display font-bold text-sm">🤖 Poori Bot</span>
            <button onClick={() => setOpen(false)} className="p-1 hover:bg-primary-foreground/20 rounded transition"><X size={16} /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={`text-sm p-2.5 rounded-lg max-w-[85%] ${m.from === "bot" ? "bg-muted text-foreground" : "bg-primary text-primary-foreground ml-auto"}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="p-3 border-t space-y-2">
            <p className="text-[10px] text-muted-foreground uppercase font-semibold">Quick picks:</p>
            <div className="flex flex-wrap gap-1.5">
              {suggestions.map((s) => (
                <button
                  key={s.label}
                  onClick={() => handleSuggestion(s)}
                  className="text-xs bg-muted hover:bg-primary hover:text-primary-foreground px-3 py-1.5 rounded-full font-medium transition"
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
