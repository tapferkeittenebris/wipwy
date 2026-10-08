import Link from "next/link";

const foundations = [
  ["Ensure equitable access", "Provide meaningful CCL opportunities for all learners and reduce barriers such as transportation, scheduling, cost, and accessibility."],
  ["Create a coherent continuum", "Progress intentionally from career awareness to exploration, preparation, and training instead of relying on isolated events."],
  ["Align with learning outcomes", "Connect academic learning, CTE pathways, Wyoming graduation standards, and career interests to individual strengths and aspirations."],
  ["Build strong partnerships", "Develop clear agreements, feedback loops, and employer preparation with industry, labor, community, and postsecondary partners."],
  ["Connect to workforce needs and broader opportunity", "Use regional labor-market needs while introducing learners to careers beyond their immediate community."],
  ["Provide dedicated coordination", "Assign clear responsibility for partnerships, placements, supervision, safety, and legal requirements."],
  ["Teach to WBL", "Prepare learners in communication, professionalism, workplace expectations, and safety; orient mentors to meaningful tasks and student needs."],
  ["Empower reflection and career ownership", "Use student-chosen portfolios, self-assessments, and advising so learners can confirm, refine, or change their plans."],
  ["Recognize student learning", "Where appropriate, recognize learning with credit, industry credentials, badges, competencies, or other evidence of skill."],
  ["Evaluate and improve", "Review participation, skill development, and learner outcomes with partners, then use what you learn to improve access and program quality."],
];

const areas = [
  {
    id: "area-elementary",
    shortId: "elementary",
    title: "Elementary School",
    stage: "Awareness",
    icon: "sun",
    summary: "Introduce careers through everyday learning, community stories, and age-appropriate experiences.",
    practices: ["Connect standards-based lessons to local occupations and industries.", "Use career speakers, demonstrations, family conversations, and virtual or age-appropriate workplace encounters.", "Build teamwork, communication, responsibility, and curiosity through classroom projects."],
    standards: ["K-2.CTE.1.2 Identify and explore different jobs and careers in the home, school, and local community.", "3-5.CTE.1.2 Identify and describe different jobs and careers in the community, state, and nation.", "3-5.CTE.1.3 Explain how different jobs help provide the goods and services to satisfy the needs and wants of the community."],
    resources: [["Adapt a K–5 Wyoming industry project", "/projects#project-0"], ["Review the WIP best-practice foundations", "#foundations"]],
  },
  {
    id: "area-middle",
    shortId: "middle",
    title: "Middle School",
    stage: "Exploration",
    icon: "compass",
    summary: "Help students connect interests, strengths, and course choices with careers and pathways.",
    practices: ["Connect interests, values, and aptitudes to career clusters and pathways.", "Invite direct interaction with professionals through fairs, visits, and classroom partnerships.", "Use industry challenges, maker experiences, and projects to practice communication and workplace norms."],
    standards: ["6-8.CTE.1.1 Conduct an inventory of personal skills, aptitudes, and interests to identify potential career pathways.", "6-8.CTE.1.2 Explore several career pathways, taking into consideration factors such as outlook, salary, education and training, duties, location, and lifestyle.", "6-8.CTE.1.3 Explain how different industries and careers contribute to local communities and Wyoming as a whole.", "6-8.CTE.1.4 Discuss the employment process (applications, interviews, accepting positions)."],
    resources: [["Adapt a grades 6–8 industry challenge", "/projects#project-1"], ["Find a Wyoming employer or intermediary", "/directory"]],
  },
  {
    id: "area-high-school",
    shortId: "high-school",
    title: "High School",
    stage: "Preparation & Immersion",
    icon: "briefcase",
    summary: "Move from broad exploration toward sustained, mentored learning and documented next steps.",
    practices: ["Offer site visits and job shadows, then support student-chosen internships, apprenticeships, clinicals, or capstones.", "Connect WBL with CTE, dual credit, credentials, and explicit learning objectives.", "Document growth through portfolios, presentations, reflections, and supervisor feedback; reduce barriers to paid placements."],
    standards: ["9-12.CTE.1.1 Identify and apply personal strengths, interests, and values to explore and compare potential career pathways.", "9-12.CTE.1.2 Locate, evaluate, and apply information from reliable resources (e.g., workforce data, mentors, local industry experts, experiential learning, etc.) to explore careers and support informed decision-making to develop and refine a goal-oriented career plan.", "9-12.CTE.1.4 Identify, prepare, and update resources, and demonstrate the skills (e.g., career planning, résumé development, interview preparation, etc.) necessary to pursue a chosen career path."],
    resources: [["Explore a healthcare design project", "/projects#project-2"], ["Explore a construction design project", "/projects#project-3"], ["Open the student learning plan", "/resources#template-student-learning-plan"], ["Open the employer mentor evaluation", "/resources#template-employer-mentor-evaluation"]],
  },
  {
    id: "area-beyond-school",
    shortId: "beyond-school",
    title: "Beyond School & After School",
    stage: "Extend & Connect",
    icon: "bridge",
    summary: "Connect afterschool, summer, and community learning with in-school pathways and future opportunities.",
    practices: ["Coordinate with youth organizations, summer programs, workforce partners, and community projects.", "Use flexible hours and mentors to reach students whose schedules limit traditional placements.", "Recognize meaningful learning with portfolios, badges, competencies, or credit."],
    resources: [["Plan a student reflection and next step", "/projects#project-5"], ["Connect with regional partners", "/directory"], ["Browse templates and trusted links", "/resources"]],
  },
];

