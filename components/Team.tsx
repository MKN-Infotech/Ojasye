const team = [
  {initials:"DS", name:"Dr. Deepak Sharma", title:"Chief Medical Officer", cred:"MBBS · MD Endocrinology", bg:"var(--emerald)", photo:"#EEF3F1"},
  {initials:"PM", name:"Dr. Priya Mehta", title:"Head of Nutrition Science", cred:"PhD Nutritional Biochemistry", bg:"var(--gold-dk)", photo:"#F3F0EB"},
  {initials:"AV", name:"Dr. Aryan Verma", title:"Sports Medicine Specialist", cred:"MBBS · MS Sports Medicine", bg:"#4A7FA5", photo:"#EBF0F3"},
  {initials:"SR", name:"Dr. Sunita Rao", title:"Behavioral Wellness Lead", cred:"PhD Clinical Psychology", bg:"#7A4A7A", photo:"#F3EBF0"},
];

export default function Team() {
  return (
    <section className="team" id="about">
      <div className="section-tag">Expert Team</div>
      <h2 className="section-h">The minds behind<br />your transformation.</h2>
      <div className="team-grid">
        {team.map(({initials,name,title,cred,bg,photo})=>(
          <div className="team-card" key={name}>
            <div className="team-photo" style={{background:photo}}>
              <div className="team-avatar" style={{background:bg}}>{initials}</div>
            </div>
            <div className="team-info">
              <div className="team-name">{name}</div>
              <div className="team-title">{title}</div>
              <div className="team-cred"><span className="team-cred-text">{cred}</span></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
