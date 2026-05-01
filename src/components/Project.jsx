import { useState } from 'react'
import '../css/Project.css'
import bookcommuPreview from '../assets/images/BOOCCOMMU/HomePage.png'
import vrInteriorPreview from '../assets/images/VRinterior/Screenshot _1.png'

const tabs = ['ALL', 'WEB TECH', 'Game Dev']

const projects = [
  {
    id: 1,
    title: 'BookCommu',
    description:
      'แพลตฟอร์มชุมชนสำหรับนักอ่าน ที่รวมระบบจัดการหนังสือ รีวิว Community แชท และ Marketplace หนังสือมือสอง พร้อมระบบแนะนำหนังสือเฉพาะบุคคล',
    tech: 'React, Node.js, Express, MySQL, Docker',
    href: '/Portfolio-2026/bookcommu',
    preview: bookcommuPreview,
    category: 'WEB TECH',
  },
  {
    id: 2,
    title: 'VR for Interior Design',
    description:
      'Interactive VR application for exploring and customizing interior spaces with Unity and XR Toolkit.',
    tech: 'Unity, C#, XR Toolkit, Blender',
    href: '/Portfolio-2026/vr-interior',
    preview: vrInteriorPreview,
    category: 'Game Dev',
  }
]

function Project() {
  const [activeTab, setActiveTab] = useState('ALL')
  const filteredProjects =
    activeTab === 'ALL'
      ? projects
      : projects.filter((project) => project.category === activeTab)

  return (
    <section id="Projects" className="project-section">
      <div className="project-header">
        <h2>PROJECTS</h2>
      </div>

      <div className="project-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`project-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => {
          const content = (
            <>
              <div
                className="project-card-preview"
                style={
                  project.preview
                    ? { backgroundImage: `url(${project.preview})` }
                    : undefined
                }
              />
              <div className="project-card-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.tech && (
                  <div className="project-card-meta">
                    <span>Tech: {project.tech}</span>
                  </div>
                )}
              </div>
            </>
          )

          return project.href ? (
            <a
              key={project.id}
              href={project.href}
              className="project-card project-card-link"
            >
              {content}
            </a>
          ) : (
            <div key={project.id} className="project-card">
              {content}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Project