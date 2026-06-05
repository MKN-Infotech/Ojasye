"use client";
import { useState } from "react";

const faqs = [
  {q:"How does the assessment work?", a:"Our 5-minute digital assessment covers your health history, lifestyle habits, performance goals, and wellness concerns. The answers are fed directly to Oja, our AI wellness coach, who generates your personalized wellness report and 90-day action plan instantly."},
  {q:"Are the products safe and clinically tested?", a:"Every OJASYE formulation is manufactured in FSSAI-approved facilities, third-party tested for purity and potency, and clinically reviewed by our medical team before inclusion in any program. We use only standardized, bioavailable ingredient forms."},
  {q:"How long until I see results?", a:"Most members notice improvements in energy and sleep within 3–4 weeks. Significant performance and hormonal improvements are typically measured at the 8–12 week mark. We track your progress continuously and adjust your plan to optimize your timeline."},
  {q:"Can I cancel my subscription anytime?", a:"Yes. No contracts, no lock-ins. You can pause or cancel your subscription at any time through your dashboard or by contacting our support team. We offer a 30-day satisfaction guarantee on your first order."},
  {q:"Do I speak to a real doctor?", a:"Absolutely. All OJASYE programs include consultations with licensed physicians specializing in men's health, endocrinology, and wellness medicine. On Performance and Elite plans, you'll have regular scheduled check-ins with your dedicated wellness physician."},
];

export default function FAQ() {
  const [open, setOpen] = useState<number|null>(0);
  return (
    <section className="faq">
      <div className="faq-layout">
        <div>
          <div className="section-tag">FAQ</div>
          <h2 className="section-h" style={{fontSize:"clamp(32px,3.5vw,48px)"}}>Questions?<br />We have<br />answers.</h2>
          <div className="faq-contact">
            <div className="faq-contact-title">Still have questions?</div>
            <div className="faq-contact-sub">Our wellness advisors are available 9am–8pm, 7 days a week.</div>
            <button className="btn-sm">Chat with a Specialist</button>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map(({q,a},i)=>(
            <div className="faq-item" key={q}>
              <button className={`faq-q ${open===i?"open":""}`} onClick={()=>setOpen(open===i?null:i)}>
                {q}
                <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
              <div className={`faq-a ${open===i?"open":""}`}>{a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
