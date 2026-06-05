const bars = [
  {h:28,color:"#D4B07A"},{h:35,color:"#C49A5A"},{h:45,color:"#A67C3A"},
  {h:58,color:"#1A6B62"},{h:68,color:"#0D4C45"},{h:76,color:"#0D4C45"},{h:84,color:"#0D4C45"}
];

const points = [
  {n:"01", title:"Root Cause Medicine", desc:"We don't treat symptoms. Our clinical protocols identify underlying hormonal, metabolic, and lifestyle factors driving your health challenges — then address them directly."},
  {n:"02", title:"Precision Nutraceuticals", desc:"Every formulation is backed by peer-reviewed research, standardized for bioactive potency, and third-party tested for purity and efficacy."},
  {n:"03", title:"Adaptive AI Protocols", desc:"Our wellness intelligence engine continuously refines your plan based on progress data, symptom feedback, and clinical outcomes — getting smarter with every check-in."},
  {n:"04", title:"Clinical Outcomes Tracking", desc:"We measure what matters: biomarker improvements, symptom resolution, performance gains, and quality-of-life scores — not vanity metrics."},
];

export default function Science() {
  return (
    <section className="science" id="science">
      <div className="section-tag">Our Science</div>
      <h2 className="section-h">Evidence-first.<br />Always.</h2>
      <div className="science-grid">
        <div className="science-visual">
          <div className="sv-label">Avg. Wellness Score Trajectory</div>
          <div className="sv-chart-area">
            {bars.map((b,i)=>(
              <div key={i} className="sv-bar" style={{height:`${b.h*1.1}px`,background:b.color,opacity:0.5+i*0.07,flex:1}}></div>
            ))}
          </div>
          <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--muted)",marginTop:8,letterSpacing:"0.03em"}}>
            {["Week 1","Week 4","Week 8","Week 12","Week 16","Week 20","Week 24"].map(w=><span key={w}>{w}</span>)}
          </div>
          <div className="sv-metrics">
            {[["47","Avg start score","var(--charcoal)"],["84","Avg at 12 weeks","var(--emerald)"],["+79%","Avg improvement","var(--gold)"]].map(([v,l,c])=>(
              <div className="sv-metric" key={l}><div className="sv-m-val" style={{color:c}}>{v}</div><div className="sv-m-lbl">{l}</div></div>
            ))}
          </div>
        </div>
        <div className="science-points">
          {points.map(({n,title,desc})=>(
            <div className="sci-point" key={n}>
              <div className="sci-num">{n}</div>
              <div><div className="sci-title">{title}</div><div className="sci-desc">{desc}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
