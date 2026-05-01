import React, { useState } from 'react'
import '../css/vrinterior.css'
import screenshot1 from '../assets/images/VRinterior/Screenshot _1.png'
import screenshot2 from '../assets/images/VRinterior/Screenshot_2.png'
import screenshot3 from '../assets/images/VRinterior/Screenshot_3.png'
import screenshot4 from '../assets/images/VRinterior/Screenshot_4.png'
import screenshot5 from '../assets/images/VRinterior/Screenshot_5.png'
import screenshot6 from '../assets/images/VRinterior/Screenshot_6.png'
import screenshot7 from '../assets/images/VRinterior/Screenshot_7.png'
import screenshot8 from '../assets/images/VRinterior/Screenshot_8.png'
import screenshot9 from '../assets/images/VRinterior/Screenshot_9.png'
import screenshot10 from '../assets/images/VRinterior/Screenshot_10.png'
import screenshot11 from '../assets/images/VRinterior/Screenshot_11.png'
import screenshot12 from '../assets/images/VRinterior/Screenshot_12.png'
import screenshot13 from '../assets/images/VRinterior/Screenshot_13.png'
import screenshot14 from '../assets/images/VRinterior/Screenshot_14.png'
import screenshot15 from '../assets/images/VRinterior/Screenshot_15.png'

function VRInteriorPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const screenshots = [
    screenshot1, screenshot2, screenshot3, screenshot4, screenshot5,
    screenshot6, screenshot7, screenshot8, screenshot9, screenshot10,
    screenshot11, screenshot12, screenshot13, screenshot14, screenshot15
  ]

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }
  return (
    <main className="vr-page">
      <section className="vr-header">
        <p className="vr-tag">Project</p>
        <h1 className="vr-title">VR for Interior Design</h1>
        <p className="vr-intro">
          Interactive VR application for exploring and customizing interior spaces using Unity and XR Interaction Toolkit.
        </p>
      </section>

      <section className="vr-overview-grid">
        <div className="vr-card">
          <div className="vr-section-label">PROJECT OVERVIEW</div>
          <p>
            Developed an interactive Virtual Reality application for interior design that enables users to explore,
            customize, and visualize interior spaces in an immersive 3D environment.
          </p>
          <p>
            The system allows users to modify room layouts, place furniture, change materials, and experience designs
            in real time before actual implementation.
          </p>
        </div>

        <div className="vr-card">
          <div className="vr-section-label">PROBLEM STATEMENT</div>
          <p>
            Traditional interior design workflows often face several challenges:
          </p>
          <ul className="vr-list">
            <li>Clients struggle to visualize designs from 2D drawings or static renders</li>
            <li>Design revisions before construction can be costly and inefficient</li>
            <li>Communication gaps may occur between designers and clients</li>
            <li>Testing multiple furniture layouts and materials is time-consuming</li>
          </ul>
          <p>
            This project addresses these issues through immersive VR-based interior visualization.
          </p>
        </div>
      </section>

      <section className="vr-features">
        <div className="vr-section-label">KEY FEATURES</div>
        <div className="vr-feature-grid">
          <article>
            <h3>Interactive Interior Customization</h3>
            <ul className="vr-list">
              <li>Change wall colors and materials</li>
              <li>Modify room layouts</li>
              <li>Place and reposition furniture interactively</li>
              <li>Drag-and-drop object interaction</li>
            </ul>
          </article>
          <article>
            <h3>Immersive VR Experience</h3>
            <ul className="vr-list">
              <li>360° virtual walkthrough</li>
              <li>Real-time interaction within virtual environments</li>
              <li>Object manipulation using VR controllers</li>
            </ul>
          </article>
          <article>
            <h3>Design Visualization</h3>
            <ul className="vr-list">
              <li>Simulate interior designs before construction</li>
              <li>Explore multiple design concepts instantly</li>
              <li>Enhance client presentations through immersive experiences</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="vr-tech-tools">
        <div className="vr-tech-stack">
          <div className="vr-stack-card">
            <span>Development</span>
            <p>Unity · C#</p>
          </div>
          <div className="vr-stack-card">
            <span>XR Technologies</span>
            <p>XR Interaction Toolkit · VR Controllers · Ray Interactor</p>
          </div>
          <div className="vr-stack-card">
            <span>3D Tools</span>
            <p>Blender · 3D Environment Modeling</p>
          </div>
        </div>
        <div className="vr-tools-card">
          <h3>Tools</h3>
          <ul className="vr-list">
            <li>Unity Hub</li>
            <li>Git / GitHub</li>
            <li>Blender</li>
          </ul>
        </div>
      </section>

      <section className="vr-screenshots">
        <div className="vr-section-label">SCREENSHOTS</div>
        <div className="vr-screenshot-carousel">
          <button className="vr-carousel-btn" onClick={prevImage}>&lt;</button>
          <img src={screenshots[currentIndex]} alt={`VR interior screenshot ${currentIndex + 1}`} />
          <button className="vr-carousel-btn" onClick={nextImage}>&gt;</button>
        </div>
        <p className="vr-screenshot-counter">{currentIndex + 1} / {screenshots.length}</p>
      </section>

      <section className="vr-contributions">
        <div className="vr-section-label">MY CONTRIBUTIONS</div>
        <ul className="vr-list">
          <li>Developed VR environment and interaction system in Unity</li>
          <li>Implemented object grab and manipulation using XR Interaction Toolkit</li>
          <li>Built material and furniture customization functionality</li>
          <li>Designed scene flow and interactive user experience</li>
          <li>Tested usability and interaction performance in VR environments</li>
        </ul>
      </section>

      <section className="vr-challenges-grid">
        <div className="vr-card">
          <div className="vr-section-label">TECHNICAL CHALLENGES SOLVED</div>
          <ul className="vr-list">
            <li>Tuned XR interaction and physics settings for object grabbing</li>
            <li>Solved object interaction issues within VR scenes</li>
            <li>Optimized scene performance for smoother VR experiences</li>
            <li>Designed intuitive interactions while reducing motion discomfort</li>
          </ul>
        </div>
        <div className="vr-card">
          <div className="vr-section-label">IMPACT / OUTCOME</div>
          <ul className="vr-list">
            <li>Delivered a functional VR interior design prototype</li>
            <li>Improved design visualization before real-world implementation</li>
            <li>Reduced potential design errors during planning stages</li>
            <li>Enhanced user experience through immersive interactive technology</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default VRInteriorPage
