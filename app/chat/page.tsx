"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useRef, Suspense } from "react";
import Link from "next/link";

type Message = { role: "user" | "assistant"; content: string };

function ChatContent() {
  const params = useSearchParams();
  const assessment = params.get("assessment");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initial: Message = { role: "assistant", content: "Hello! I'm Oja, your personal AI wellness assistant from Ojasye Wellness Technologies. 🌿\n\nThis is a safe, private, and judgment-free space. I'm here to help you feel better and perform better.\n\nHow can I help you today?" };
    if (assessment) {
      const userMsg: Message = { role: "user", content: `Here are my assessment answers: ${assessment}` };
      setMessages([initial, userMsg]);
      sendToAPI([initial, userMsg]);
    } else {
      setMessages([initial]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  async function sendToAPI(msgs: Message[]) {
    setLoading(true);
    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: msgs }) });
      const data = await res.json();
      if (data.message) setMessages(prev => [...prev, { role: "assistant", content: data.message }]);
    } finally { setLoading(false); }
  }

  async function send(text?: string) {
    const t = text || input.trim();
    if (!t || loading) return;
    const userMsg: Message = { role: "user", content: t };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    await sendToAPI(updated);
  }

  return (
    <div style={{minHeight:"100vh",background:"#0a0a0a",display:"flex",flexDirection:"column"}}>
      <div style={{padding:"16px 24px",borderBottom:"1px solid rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{width:36,height:36,borderRadius:"50%",background:"var(--emerald)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:600,color:"white"}}>O</div>
          <div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:600,color:"white"}}>Oja — AI Wellness Coach</div>
            <div style={{fontSize:11,color:"rgba(255,255,255,0.4)"}}>Ojasye Wellness Technologies · Private & Secure</div>
          </div>
        </div>
        <Link href="/" style={{fontSize:13,color:"rgba(255,255,255,0.4)",textDecoration:"none",border:"1px solid rgba(255,255,255,0.12)",padding:"6px 16px",borderRadius:100}}>← Back to Ojasye</Link>
      </div>

      <div style={{flex:1,maxWidth:720,width:"100%",margin:"0 auto",padding:"24px 16px",display:"flex",flexDirection:"column",gap:16,overflowY:"auto"}}>
        {messages.map((m, i) => (
          <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start",gap:10}}>
            {m.role==="assistant" && <div style={{width:28,height:28,borderRadius:"50%",background:"var(--emerald)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"white",flexShrink:0,marginTop:4}}>O</div>}
            <div style={{maxWidth:"80%",padding:"14px 18px",borderRadius:m.role==="user"?"18px 18px 4px 18px":"4px 18px 18px 18px",background:m.role==="user"?"var(--emerald)":"rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.9)",fontSize:14,lineHeight:1.65,whiteSpace:"pre-wrap"}}>{m.content}</div>
          </div>
        ))}
        {loading && (
          <div style={{display:"flex",gap:10}}>
            <div style={{width:28,height:28,borderRadius:"50%",background:"var(--emerald)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"white",flexShrink:0}}>O</div>
            <div style={{padding:"14px 18px",borderRadius:"4px 18px 18px 18px",background:"rgba(255,255,255,0.07)"}}>
              <span style={{display:"flex",gap:4}}>
                {[0,1,2].map(j=><span key={j} style={{width:6,height:6,background:"var(--emerald)",borderRadius:"50%",animation:"bounce 1s infinite",animationDelay:`${j*0.15}s`}}></span>)}
              </span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div style={{padding:"16px",borderTop:"1px solid rgba(255,255,255,0.08)",maxWidth:720,width:"100%",margin:"0 auto",boxSizing:"border-box" as const,display:"flex",gap:10}}>
        <textarea value={input} onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send()}}}
          placeholder="Ask about your health, energy, or performance..."
          rows={1} style={{flex:1,resize:"none",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:14,padding:"12px 16px",fontSize:14,color:"white",fontFamily:"'Inter',sans-serif",outline:"none"}} />
        <button onClick={()=>send()} disabled={loading||!input.trim()}
          style={{background:"var(--emerald)",border:"none",borderRadius:14,padding:"12px 20px",fontSize:13,fontWeight:500,color:"white",cursor:"pointer",fontFamily:"'Inter',sans-serif",opacity:input.trim()?1:0.4}}>Send</button>
      </div>
    </div>
  );
}

export default function ChatPage() {
  return <Suspense fallback={<div style={{minHeight:"100vh",background:"#0a0a0a"}}></div>}><ChatContent /></Suspense>;
}
