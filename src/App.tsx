import { projects } from './data/projects'
import './App.css'

function App() {
  return (
    <main>
      <section>
        <span className="section-number">01 / ABOUT</span>
        <h1>
          Exploring technology
          <br />
          through practical projects.
        </h1>
        <p className="tagline">
          Linux · Infrastructure · Automation · Local AI
        </p>
      </section>

      <section>
        <span className="section-number">02 / SELECTED WORK</span>

        {projects.map((project, index) => (
          <article key={project.name}>
            <span className="project-number">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h2>{project.name}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App