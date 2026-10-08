"use client";
import {useState} from "react";

const regions=["Northwest","Northeast","Southwest","Southeast","Central"];
const sectors=["Agriculture & natural resources","Energy","Healthcare","Construction & skilled trades","Manufacturing","Tourism & hospitality","Business & entrepreneurship","Public service","Technology"];
const directory=[
  {name:"Wyoming Department of Workforce Services — Workforce Centers",region:"Statewide",sector:"Public service",experience:"Career exploration · work experience · employer connections",url:"https://dws.wyo.gov/tr/dws-division/workforce-centers-and-program-operations/"},
  {name:"Wyoming Business Alliance",region:"Statewide",sector:"Business & entrepreneurship",experience:"Employer engagement · career exploration",url:"https://www.wyomingbusinessalliance.com/"},
  {name:"Wyoming Department of Education — CTE",region:"Statewide",sector:"Education · all sectors",experience:"Career pathways · work-based learning",url:"https://edu.wyoming.gov/educators/cte/"},
  {name:"Experience Work",region:"Statewide",sector:"Cross-sector",experience:"Career exploration · experiential learning",url:"https://experience.work/"},
  {name:"All4Ed",region:"National",sector:"Education · all sectors",experience:"Career-connected learning research · tools",url:"https://all4ed.org/"},
  {name:"Advance CTE",region:"National",sector:"Education · all sectors",experience:"Career pathways · implementation resources",url:"https://careertech.org/"},
];

export function Directory(){
  const [query,setQuery]=useState("");
  const [region,setRegion]=useState("All regions");
  const [sector,setSector]=useState("All sectors");
  const [experience,setExperience]=useState("All experiences");
  const filtered=directory.filter(item=>
    (region==="All regions"||item.region===region||item.region==="Statewide")&&
    (sector==="All sectors"||item.sector===sector||item.sector.includes("all sectors"))&&
    (experience==="All experiences"||item.experience.toLowerCase().includes(experience.toLowerCase()))&&
    (item.name+item.region+item.sector+item.experience).toLowerCase().includes(query.toLowerCase())
  );
  return <>
    <div className="filters">
      <input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search name, place, or service" aria-label="Search partners"/>
      <select value={region} onChange={event=>setRegion(event.target.value)} aria-label="Filter by region"><option>All regions</option>{regions.map(item=><option key={item}>{item}</option>)}</select>
      <select value={sector} onChange={event=>setSector(event.target.value)} aria-label="Filter by sector"><option>All sectors</option>{sectors.map(item=><option key={item}>{item}</option>)}</select>
      <select value={experience} onChange={event=>setExperience(event.target.value)} aria-label="Filter by experience type"><option>All experiences</option>{["Career exploration","work experience","employer connections","career pathways"].map(item=><option key={item}>{item}</option>)}</select>
    </div>
    <p className="note">Directory listings are starting points. Confirm current programs, service area, and availability directly with each organization.</p>
    {filtered.map(item=><div className="resource" key={item.name}><div><b>{item.name}</b><small>{item.region} · {item.sector} · {item.experience}</small></div><a className="arrow" href={item.url} target="_blank" rel="noreferrer">Visit ↗</a></div>)}
    {!filtered.length&&<div className="callout">No partners match those filters. Try a broader search.</div>}
  </>;
}
