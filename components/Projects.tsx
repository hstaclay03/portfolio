import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section shell">
      <div className="section-label"><span>02 / Selected work</span><h2>Ideas put into practice.</h2></div>
      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project" key={project.title}>
            {project.image ? <div className="project-image"><Image src={project.image} alt={`${project.title} website preview`} width={1000} height={650} sizes="(max-width: 700px) 100vw, 55vw" /></div> : <div className="project-placeholder" aria-hidden="true"><span>Commune</span><span>Café</span></div>}
            <div className="project-copy">
              <span className="eyebrow">Project / {String(index + 1).padStart(2, "0")}</span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <ul className="tags" aria-label="Technologies">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              {project.demo !== "#" && <a className="bubble bubble-primary project-visit" href={project.demo} target="_blank" rel="noopener noreferrer">Visit website <span aria-hidden="true">↗</span></a>}
              <details><summary>About the project <span aria-hidden="true">+</span></summary><p>{project.longDesc}</p>
                <div className="project-links">{project.github !== "#" && <a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer">Source code ↗</a>}</div>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