function AreaIcon({name}:{name:string}) {
  const common={fill:"none",stroke:"currentColor",strokeWidth:2.4,strokeLinecap:"round" as const,strokeLinejoin:"round" as const};
  return <svg className="area-icon" viewBox="0 0 64 64" aria-hidden="true">
    {name==="sun"&&<g {...common}><circle cx="32" cy="32" r="11"/><path d="M32 5v8M32 51v8M5 32h8M51 32h8M13 13l6 6M45 45l6 6M51 13l-6 6M19 45l-6 6"/><path d="M27 32l4 4 8-9"/></g>}
    {name==="compass"&&<g {...common}><circle cx="32" cy="32" r="24"/><path d="m41 22-6 16-16 6 6-16 16-6Z"/><circle cx="32" cy="32" r="2"/></g>}
    {name==="briefcase"&&<g {...common}><rect x="8" y="20" width="48" height="34" rx="4"/><path d="M23 20v-6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6M8 33h48M27 33v5h10v-5"/><path d="m23 44 6 6 13-14"/></g>}
    {name==="bridge"&&<g {...common}><path d="M7 49h50M12 49V26M52 49V26M12 32c10-14 30-14 40 0M20 49V34M32 49V29M44 49V34"/><path d="M7 55h50"/></g>}
  </svg>;
}

