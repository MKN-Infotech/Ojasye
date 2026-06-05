export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-logo">OJ<span className="gold">AS</span>YE</div>
          <div className="footer-tagline">Feel Better. Perform Better.</div>
          <div className="footer-desc">A technology-driven wellness company building personalized health solutions for the modern man. Clinically backed. AI-powered. Digitally delivered.</div>
        </div>
        <div>
          <div className="footer-col-title">Programs</div>
          <ul className="footer-links">
            {["Men's Wellness","Physical Performance","Energy & Vitality","Preventive Health","Mental Well-being"].map(l=><li key={l}><a href="#">{l}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-links">
            {["About OJASYE","Science & Research","Our Doctors","Careers","Press"].map(l=><li key={l}><a href="#">{l}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Support</div>
          <ul className="footer-links">
            {["Help Center","Contact Us","Privacy Policy","Terms of Service","Refund Policy"].map(l=><li key={l}><a href="#">{l}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 OJASYE Wellness Technologies Private Limited. All rights reserved.</span>
        <span>Made with intent in India 🇮🇳</span>
      </div>
    </footer>
  );
}
