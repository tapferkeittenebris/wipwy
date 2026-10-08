import Link from "next/link";

const practices = [
  {
    title: "1 · Make access equitable",
    text: "Design opportunities for every learner. Identify and reduce transportation, scheduling, cost, accessibility and other participation barriers.",
    resources: [["Plan for safety, transportation and accessibility", "/implementation"], ["Find regional partners", "/directory"], ["Adapt a project for learners", "/projects"]],
  },
  {
    title: "2 · Build a coherent continuum",
    text: "Sequence experiences from awareness to exploration, preparation and immersion. Make each experience build on what learners have already discovered.",
    resources: [["See grade-band entry points", "#grade-bands"], ["Browse projects by grade and industry", "/projects"]],
  },
  {
    title: "3 · Connect experiences to learning",
    text: "Set clear learning objectives and connect classroom standards, CTE pathways, Wyoming graduation standards and career interests to authentic work.",
    resources: [["Use the student learning plan", "/resources#template-student-learning-plan"], ["Read the Wyoming WBL Guide", "https://edu.wyoming.gov/wp-content/uploads/2023/10/Wyoming-WBL-Guide-2023.pdf"]],
  },
  {
    title: "4 · Build strong partnerships",
    text: "Give employers one clear school contact. Set written expectations, meaningful tasks, mentor preparation, feedback loops and opportunities to engage industry, labor and postsecondary partners.",
    resources: [["Search employers and intermediaries", "/directory"], ["Employer mentor evaluation", "/resources#template-employer-mentor-evaluation"], ["Employer participation guide", "/employers"]],
  },
  {
    title: "5 · Connect local needs with broad opportunity",
    text: "Use regional labor-market needs to inform pathways while introducing learners to careers beyond their immediate community.",
    resources: [["Explore partners by sector", "/directory"], ["Wyoming labor-market information", "https://doe.state.wy.us/LMI/"]],
  },
  {
    title: "6 · Coordinate the details",
    text: "Assign responsibility for partnerships, placements, supervision, safety and legal requirements. Confirm the learning plan and logistics before a student begins.",
    resources: [["Use the worksite visit checklist", "/resources#template-coordinator-worksite-visit"], ["Review Wyoming implementation guidance", "/implementation"]],
  },
  {
    title: "7 · Prepare learners and mentors",
    text: "Teach communication, professionalism, workplace expectations and safety. Orient mentors to adolescent development, meaningful tasks and school expectations.",
    resources: [["Prepare learners and families", "/students-families"], ["Use the learning plan", "/resources#template-student-learning-plan"], ["Review safety guidance", "/implementation"]],
  },
  {
    title: "8 · Make reflection and career ownership routine",
    text: "Use student-chosen portfolios, self-assessments and advising to help learners confirm, refine or change their plans based on what they experience.",
    resources: [["Open student reflection", "/resources#template-student-reflection"], ["Use ready-to-adapt assignments", "/projects"], ["Explore interests and strengths", "https://www.mynextmove.org/explore/ip"]],
  },
  {
    title: "9 · Recognize student learning",
    text: "Where appropriate, recognize demonstrated learning through credit, industry credentials, badges, competencies or other evidence of workplace skill.",
    resources: [["Record experience completion", "/resources#template-experience-completion-record"], ["Explore the high-school-to-postsecondary bridge", "/projects#project-3"]],
  },
  {
    title: "10 · Evaluate and improve",
    text: "Track participation, completion, skill evidence and next steps. Review patterns with partners and use them to improve program quality and access.",
    resources: [["Review the aggregate dashboard", "/dashboard"], ["Submit district measures", "/portal"]],
  },
];

