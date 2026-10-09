import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata={
  title:"Career Connected Learning | WIP",
  description:"Wyoming Career Connected Learning resources for schools, employers, students, and community partners.",
};
const links=[["Student / Parent","/students-families"],["Employer","/employers"],["School / District","/schools"],["WBL / Job Shadow","/wbl-job-shadow"],["FAQ","/faq"]];
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>
    <header className="header">
      <Link href="/" className="brand" aria-label="WIP Career Connected Learning home">
        <img className="brand-logo" src="/wip-logo.png" alt="Wyoming Innovation Partnership" />
        <span className="brand-caption">Career Connected Learning</span>
      </Link>
      <nav aria-label="Main navigation">{links.map(([name,url])=><Link key={url} href={url}>{name}</Link>)}</nav>
    </header>
    {children}
    <footer><div className="wrap foot">
      <div><b>Career Connected Learning</b><p>A practical WIP resource connecting Wyoming learners with their futures.</p></div>
      <div><b>For assistance</b><p>Contact your district CCL coordinator or regional Workforce Center.</p><a href="https://dws.wyo.gov/tr/dws-division/workforce-centers-and-program-operations/">Find a Wyoming Workforce Center ↗</a></div>
      <div><small>Wyoming Innovation Partnership · WIP</small></div>
    </div></footer>
  </body></html>;
}
