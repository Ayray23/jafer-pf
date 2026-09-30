import { useState } from 'react'
import './App.css'

const projects = [
  { title: 'Modern Web Experiences', text: 'Responsive interfaces focused on clarity, performance and polished interactions.' },
  { title: 'Frontend Development', text: 'Reusable React components and maintainable UI foundations for growing products.' },
  { title: 'Responsive Design', text: 'Mobile-first layouts that adapt cleanly across phones, tablets and desktops.' },
]

function App() {
  const [dark, setDark] = useState(true)

  return (
    <div className={`app ${dark ? 'theme-dark' : 'theme-light'}`}>
      <header className="nav">
        <a className="brand" href="#home">Jafer<span>.</span></a>
        <button className="theme-toggle" onClick={() => setDark((value) => !value)} aria-label="Toggle theme">
          {dark ? '☀️' : '🌙'}
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <p className="eyebrow">FRONTEND DEVELOPER</p>
          <h1>Building clean digital experiences that feel <span>effortless.</span></h1>
          <p className="lead">I design and build responsive web experiences with a focus on usability, performance and thoughtful details.</p>
          <div className="actions">
            <a className="primary" href="#work">View my work</a>
            <a className="secondary" href="mailto:hello@example.com">Let's talk</a>
          </div>
        </section>

        <section id="work" className="work">
          <div className="section-heading">
            <p className="eyebrow">WHAT I DO</p>
            <h2>Focused on useful, beautiful products.</h2>
          </div>
          <div className="grid">
            {projects.map((project) => (
              <article className="card" key={project.title}>
                <div className="number">0{projects.indexOf(project) + 1}</div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>Available for new projects · {new Date().getFullYear()}</footer>
    </div>
  )
}

export default App
