import React, { useState } from 'react'
import '../css/bookcommu.css'

// screenshots
import homepageImage from '../assets/images/BOOCCOMMU/HomePage.png'
import postListImage from '../assets/images/BOOCCOMMU/postList.png'
import chatRoomImage from '../assets/images/BOOCCOMMU/ห้องแชท.png'
import profileImage from '../assets/images/BOOCCOMMU/โปรไฟล์.png'
import addBookImage from '../assets/images/BOOCCOMMU/addBook.png'
import loginImage from '../assets/images/BOOCCOMMU/login.png'
import registerImage from '../assets/images/BOOCCOMMU/redister.png'
import reviewImage from '../assets/images/BOOCCOMMU/review_page.png'
import bookListImage from '../assets/images/BOOCCOMMU/รายการหนังสือ.png'
import chatListImage from '../assets/images/BOOCCOMMU/แชทลิส.png'

import { diagrams } from '../data/images/diagrams'

const diagramLabels = [
  'Add Book Workflow',
  'Authentication System',
  'Buy Book Workflow',
  'Chat System Workflow',
  'Payment Verification',
  'Post System Workflow',
  'Recommendation System',
  'Review System Workflow',
  'Sell Book Workflow'
]

function BookCommuPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentDiagramIndex, setCurrentDiagramIndex] = useState(0)

  const screenshots = [
    homepageImage,
    postListImage,
    chatRoomImage,
    profileImage,
    addBookImage,
    loginImage,
    registerImage,
    reviewImage,
    bookListImage,
    chatListImage
  ]

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)

  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)

  const nextDiagram = () =>
    setCurrentDiagramIndex((prev) => (prev + 1) % diagrams.length)

  const prevDiagram = () =>
    setCurrentDiagramIndex((prev) => (prev - 1 + diagrams.length) % diagrams.length)

  return (
    <main className="bookcommu-page">
      {/* Header */}
      <section className="bc-header">
        <p className="bc-tag">Project</p>
        <h1 className="bc-title">BOOKCOMMU</h1>
        <p className="bc-intro">
          Community platform for book lovers featuring book management, reviews, marketplace, chat system, and AI-powered book recommendations.
        </p>
      </section>

      {/* Overview */}
      <section className="bc-overview-grid">
        <div className="bc-card">
          <div className="bc-section-label">PROJECT OVERVIEW</div>
          <p>
            BookCommu is a comprehensive web platform designed for book enthusiasts to discover, share, and connect through their love of reading.
          </p>
          <p>
            The platform integrates community features, a second-hand book marketplace, real-time chat, personalized recommendations, and user engagement through reviews and ratings.
          </p>
        </div>

        <div className="bc-card">
          <div className="bc-section-label">PROBLEM STATEMENT</div>
          <p>
            Book lovers face several challenges in the reading community:
          </p>
          <ul className="bc-list">
            <li>Limited platforms combining book discovery, community, and marketplace features</li>
            <li>Difficulty finding personalized book recommendations</li>
            <li>Inefficient second-hand book trading processes</li>
            <li>Lack of real-time communication within book communities</li>
          </ul>
        </div>
      </section>

      {/* Features */}
      <section className="bc-features">
        <div className="bc-section-label">KEY FEATURES</div>
        <div className="bc-features-grid">
          <article>
            <h3>Book Management & Reviews</h3>
            <ul className="bc-list">
              <li>Add and organize personal book collections</li>
              <li>Share detailed book reviews and ratings</li>
              <li>Discover community recommendations</li>
              <li>Track reading progress and history</li>
            </ul>
          </article>
          <article>
            <h3>Community & Social</h3>
            <ul className="bc-list">
              <li>Real-time chat system for discussions</li>
              <li>Post creation and community engagement</li>
              <li>User profiles with follower system</li>
              <li>Community-driven content sharing</li>
            </ul>
          </article>
          <article>
            <h3>Second-Hand Marketplace</h3>
            <ul className="bc-list">
              <li>Buy and sell used books efficiently</li>
              <li>Secure payment processing</li>
              <li>Order tracking and fulfillment</li>
              <li>User transaction history</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bc-tech-grid">
        <div className="bc-stack-main">
          <div className="bc-stack-card">
            <span>Frontend</span>
            <p>React · Responsive Design</p>
          </div>
          <div className="bc-stack-card">
            <span>Backend</span>
            <p>Node.js · Express.js</p>
          </div>
          <div className="bc-stack-card">
            <span>Database</span>
            <p>MySQL · Data Modeling</p>
          </div>
        </div>

        <div className="bc-tools-card">
          <h3>Tools & Technologies</h3>
          <ul className="bc-list">
            <li>Docker (containerization)</li>
            <li>Git / GitHub (version control)</li>
            <li>Postman (API testing)</li>
            <li>MySQL Workbench (database management)</li>
          </ul>
        </div>
      </section>

      {/* Hero */}
      <section className="bc-hero">
        <div className="bc-hero-container">
          <img className="bc-hero-image" src={homepageImage} alt="BookCommu Homepage" />
        </div>
      </section>

      {/* Screenshot */}
      <section className="bc-screenshots">
        <div className="bc-section-label">SCREENSHOTS</div>
        <div className="bc-screenshot-carousel">
          <button onClick={prevImage}>&lt;</button>
          <img
            src={screenshots[currentIndex]}
            className="main-shot"
            alt={`Screenshot ${currentIndex + 1}`}
          />
          <button onClick={nextImage}>&gt;</button>
        </div>
        <p className="bc-screenshot-counter">{currentIndex + 1} / {screenshots.length}</p>
      </section>

      {/* Diagram */}
      <section className="bc-diagram">
        <div className="bc-section-label">SYSTEM DIAGRAMS</div>
        <div className="bc-diagram-carousel">
          <button onClick={prevDiagram}>&lt;</button>
          <div className="bc-diagram-box">
            <img
              className="bc-diagram-image"
              src={diagrams[currentDiagramIndex]}
              alt={diagramLabels[currentDiagramIndex]}
            />
            <p className="diagram-label">{diagramLabels[currentDiagramIndex]}</p>
          </div>
          <button onClick={nextDiagram}>&gt;</button>
        </div>
        <p className="diagram-counter">{currentDiagramIndex + 1} / {diagrams.length}</p>
      </section>

      {/* Contributions */}
      <section className="bc-contributions">
        <div className="bc-section-label">MY CONTRIBUTIONS</div>
        <ul className="bc-list">
          <li>Designed and implemented database architecture for book, user, and marketplace data</li>
          <li>Developed RESTful API endpoints for all core features using Express.js</li>
          <li>Built real-time chat functionality with socket-based communication</li>
          <li>Implemented user authentication and authorization system</li>
          <li>Created React components for responsive UI across devices</li>
          <li>Integrated payment processing for marketplace transactions</li>
          <li>Deployed application using Docker containerization</li>
        </ul>
      </section>

      {/* Challenges & Outcomes */}
      <section className="bc-challenges-grid">
        <div className="bc-card">
          <div className="bc-section-label">TECHNICAL CHALLENGES SOLVED</div>
          <ul className="bc-list">
            <li>Managed real-time chat scaling and performance optimization</li>
            <li>Implemented efficient database queries for recommendation system</li>
            <li>Secured payment transactions with proper validation and encryption</li>
            <li>Optimized image loading and caching for marketplace</li>
          </ul>
        </div>
        <div className="bc-card">
          <div className="bc-section-label">IMPACT / OUTCOME</div>
          <ul className="bc-list">
            <li>Created a functional full-stack application serving book community needs</li>
            <li>Facilitated book discovery and community building</li>
            <li>Enabled peer-to-peer second-hand book transactions</li>
            <li>Demonstrated full-stack development capabilities</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default BookCommuPage