"use client";
import { useState } from "react";

const testimonials = [
  {initials:"AK", name:"Arjun Kapoor", role:"Tech Executive, Delhi · 8 weeks on plan", bg:"var(--emerald)", text:"After 3 months on OJASYE, my energy levels are completely transformed. I used to crash every afternoon — now I'm sharp all day. The personalization is unlike anything I've tried before."},
  {initials:"RS", name:"Rahul Sharma", role:"Entrepreneur, Mumbai · 12 weeks on plan", bg:"#6B6560", text:"The science behind this is real. My doctor was actually impressed by the improvements in my blood panel at my last check-up. OJASYE is what wellness tech should be."},
  {initials:"VP", name:"Vikram Patel", role:"Finance Director, Bangalore · 16 weeks on plan", bg:"var(--gold-dk)", text:"I tried three other wellness programs before OJASYE. Nothing came close to this level of personalization and support. My performance at the gym has gone through the roof."},
];

export default function Results() {
  const [active, setActive] = useState(0);
  return (
    <section className="results">
      <div className="section-tag">Results</div>
      <h2 className="section-h">Real people.<br /><em style={{color:"var(--gold)"}}>Real transformation.</em></h2>
      <div className="results-layout">
        <div className="testimonials">
          {testimonials.map((t,i)=>(
            <div key={t.name} className={`tcard ${active===i?"active":"inactive"}`} onClick={()=>setActive(i)}>
              <div className="tcard-stars">{[...Array(5)].map((_,j)=><div key={j} className="star"></div>)}</div>
              <div className="tcard-text">&ldquo;{t.text}&rdquo;</div>
              <div className="tcard-meta">
                <div className="tcard-avatar" style={{background:t.bg}}>{t.initials}</div>
                <div><div className="tcard-name">{t.name}</div><div className="tcard-role">{t.role}</div></div>
              </div>
            </div>
          ))}
        </div>
        <div className="results-stats">
          {[["94","%","of OJASYE members report measurable improvement in energy, performance, or overall well-being within the first 8 weeks."],["3.8","×","average improvement in wellness score compared to baseline, measured across our first 1,000 program completions."],["87","%","of members continue beyond their initial 90-day plan, choosing to extend their wellness journey with OJASYE."]].map(([val,unit,desc])=>(
            <div className="rstat-card" key={val+unit}>
              <div className="rstat-val">{val}<span>{unit}</span></div>
              <div className="rstat-desc">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
