import Link from "next/link";

export default function Home(){
  return <main>
    <section className="hero home-hero">
      <div className="wrap">
        <div className="eyebrow">Wyoming Career Connected Learning</div>
        <h1>Connect classroom learning to real Wyoming careers.</h1>
        <p>Make career-connected learning an essential part of every student’s education—from early career exploration to hands-on projects, internships, and college or career pathways. With strong school and industry partnerships, students graduate with real experience and Wyoming grows its homegrown workforce.</p>
        <h2 className="audience-heading">I am a:</h2>
        <div className="actions role-actions">
          <Link className="button" href="/students-families">Student / Parent</Link>
          <Link className="button" href="/employers">Employer</Link>
          <Link className="button" href="/schools">School / District</Link>
        </div>
      </div>
    </section>
  </main>;
}
