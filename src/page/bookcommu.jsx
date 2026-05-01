import React, { useState } from 'react'
import '../css/bookcommu.css'
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
import diagramImage from '../assets/images/BOOCCOMMU/WorkFlowDiagrams/1.ระบบยืนยันตัวเอง (auth).jpg'

function BookCommuPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

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

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)

  return (
    <main className="bookcommu-page">
      {/* Header Section */}
      <section className="bc-header">
        <p className="bc-tag">Project</p>
        <h1 className="bc-title">BOOKCOMMU</h1>
      </section>

      {/* Hero Section */}
      <section className="bc-hero">
        <div className="bc-hero-container">
          <img className="bc-hero-image" src={homepageImage} alt="BookCommu homepage" />
        </div>
      </section>

      {/* Overview & Problem Section */}
      <section className="bc-overview-grid">
        <div className="bc-info-card">
          <div className="bc-section-label">PROJECT OVERVIEW</div>
          <p>
            Developed a full-stack web platform for book lovers that combines social community features, 
            personalized book recommendations, and second-hand book marketplace in one ecosystem.
          </p>
          <p>
            The platform allows users to manage personal book collections, review books, create posts, 
            discuss with other readers, chat privately, and buy/sell used books.
          </p>
        </div>

        <div className="bc-info-card">
          <div className="bc-section-label">PROBLEM STATEMENT</div>
          <p>
            Existing book-related platforms often focus only on reading or book cataloging, but lack an integrated ecosystem for:
          </p>
          <ul className="bc-list">
            <li>Personal book management</li>
            <li>Reader community interaction</li>
            <li>Personalized recommendations</li>
            <li>Second-hand book exchange</li>
            <li>Social engagement among readers</li>
          </ul>
          <p>This project was built to solve these gaps through a unified community-driven platform.</p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bc-features-container">
        <div className="bc-section-label">KEY FEATURES</div>
        <div className="bc-features-grid">
          <article className="bc-feature-item">
            <h3>Community Features</h3>
            <ul className="bc-list">
              <li>User Authentication (Login/Register)</li>
              <li>User Profiles</li>
              <li>Discussion Posts & Comments</li>
              <li>Book Reviews & Ratings</li>
              <li>Private Chat Messaging</li>
            </ul>
          </article>
          <article className="bc-feature-item">
            <h3>Book Management</h3>
            <ul className="bc-list">
              <li>Personal Library Management</li>
              <li>Reading Lists</li>
              <li>Search and Filter System</li>
              <li>Reading Statistics Dashboard</li>
            </ul>
          </article>
          <article className="bc-feature-item">
            <h3>Recommendation System</h3>
            <ul className="bc-list">
              <li>Behavior-Based Book Recommendation</li>
              <li>Personalized suggestions based on:</li>
              <li className="sub-item">Search behavior</li>
              <li className="sub-item">View history</li>
              <li className="sub-item">User interests</li>
            </ul>
          </article>
          <article className="bc-feature-item">
            <h3>Marketplace</h3>
            <ul className="bc-list">
              <li>Second-hand Book Listings</li>
              <li>Buyer/Seller Chat</li>
              <li>Order Management</li>
              <li>Payment Verification Workflow</li>
              <li>Seller Review System</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Tech Stack & Tools */}
      <section className="bc-tech-section">
        <div className="bc-section-label">TECH STACK</div>
        <div className="bc-tech-grid">
          <div className="bc-stack-main">
            <div className="bc-stack-card">
              <div className="stack-content">
                <span>FRONTEND</span>
                <p>React • Vite • Tailwind</p>
              </div>
            </div>
            <div className="bc-stack-card">
              <div className="stack-content">
                <span>BACKEND</span>
                <p>Node.js • Express</p>
              </div>
            </div>
            <div className="bc-stack-card">
              <div className="stack-content">
                <span>DATABASE</span>
                <p>MySQL</p>
              </div>
            </div>
          </div>
          
          <div className="bc-tools-card">
            <h3>TOOLS</h3>
            <ul className="bc-list">
              <li>Docker</li>
              <li>Git / GitHub</li>
              <li>Postman</li>
              <li>MySQL Workbench</li>
              <li>Mermaid Diagram</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="bc-screenshots">
        <div className="bc-section-label">SCREENSHOT</div>
        <div className="bc-screenshot-carousel">
          <button className="bc-carousel-btn" onClick={prevImage}>&lt;</button>
          <img
            src={screenshots[currentIndex]}
            alt={`BookCommu screenshot ${currentIndex + 1}`}
            className="main-shot"
          />
          <button className="bc-carousel-btn" onClick={nextImage}>&gt;</button>
        </div>
        <div className="bc-screenshot-counter">
          {currentIndex + 1} / {screenshots.length}
        </div>
      </section>

      {/* Diagram Section */}
      <section className="bc-diagram">
        <div className="bc-section-label">DIAGRAM</div>
        <div className="bc-diagram-box">
          <img
            className="bc-diagram-image"
            src={diagramImage}
            alt="BookCommu workflow diagram"
          />
        </div>
      </section>
    </main>
  )
}

export default BookCommuPage;