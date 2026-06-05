export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="section-tag">Begin Today</div>
      <h2 className="section-h">The best time to<br />invest in yourself <em style={{fontStyle:"italic"}}>was yesterday.</em><br />The next best time is now.</h2>
      <p className="section-sub">Take your free 5-minute wellness assessment. Get your personalized AI report. Start performing at your best.</p>
      <div className="cta-final-btns">
        <button className="btn-gold" onClick={() => document.getElementById("quiz")?.scrollIntoView({behavior:"smooth"})}>Start Free Assessment →</button>
        <button className="btn-ghost-white">Talk to a Specialist</button>
      </div>
    </section>
  );
}
