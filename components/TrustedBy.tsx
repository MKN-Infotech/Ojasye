export default function TrustedBy() {
  return (
    <div className="trusted">
      <div className="trusted-inner">
        <span className="trusted-label">As seen in</span>
        <div className="trusted-divider"></div>
        <div className="trusted-logos">
          {[
            {label:"Times of India", style:{fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontWeight:600}},
            {label:"NDTV", style:{fontSize:16,fontWeight:800,letterSpacing:"-0.02em"}},
            {label:"Economic Times", style:{fontFamily:"'Cormorant Garamond',serif",fontSize:19,fontWeight:600}},
            {label:"YourStory", style:{fontSize:15,fontWeight:700}},
            {label:"Inc42", style:{fontSize:14,fontWeight:800,letterSpacing:"0.08em",textTransform:"uppercase" as const}},
          ].map(({label,style})=>(
            <div className="logo-pill" key={label}><span style={{...style,color:"#111"}}>{label}</span></div>
          ))}
        </div>
        <div className="trusted-stats">
          {[["ISO 9001","Certified"],["AYUSH","Compliant"],["FSSAI","Approved"]].map(([num,lbl])=>(
            <div className="ts-item" key={num}>
              <div className="ts-num">{num}</div>
              <div className="ts-lbl">{lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
