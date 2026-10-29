import Link from "next/link";

const jobShadowResources=[["Job Shadow Planning Pack","1nWVBqPcWgevSz7akoOSzCZaNJ1YitP2mie3viJDT5SM"],["Student interest and request","1EyfCImZt1udbDjAi60wC-wBXe5_eO1WLgdtdTip7gsQ"],["Host planning worksheet","1pXtid1WhBYkYIMb1lb4pM71JCu-whE29fwxZLmMpidw"],["Agreement and family permission","1bBPAvR272o3v4pNob_xVXO0CPQ0GmtIT_rgmJVnemQI"],["Student observation notes and questions","1quS0lXNsKQjKtc6K6Tap4KMkSJo97X6e8NkqZUbw208"],["Student reflection and next step","18tgusDLeFnFfUBhZAvSeCwB9pjbLlG2kq34EtUJNTyk"],["Host feedback and student thank-you","1IrB0evGkPh0sXEupfQPZU5wRliPnqScLd8rHomCWlSY"]];
const wblResources=[["WY WBL Guidebook","https://edu.wyoming.gov/wp-content/uploads/2023/10/Wyoming-WBL-Guide-2023.pdf"],["WBL Placement Planning Pack","154WlSKexCQjVh8PqASDQm0u-HhAVdWadRhpJGhNgdgs"],["Placement planning and learning partnership agreement","1AVH--lNbRC3ORZRiNwYp8FKRfX6HALCnWud_Pe5CtIA"],["Customized training and learning plan","147RluRslZefZ5jjuTc48QBI5l3hpEWr-TtxGwVLxQps"],["Potential worksite review","1c11S3VLTWOubH-cAOK4aM17rA1rkOc3oH0FZKMoAjGc"],["Student and mentor orientation checklist","1LVMECx86sCHd7QhZ85qHGGiAti07pRA7MLlqLiaeQLE"],["Placement calendar and monitoring log","1zGELg02HFq4wwZFutvoV-k3nN7EKnwZIS1jq_vOsbBk"],["Mentor feedback and learning rubric","1Dbs5RMMsXkh8UUfYvr0JHBJ54Vcf6L1JyFmiCcNZ5ZU"],["Student portfolio and closeout reflection","1WHRxykKM8XvR8a4t-AI5J7YWs2TFLtCUhwhl5gE44aE"],["Participant feedback and partnership renewal","1LFTVvqQzg0xVLJ8RHKYC625IXpLJk7DEAdQaKYN38Ak"],["WYVA Work Experience 1A","https://edu.wyoming.gov/virtual-307/work-experience-1a-2/"]];

