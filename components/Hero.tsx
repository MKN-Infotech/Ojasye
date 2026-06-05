"use client";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-orb"></div>
      <div className="hero-left">
        <div className="hero-badge fade-up d1">
          <span className="badge-dot"></span>
          <span className="badge-text">Science-Backed Wellness Technology</span>
        </div>
        <h1 className="hero-headline fade-up d2">
          Health that<br /><em>performs</em><br /><strong>as hard as you.</strong>
        </h1>
        <p className="hero-sub fade-up d3">Technology-powered, doctor-guided wellness programs personalized to your biology. Built for men who refuse to settle for average.</p>
        <div className="hero-cta-row fade-up d4">
          <button className="btn-primary-lg" onClick={() => document.getElementById("quiz")?.scrollIntoView({behavior:"smooth"})}>
            Take Your Free Assessment
            <svg viewBox="0 0 24 24" style={{width:16,height:16,stroke:"currentColor",fill:"none",strokeWidth:2}}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <button className="btn-outline-lg" onClick={() => document.getElementById("how-it-works")?.scrollIntoView({behavior:"smooth"})}>Explore Programs</button>
        </div>
        <div className="hero-trust fade-up d4">
          <div className="trust-stat">
            <span className="trust-num">12k+</span>
            <span className="trust-lbl">Active members</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-stat">
            <span className="trust-num">94%</span>
            <span className="trust-lbl">Report improvement</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-stat">
            <span className="trust-num">8 wks</span>
            <span className="trust-lbl">Avg to first results</span>
          </div>
        </div>
      </div>
      <div className="hero-right fade-up d3">
        <div className="hero-visual-wrap">
          <div className="hv-float-1">
            <div className="hv-float-1-val">+34%</div>
            <div className="hv-float-1-lbl">Energy this week</div>
          </div>
          <div className="hv-main-card">
            <div className="hv-header">
              <div>
                <div className="hv-pretitle">Wellness Intelligence</div>
                <div className="hv-title">Arjun&apos;s Dashboard</div>
              </div>
              <div className="hv-score">
                <div className="hv-score-num">84</div>
                <div className="hv-score-lbl">Wellness Score</div>
              </div>
            </div>
            <div className="hv-rings">
              <div className="ring-item"><div className="ring-circle energy">78</div><div className="ring-lbl">Energy</div></div>
              <div className="ring-item"><div className="ring-circle perf">91</div><div className="ring-lbl">Performance</div></div>
              <div className="ring-item"><div className="ring-circle mind">72</div><div className="ring-lbl">Mental</div></div>
            </div>
            <div className="hv-progress-list">
              {[["Physical Vitality","88%","var(--emerald)"],["Hormonal Balance","74%","var(--gold)"],["Recovery Quality","81%","var(--emerald)"]].map(([name,val,color])=>(
                <div key={name}>
                  <div className="hv-prog-meta"><span className="hv-prog-name">{name}</span><span className="hv-prog-val">{val}</span></div>
                  <div className="hv-prog-track"><div className="hv-prog-fill" style={{width:val,background:color}}></div></div>
                </div>
              ))}
            </div>
          </div>
          <div className="hv-float-2">
            <div className="hv-f2-icon">
              <svg viewBox="0 0 24 24" style={{width:16,height:16,stroke:"var(--gold)",fill:"none",strokeWidth:1.5}}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
              <div className="hv-f2-title">Plan Updated</div>
              <div className="hv-f2-sub">Dr. Sharma reviewed your progress</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