export default function DistrictGuide() {
  return <>
    <p className="lead school-intro">Use this four-step process to review the WIP guide, reflect on your district’s current practice, choose a focus area, and find resources to take the next step.</p>

    <section className="implementation-steps" aria-label="District implementation process">
      <article className="process-card"><div className="process-number">01</div><div><div className="eyebrow dark">Review</div><h2>K–12 best practices</h2><p>Start with the WIP guide’s shared purpose, foundations, and developmental continuum.</p><div className="process-links"><a className="button small" href="https://docs.google.com/document/d/19-u7mH_FsAmbniRZYPaUA1-83bhHyeAWW6tgt0ozFRY/edit?usp=drivesdk" target="_blank" rel="noreferrer">Open the WIP guide in Google Docs</a><a className="arrow" href="#foundations">Review the ten foundations →</a></div></div></article>
      <article className="process-card"><div className="process-number">02</div><div><div className="eyebrow dark">Reflect</div><h2>Assess your current state</h2><p>Bring a district team together to rate current practice, note evidence, identify gaps, and choose two or three starting points.</p><div className="process-links"><a className="button small" href="https://docs.google.com/document/d/1Z7ek2QXquIOH1hZAET3PdsUfS2JzJibb9487VzJcF5Y/edit?usp=drivesdk" target="_blank" rel="noreferrer">Open the district reflection in Google Docs</a></div></div></article>
    </section>

    <section className="continuum-section" aria-labelledby="continuum-title">
      <div className="step-kicker">03 · See the progression</div><h2 id="continuum-title">A continuum from awareness to opportunity</h2><p>CCL grows with learners. Experiences should build on one another across grade bands and connect to real choices after high school.</p>
      <ol className="continuum-graphic" aria-label="Career-connected learning continuum">
        {areas.map((area,i)=><li className="continuum-stage" key={area.id}><span className="continuum-index">0{i+1}</span><strong>{i===3?"Beyond School & After School":area.stage}</strong><span>{i===0?"Elementary School":i===1?"Middle School":i===2?"High School":"Afterschool · summer · community · postsecondary bridge"}</span></li>)}
      </ol>
      <div className="continuum-foot"><span>K–5</span><span>6–8</span><span>9–12</span><span>Afterschool · summer · community · postsecondary bridge</span></div>
    </section>

    <section className="choose-area" aria-labelledby="choose-area-title">
      <div className="step-kicker">04 · Choose a working area</div><h2 id="choose-area-title">Where will your team begin?</h2><p>Select a stage to see the practices and resources that fit your district’s focus.</p>
      <div className="area-button-grid">{areas.map(area=><a className="area-button" href={`#${area.id}`} key={area.id}><AreaIcon name={area.icon}/><span><strong>{area.title}</strong><small>{area.stage}</small></span><span className="area-arrow" aria-hidden="true">→</span></a>)}</div>
    </section>

    <section className="area-details" aria-label="Best practices and resources by working area">
      {areas.map(area=><article className="area-detail" id={area.id} key={area.id}>
        <div className="area-detail-head"><AreaIcon name={area.icon}/><div><div className="eyebrow dark">{area.stage}</div><h2>{area.title}</h2><p>{area.summary}</p></div></div>
        {area.standards?.length ? <div className="standards-block"><h3>Wyoming CTE standards for this level</h3><ul className="standards-list">{area.standards.map(x=><li key={x}>{x}</li>)}</ul></div> : null}
        <div className="area-detail-columns"><div><h3>Best-practice starting points</h3><ul className="list">{area.practices.map(x=><li key={x}>{x}</li>)}</ul></div><div><h3>Pair the practice with a resource</h3><div className="practice-links">{area.resources.map(([label,href])=><Link key={label} href={href}>{label} →</Link>)}</div></div></div>
      </article>)}
    </section>

    <section id="foundations" className="district-intro"><div className="eyebrow dark">WIP CCL K–12 Best Practices</div><h2>Ten foundations for strong CCL</h2><p>Use these foundations to design experiences, assess program quality, and identify the next improvement step.</p></section>
    <div className="foundation-grid">{foundations.map(([title,text],i)=><article className="foundation-card" key={title}><span className="foundation-number">{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>

    <section className="district-intro"><div className="eyebrow dark">Wyoming DWS resources</div><h2>Student work experience agreements & youth work rules</h2><p>Use current state and federal guidance when planning placements involving minors, especially in hazardous occupations.</p></section>
    <div className="resource"><div><b>Student Learner / Student Training Agreements</b><small>Wyoming DWS Workers’ Compensation: program details, eligibility, and agreement forms</small></div><a className="arrow" href="https://dws.wyo.gov/dws-division/workers-compensation/employers/risk-management/" target="_blank" rel="noreferrer">Open DWS resource ↗</a></div>
    <div className="resource"><div><b>Child Labor 101 & Wyoming youth work rules</b><small>Wyoming DWS guidance for age limits, work hours, prohibited occupations, and youth employment resources</small></div><a className="arrow" href="https://dws.wyo.gov/dws-division/labor-standards/employers/can-my-business-hire-youth-ages-14-17/" target="_blank" rel="noreferrer">Open DWS youth work guidance ↗</a></div>
    <div className="actions"><Link className="button" href="/resources">Open the document bank</Link><Link className="button outline" href="/implementation">Open the implementation guide</Link><Link className="button outline" href="/faq">Read the WBL FAQ</Link></div>
    <p className="note">Adapt district tools to local policy and partnerships. Wyoming implementation, insurance, and minor-work guidance on this site remains a draft pending review by WDE, DWS, and district risk/legal staff.</p>
  </>;
}
