const plans = [
  {name:"Essential", desc:"Perfect for starting your wellness journey with clinically validated guidance and foundational support.", price:"1,499", featured:false,
    features:["Full wellness assessment","Personalized 90-day plan","Core nutraceutical kit","Monthly doctor review","Mobile app access"], btn:"Get Started", btnClass:"btn-plan-outline"},
  {name:"Performance", desc:"Our most comprehensive program for men serious about peak performance and accelerated results.", price:"2,999", featured:true,
    features:["Everything in Essential","Advanced biomarker testing","Premium nutraceutical stack","Bi-weekly doctor consultations","AI wellness coach (24/7)","Priority support"], btn:"Start Performance Plan", btnClass:"btn-plan-white"},
  {name:"Elite", desc:"White-glove wellness management for executives and high-performers who demand the absolute best.", price:"5,999", featured:false,
    features:["Everything in Performance","Dedicated wellness physician","Weekly consultations","Home diagnostics kit","Quarterly in-depth health review"], btn:"Apply for Elite", btnClass:"btn-plan-outline"},
];

export default function Plans() {
  return (
    <section className="plans" id="plans">
      <div className="plans-header">
        <div className="section-tag">Wellness Plans</div>
        <h2 className="section-h">Choose your journey.</h2>
        <p className="section-sub">All plans include a personalized assessment, clinical review, and dedicated support. No contracts. Cancel anytime.</p>
      </div>
      <div className="plans-grid">
        {plans.map(({name,desc,price,featured,features,btn,btnClass})=>(
          <div key={name} className={`plan-card ${featured?"featured":""}`}>
            {featured && <div className="plan-badge">Most Popular</div>}
            <div className="plan-name">{name}</div>
            <div className="plan-desc">{desc}</div>
            <div className="plan-price">
              <span className="plan-curr">₹</span>
              <span className="plan-amount">{price}</span>
              <span className="plan-period">/month</span>
            </div>
            <div className="plan-features">
              {features.map(f=>(
                <div className="plan-feat" key={f}>
                  <div className="plan-feat-check">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  {f}
                </div>
              ))}
            </div>
            <button className={`btn-plan ${btnClass}`}>{btn}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