const areas = [
  {
    id: "area-elementary",
    shortId: "elementary",
    title: "Elementary School",
    stage: "Awareness",
    icon: "sun",
    summary: "Introduce careers through everyday learning, community stories, and age-appropriate experiences.",
    practices: ["Introduce students to occupations, industries, and local careers, including careers they may not otherwise encounter.", "Design units and lessons that connect standards to real-world learning and career opportunities.", "Help students see how subjects such as mathematics, science, reading, and technology are used in real occupations.", "Incorporate industry partners, career speakers, career days, demonstrations, virtual experiences, and age-appropriate workplace visits.", "Provide age-appropriate responsibilities and projects that develop teamwork, communication, responsibility, and accountability.", "Encourage families to reinforce career awareness and conversations outside of school.", "Broaden students’ understanding of how potential careers connect to their lives and identities."],
    standards: ["K-2.CTE.1.2 Identify and explore different jobs and careers in the home, school, and local community.", "3-5.CTE.1.2 Identify and describe different jobs and careers in the community, state, and nation.", "3-5.CTE.1.3 Explain how different jobs help provide the goods and services to satisfy the needs and wants of the community."],
    resources: [["14 Career Clusters", "https://careertech.org/career-clusters/"], ["Classroom to Careers · Park 6 and Buffalo Bill Center of the West", "https://www.park6.org/article/1151079"], ["WyoTowne · Boys & Girls Club of Central Wyoming", "https://bgccw.org/wyotowne/"]],
  },
  {
    id: "area-middle",
    shortId: "middle",
    title: "Middle School",
    stage: "Exploration",
    icon: "compass",
    summary: "Help students connect interests, strengths, and course choices with careers and pathways.",
    practices: ["Help students identify interests, strengths, values, and aptitudes and connect them to career clusters and pathways.", "Design units and lessons that connect standards to real-world learning and career opportunities.", "Use industry partners, career fairs, workplace visits, and employer engagement that allow students to interact directly with professionals.", "Incorporate industry challenges, client projects, maker experiences, and project-based learning connected to real-world problems.", "Provide opportunities to practice professional communication, introductions, interviews, teamwork, and workplace norms.", "Help students understand how their interests and course choices can influence future education and career options.", "Build bridges for selecting a high school pathway, program of study, or area of career interest."],
    standards: ["6-8.CTE.1.1 Conduct an inventory of personal skills, aptitudes, and interests to identify potential career pathways.", "6-8.CTE.1.2 Explore several career pathways, taking into consideration factors such as outlook, salary, education and training, duties, location, and lifestyle.", "6-8.CTE.1.3 Explain how different industries and careers contribute to local communities and Wyoming as a whole.", "6-8.CTE.1.4 Discuss the employment process (applications, interviews, accepting positions)."],
    resources: [["Career Aptitude & Interest Assessments", "/career-assessments"], ["14 Career Clusters", "https://careertech.org/career-clusters/"], ["School Based Enterprises", "https://www.deca.org/sbe"], ["CAPS Network", "https://yourcapsnetwork.org/"], ["Career Connected Learning by Defined", "https://www.careerconnectedlearning.com/"], ["Find a Wyoming employer or intermediary", "/directory"], ["Wyoming 4-H Virtual Career Night", "https://wyoming4h.org/virtual-career-night/"]],
  },
  {
    id: "area-high-school",
    shortId: "high-school",
    title: "High School",
    stage: "Preparation & Immersion",
    icon: "briefcase",
    summary: "Move from broad exploration toward sustained, mentored learning and documented next steps.",
    practices: ["Provide 9th and 10th graders with multiple site visits, job shadows, and other opportunities to see the workplace firsthand.", "Offer high-school experiences such as internships, mentorships, apprenticeships, work-for-credit placements, clinicals, or capstone projects with explicit learning objectives, supervision, and reflection.", "Support students in choosing and designing their own path from job shadows to internships, apprenticeships, clinicals, or capstone projects.", "Integrate WBL with CTE programs, dual credit, and postsecondary education so students can earn industry-recognized credentials, certifications, badges, or other evidence of workplace competency.", "Develop curriculum and instruction on professionalism, workplace expectations, safety, résumés, and interviewing.", "Give students opportunities to practice employment, financial, technical, and entrepreneurial skills in realistic settings.", "Use student success plans, portfolios, presentations, and industry supervisor evaluations to document growth and inform postsecondary planning, employment, and career transitions.", "Reduce barriers to participation, including through paid placements, and monitor participation by student group to expand opportunities for underserved students."],
    standards: ["9-12.CTE.1.1 Identify and apply personal strengths, interests, and values to explore and compare potential career pathways.", "9-12.CTE.1.2 Locate, evaluate, and apply information from reliable resources (e.g., workforce data, mentors, local industry experts, experiential learning, etc.) to explore careers and support informed decision-making to develop and refine a goal-oriented career plan.", "9-12.CTE.1.4 Identify, prepare, and update resources, and demonstrate the skills (e.g., career planning, résumé development, interview preparation, etc.) necessary to pursue a chosen career path."],
    resources: [["14 Career Clusters", "https://careertech.org/career-clusters/"], ["Wyoming SLEDS", "https://wysleds.org/"], ["School Based Enterprises", "https://www.deca.org/sbe"]],
  },
  {
    id: "area-beyond-school",
    shortId: "beyond-school",
    title: "Beyond School & After School",
    stage: "Extend & Connect",
    icon: "bridge",
    summary: "Connect afterschool, summer, and community learning with in-school pathways and future opportunities.",
    practices: ["Collaborate with afterschool and summer programs, youth organizations, and other community partners.", "Align STEM, maker, entrepreneurship, service-learning, and other programming with in-school career pathways.", "Use afterschool, summer, and weekend hours to accommodate students whose schedules make traditional placements difficult.", "Connect students with youth employment programs, workforce organizations, entrepreneurship activities, and community projects.", "Engage industry professionals and other mentors in projects and activities that can lead to additional WBL opportunities.", "Use portfolios, badges, competencies, or credit to recognize meaningful CCL completed outside the traditional school day."],
    resources: [["Connect with regional partners", "/directory"], ["Mike Rowe Works Scholarship", "https://mikeroweworks.org/scholarship/"], ["14 Career Clusters", "https://careertech.org/career-clusters/"], ["Wyoming SLEDS", "https://wysleds.org/"], ["STEM Next Career Exploration in Out-of-School Time Framework", "https://hs-242738788.f.hubspotemail-na2.net/hubfs/242738788/STEM%20Next%20Career%20Exploration%20in%20Out%20of%20School%20Time%20Framework%20(5).pdf?_hsenc=p2ANqtz--oAnSERH2LmX6ENaQJUg1N2QJlcs3avQEY4W-C8_1v14Op0o14rjCiLn17vhAZ570cUFjb_MfllA-i85Se4OSrbvgVZy0P3Jtm5yacoGOvVIg8O74&_hsmi=9379782"]],
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
      <article className="process-card"><div className="process-number">01</div><div><div className="eyebrow dark">Review</div><h2>K–12 best practices</h2><p>Start with the WIP guide’s shared purpose, foundations, and developmental continuum.</p><div className="process-links"><a className="button small" href="https://docs.google.com/document/d/19-u7mH_FsAmbniRZYPaUA1-83bhHyeAWW6tgt0ozFRY/edit?usp=drivesdk" target="_blank" rel="noreferrer">Open the WIP guide in Google Docs</a></div></div></article>
      <article className="process-card"><div className="process-number">02</div><div><div className="eyebrow dark">Reflect</div><h2>Assess your current state</h2><p>Bring a district team together to rate current practice, note evidence, identify gaps, and choose two or three starting points.</p><div className="process-links"><a className="button small" href="https://docs.google.com/document/d/1Z7ek2QXquIOH1hZAET3PdsUfS2JzJibb9487VzJcF5Y/template/preview" target="_blank" rel="noreferrer">Open the district reflection in Google Docs</a></div></div></article>
    </section>

    <section className="continuum-section" aria-labelledby="continuum-title">
      <div className="step-heading"><span className="process-number">03</span><span className="step-kicker">See the progression</span></div><h2 id="continuum-title">A continuum from awareness to opportunity</h2><p>CCL grows with learners. Experiences should build on one another across grade bands and connect to real choices after high school.</p>
      <ol className="continuum-graphic" aria-label="Career-connected learning continuum">
        {areas.map((area,i)=><li className="continuum-stage" key={area.id}><span className="continuum-index">0{i+1}</span><strong>{i===3?"Beyond School & After School":area.stage}</strong><span>{i===0?"Elementary School":i===1?"Middle School":i===2?"High School":"Afterschool · summer · community · postsecondary bridge"}</span></li>)}
      </ol>
      <div className="continuum-foot"><span>K–5</span><span>6–8</span><span>9–12</span><span>Afterschool · summer · community · postsecondary bridge</span></div>
    </section>

    <section className="choose-area" aria-labelledby="choose-area-title">
      <div className="step-heading"><span className="process-number">04</span><span className="step-kicker">Choose a working area</span></div><h2 id="choose-area-title">Where will your team begin?</h2><p>Select a stage to see the practices and resources that fit your district’s focus.</p>
      <div className="area-button-grid">{areas.map(area=><a className="area-button" href={`#${area.id}`} key={area.id}><AreaIcon name={area.icon}/><span><strong>{area.title}</strong><small>{area.stage}</small></span><span className="area-arrow" aria-hidden="true">→</span></a>)}</div>
    </section>

    <section className="area-details" aria-label="Best practices and resources by working area">
      {areas.map(area=><article className="area-detail" id={area.id} key={area.id}>
        <div className="area-detail-head"><AreaIcon name={area.icon}/><div><div className="eyebrow dark">{area.stage}</div><h2>{area.title}</h2><p>{area.summary}</p></div></div>
        <div className="area-detail-columns"><div><h3>Best-practice starting points</h3><ul className="list">{area.practices.map(x=><li key={x}>{x}</li>)}</ul></div><div><h3>Pair the practice with a resource</h3>{area.id === "area-high-school" ? <div className="practice-links"><a href="https://careertech.org/career-clusters/" target="_blank" rel="noreferrer">14 Career Clusters ↗</a><Link href="/career-assessments">Career Aptitude &amp; Interest Assessments →</Link><a href="https://www.youscience.com/" target="_blank" rel="noreferrer">YouScience Brightpath ↗</a><a href="https://buildformore.com/" target="_blank" rel="noreferrer">Build for More ↗</a><strong>School Based Enterprises</strong><div style={{paddingLeft:18,display:"flex",flexDirection:"column",gap:9,marginTop:-3,marginBottom:8}}><a href="https://cowboystatedaily.com/2026/10/12/wyoming-chooses-teacher-of-the-year-who-shows-city-kids-how-to-farm/" target="_blank" rel="noreferrer">South High Agriculture Farm ↗</a></div><a href="https://yourcapsnetwork.org/" target="_blank" rel="noreferrer">CAPS Network ↗</a><a href="https://www.careerconnectedlearning.com/" target="_blank" rel="noreferrer">Career Connected Learning by Defined ↗</a><strong>Job Shadows</strong><div style={{paddingLeft:18,display:"flex",flexDirection:"column",gap:9,marginTop:-3,marginBottom:8}}>{jobShadowResources.map(([label,id])=><a key={id} href={`https://docs.google.com/document/d/${id}/edit`} target="_blank" rel="noreferrer">{label} →</a>)}</div><strong>WBL</strong><div style={{paddingLeft:18,display:"flex",flexDirection:"column",gap:9,marginTop:-3}}>{wblResources.map(([label,id])=>id.startsWith("http")?<a key={id} href={id} target="_blank" rel="noreferrer">{label} ↗</a>:<a key={id} href={`https://docs.google.com/document/d/${id}/edit`} target="_blank" rel="noreferrer">{label} →</a>)}</div><strong>Apprenticeships</strong><div style={{paddingLeft:18,display:"flex",flexDirection:"column",gap:9,marginTop:-3}}><a href="https://wyapprenticeships.com/" target="_blank" rel="noreferrer">Wyoming Apprenticeships ↗</a></div><a href="https://wysleds.org/" target="_blank" rel="noreferrer">Wyoming SLEDS ↗</a></div> : <div className="practice-links">{area.resources.map(([label,href])=>label==="School Based Enterprises"?<span key={label}>{label}</span>:href.startsWith("http")?<a key={label} href={href} target="_blank" rel="noreferrer">{label} ↗</a>:<Link key={label} href={href}>{label} →</Link>)}</div>}</div></div>
        {area.standards?.length ? <div className="standards-block"><h3>Wyoming CTE standards for this level</h3><ul className="standards-list">{area.standards.map(x=><li key={x}>{x}</li>)}</ul></div> : null}
      </article>)}
    </section>

    <section className="district-intro"><div className="eyebrow dark">Wyoming DWS resources</div><h2>Student work experience agreements & youth work rules</h2><p>Use current state and federal guidance when planning placements involving minors, especially in hazardous occupations.</p></section>
    <div className="resource"><div><b>Student Learner / Student Training Agreements</b><small>Wyoming DWS Workers’ Compensation: program details, eligibility, and agreement forms</small></div><a className="arrow" href="https://dws.wyo.gov/dws-division/workers-compensation/employers/risk-management/" target="_blank" rel="noreferrer">Open DWS resource ↗</a></div>
    <div className="resource"><div><b>Child Labor 101 & Wyoming youth work rules</b><small>Wyoming DWS guidance for age limits, work hours, prohibited occupations, and youth employment resources</small></div><a className="arrow" href="https://dws.wyo.gov/dws-division/labor-standards/employers/can-my-business-hire-youth-ages-14-17/" target="_blank" rel="noreferrer">Open DWS youth work guidance ↗</a></div>
    <div className="actions"><Link className="button outline" href="/implementation">Open the implementation guide</Link><Link className="button outline" href="/faq">Read the WBL FAQ</Link></div>
    <p className="note">Adapt district tools to local policy and partnerships. Wyoming implementation, insurance, and minor-work guidance on this site remains a draft pending review by WDE, DWS, and district risk/legal staff.</p>
  </>;
}
