import { skills } from "@/data/skills";

export default function About() {
  return (
    <section id="about" className="section shell">
      <div className="section-label"><span>01 / About</span><h2>A little about me.</h2></div>
      <div className="about-grid">
        <div className="about-copy">
          <p className="lead">I enjoy turning complex ideas into simple, useful experiences.</p>
          <p>I’m a web developer and quality assurance tester passionate about accessible interfaces and thoughtful engineering. My work brings together design, performance, and usability, with a focus on full-stack applications using React, Next.js, and TypeScript.</p>
          <p>As a quality assurance tester, I create and run test cases, check user flows against requirements, and identify issues that affect functionality and usability. I document reproducible bugs in Jira, track their progress, retest fixes, and perform regression testing to help ensure new changes work without breaking existing features.</p>
          <p>Currently in my fourth year at Western Mindanao State University, I’m building web projects and working on my final year capstone. Away from the screen, you’ll find me climbing, reading, spending time with my cat, or exploring coffee shops around the city.</p>
        </div>
        <aside className="about-details">
          <div><h3>Experience</h3><p>Data Encoder</p><p className="muted">Entered and organized data, checked records for accuracy and completeness, and maintained consistent information with careful attention to detail.</p></div>
          <div><h3>Education</h3><p>BS Information Technology</p><p className="muted">Western Mindanao State University<br />4th year · Present</p></div>
          <div><h3>Tools &amp; disciplines</h3><ul className="skill-list">{skills.map((skill) => <li key={skill.name}>{skill.name}</li>)}<li>Jira / Bug tracking</li><li>Test cases / Regression testing</li><li>PHP / MySQL</li><li>HTML / CSS / JavaScript</li></ul></div>
        </aside>
      </div>
    </section>
  );
}
