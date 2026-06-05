"use client";
import { useState, useRef, useEffect } from "react";

type Message = { role: "user" | "assistant"; content: string };

export default function AIChatBubble() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm Oja, your AI wellness assistant. How can I help you feel better and perform better today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  async function send() {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", content: input };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: updated }) });
      const data = await res.json();
      if (data.message) setMessages(prev => [...prev, { role: "assistant", content: data.message }]);
    } finally { setLoading(false); }
  }

  return (
    <div className="chat-bubble">
      {open && (
        <div className="chat-window">
          <div className="chat-window-header">
            <div>
              <div className="chat-window-title">Oja — AI Wellness Coach</div>
              <div className="chat-window-sub">Private & judgment-free</div>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg ${m.role === "user" ? "user" : "ai"}`}>{m.content}</div>
            ))}
            {loading && <div className="chat-msg ai">...</div>}
            <div ref={bottomRef} />
          </div>
          <div className="chat-input-row">
            <input className="chat-input" placeholder="Ask about your health..." value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()} />
            <button className="chat-send" onClick={send}>
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      )}
      <button className="chat-bubble-btn" onClick={() => setOpen(!open)}>
        {open
          ? <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          : <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        }
      </button>
    </div>
  );
}