const bands = [
  ["K–2 · Awareness", "Connect repeated, age-appropriate career encounters with literacy, math, science and social studies. Invite community workers to share their career paths and typical workdays.", "/projects#project-0"],
  ["3–5 · Awareness", "Build standards-based units and ongoing lessons around local occupations and industries. Include employer encounters, demonstrations, projects and family conversations. Roads to Success is a Wyoming example of community career-path sharing.", "/projects#project-0"],
  ["6–8 · Exploration", "Help learners connect interests, strengths, values and aptitudes to career clusters. Use employer interactions, workplace visits, industry challenges, maker experiences and project-based learning.", "/projects#project-1"],
  ["9–10 · Preparation", "Offer broad pathway exploration, employability preparation, workplace visits or job shadows, and early postsecondary planning.", "/projects#project-2"],
  ["11–12 · Preparation & immersion", "Provide access to a sustained, mentored experience—preferably paid or credit-bearing—with explicit objectives, assessed skills, reflection and documented transition steps.", "/projects#project-3"],
  ["Beyond high school", "Create warm handoffs through articulated or dual credit, apprenticeship-to-degree maps, and connections to colleges, training providers, employers or military pathways.", "/directory"],
  ["Beyond the school day", "Coordinate afterschool, summer, weekend and community programs with in-school pathways. Use flexible schedules, mentors, portfolios, badges or credit to recognize learning.", "/projects"],
];

export default function DistrictGuide() {
  return <>
    <section className="callout"><strong>Purpose</strong><br />Career-connected learning should give every Wyoming learner a clear line of sight from classroom learning to future careers. Build awareness early, then connect students with progressively deeper projects, employers, postsecondary partners and workplace experiences.</section>
    <p className="lead">This guide translates the WIP CCL Best Practices Guide into a district planning framework. Use each practice with the linked resources; adapt tools to district policy and local partnerships.</p>
    <div className="district-intro"><h2>Ten foundations for strong CCL</h2><p>Use these foundations to design experiences, assess program quality and identify the next improvement step.</p></div>
    <div className="practice-list">{practices.map((p) => <article className="practice-card" key={p.title}>
      <div><h3>{p.title}</h3><p>{p.text}</p></div>
      <div className="practice-links"><b>Pair this practice with</b>{p.resources.map(([label,href]) => href.startsWith("http") ? <a key={label} href={href} target="_blank" rel="noreferrer">{label} ↗</a> : <Link key={label} href={href}>{label} →</Link>)}</div>
    </article>)}</div>
    <section id="grade-bands" className="district-intro grade-section"><div className="eyebrow dark">A developmental sequence</div><h2>Suggested entry points by grade band</h2><p>These are starting points, not a one-size-fits-all sequence. Adjust for learner readiness, local context and access.</p></section>
    <div className="grade-grid">{bands.map(([title,text,href]) => <article className="grade-card" key={title}><h3>{title}</h3><p>{text}</p><Link className="arrow" href={href}>Open related project or directory →</Link></article>)}</div>
    <section className="district-intro rubric-section"><div className="eyebrow dark">District self-check</div><h2>Quality rubric: where is the program now?</h2><p>Use this brief rubric in a partner conversation. The “sustained” column reflects the guide’s intended direction; progress can look different across schools and grade bands.</p></section>
    <div className="tablewrap"><table className="rubric"><thead><tr><th>Dimension</th><th>Getting started</th><th>Building</th><th>Sustained practice</th></tr></thead><tbody>
      <tr><td>Access & continuum</td><td>Experiences are occasional or depend on individual initiative.</td><td>Grade-band opportunities are planned; barriers are being identified.</td><td>Every learner can access an intentional progression, with barriers addressed.</td></tr>
      <tr><td>Learning & partnerships</td><td>Career activities have limited links to learning goals.</td><td>Objectives and partner roles are documented for many experiences.</td><td>Experiences align to learning, employers have clear roles, and mentors provide feedback.</td></tr>
      <tr><td>Student ownership</td><td>Reflection and next steps are informal.</td><td>Students reflect and some document skills or goals.</td><td>Students use evidence, feedback and advising to direct their next steps.</td></tr>
      <tr><td>Improvement & evidence</td><td>Participation is not consistently recorded.</td><td>District reviews participation and completion data.</td><td>Partners use access, completion, learning evidence and next-step data to improve quality.</td></tr>
    </tbody></table></div>
    <div className="actions"><Link className="button" href="/resources">Open the document bank</Link><Link className="button outline" href="/dashboard">View aggregate measures</Link><Link className="arrow" href="/portal">District reporting portal →</Link></div>
    <p className="note">Adapted from the WIP Career-Connected Learning K–12 Best Practices Guide. Wyoming implementation, insurance and minor-work guidance on this site remains a draft pending review by WDE, DWS and district risk/legal staff.</p>
  </>;
}
