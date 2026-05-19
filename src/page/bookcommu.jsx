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
      </section>

      {/* Hero */}
      <section className="bc-hero">
        <div className="bc-hero-container">
          <img className="bc-hero-image" src={homepageImage} />
        </div>
      </section>

      {/* Screenshot */}
      <section className="bc-screenshots">
        <div className="bc-section-label">SCREENSHOT</div>
        <div className="bc-screenshot-carousel">
          <button onClick={prevImage}>&lt;</button>

          <img
            src={screenshots[currentIndex]}
            className="main-shot"
          />

          <button onClick={nextImage}>&gt;</button>
        </div>
      </section>

      {/* Diagram */}
      <section className="bc-diagram">
        <div className="bc-section-label">DIAGRAM</div>
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
    </main>
  )
}

export default BookCommuPage