const steps = [
  {num:"Step 01", title:"Deep Assessment", desc:"Our intelligent wellness assessment maps your health, lifestyle, goals, and biological markers into a complete wellness profile.", icon:<><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="11" y2="16"/></>},
  {num:"Step 02", title:"AI Analysis", desc:"Our AI engine and doctors analyze your data, identify root causes, and map precise opportunities for improvement.", icon:<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>},
  {num:"Step 03", title:"Personalized Plan", desc:"A tailored 90-day plan combining nutraceuticals, lifestyle protocols, and expert guidance built for your specific needs.", icon:<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>},
  {num:"Step 04", title:"Expert Guidance", desc:"Monthly check-ins with your dedicated wellness physician, real-time progress tracking, and adaptive plan refinements.", icon:<><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></>},
];

export default function HowItWorks() {
  return (
    <section className="hiw" id="how-it-works">
      <div className="hiw-header">
        <div>
          <div className="section-tag">The Process</div>
          <h2 className="section-h">A smarter path<br />to lasting wellness.</h2>
        </div>
        <p className="section-sub">From your first data point to measurable transformation — our four-step framework is grounded in clinical evidence and real-world outcomes.</p>
      </div>
      <div className="hiw-steps">
        {steps.map(({num,title,desc,icon})=>(
          <div className="hiw-step" key={num}>
            <div className="hiw-step-num">{num}</div>
            <div className="hiw-icon"><svg viewBox="0 0 24 24">{icon}</svg></div>
            <div className="hiw-step-title">{title}</div>
            <div className="hiw-step-desc">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
