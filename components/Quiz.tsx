"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  {q:"What best describes your primary wellness concern?", opts:["Low energy and constant fatigue","Declining sexual drive or performance","Difficulty building muscle or losing fat","Poor sleep and high stress levels"]},
  {q:"How would you describe your current energy levels throughout the day?", opts:["High and consistent — energized all day","Good in the morning, drops in the afternoon","Inconsistent — often fatigued by midday","Low most of the day, struggling to stay focused"]},
  {q:"How is your sleep quality on most nights?", opts:["Excellent — I wake up refreshed","Good — occasional bad nights","Fair — rarely feel well-rested","Poor — I struggle to sleep or wake up exhausted"]},
  {q:"How would you rate your current stress levels?", opts:["Low — I manage stress well","Moderate — some stress but manageable","High — stress affects my daily life","Very high — I feel overwhelmed most of the time"]},
  {q:"What is your primary performance goal with Ojasye?", opts:["Boost energy and vitality","Improve sexual health and confidence","Enhance physical performance and strength","Achieve overall hormonal and mental balance"]},
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>("");
  const router = useRouter();

  function handleNext() {
    if (!selected) return;
    const newAnswers = [...answers, selected];
    if (step < questions.length - 1) {
      setAnswers(newAnswers);
      setSelected("");
      setStep(step + 1);
    } else {
      const summary = newAnswers.map((a, i) => `Q${i+1}: ${a}`).join(" | ");
      router.push(`/chat?assessment=${encodeURIComponent(summary)}`);
    }
  }

  return (
    <section className="quiz-section" id="quiz">
      <div className="section-tag">Free Assessment</div>
      <h2 className="section-h">Your wellness journey<br />starts with <em style={{fontStyle:"italic",color:"var(--gold)"}}>one question.</em></h2>
      <div className="quiz-layout">
        <div>
          <p className="section-sub" style={{marginBottom:36}}>Answer 5 questions. Get a personalized wellness roadmap powered by our AI — delivered instantly.</p>
          <div className="quiz-features">
            {[
              {title:"Clinically Validated Questions", desc:"Developed in collaboration with endocrinologists, sports medicine specialists, and wellness researchers.", icon:<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>},
              {title:"Instant AI-Powered Report", desc:"Receive your wellness profile, gap analysis, and a 90-day action plan from Oja, your AI wellness coach.", icon:<><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></>},
              {title:"100% Private & Secure", desc:"Your data is encrypted and never shared. HIPAA-aligned data handling protocols at every step.", icon:<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>},
            ].map(({title,desc,icon})=>(
              <div className="qf-item" key={title}>
                <div className="qf-icon"><svg viewBox="0 0 24 24">{icon}</svg></div>
                <div><div className="qf-title">{title}</div><div className="qf-desc">{desc}</div></div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="quiz-card">
            <div className="quiz-steps-nav">
              {questions.map((_,i)=>(
                <div key={i} className={`qstep ${i < step ? "done" : i===step ? "active" : ""}`}></div>
              ))}
            </div>
            <div className="quiz-q-label">Question {step+1} of {questions.length}</div>
            <div className="quiz-question">{questions[step].q}</div>
            <div className="quiz-options">
              {questions[step].opts.map(opt=>(
                <button key={opt} className={`quiz-opt ${selected===opt?"selected":""}`} onClick={()=>setSelected(opt)}>
                  <div className="qopt-radio">{selected===opt && <div style={{width:6,height:6,background:"white",borderRadius:"50%"}}></div>}</div>
                  <span className="qopt-text">{opt}</span>
                </button>
              ))}
            </div>
            <div className="quiz-footer">
              <span className="quiz-counter">{step+1} / {questions.length} completed</span>
              <button className="btn-sm" onClick={handleNext} style={{opacity:selected?1:0.4}}>
                {step===questions.length-1 ? "Get My Report →" : "Next Question →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
