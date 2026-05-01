import { FaGithub, FaFacebookF } from 'react-icons/fa'
import { SiLine } from 'react-icons/si'

import '../css/Contact.css'

function Contact() {
  return (
    <section id="Contact" className="contact-section">
      <h1 className="contact-title">GET IN TOUCH</h1>
      <div className="contact-info">
         <a 
        href="mailto:rapeepattabtong24@email.com" 
        className="contact-email"
      >
        rapeepattabtong24@email.com
      </a>

      <a href="tel:0829611988" className="contact-phone">
        082-961-1988
      </a>

      </div>
  

      <div className="contact-social">
        <p className="social-label">Social:</p>

        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.facebook.com/rapeepat.tabtong" target="_blank" rel="noreferrer">
            <FaFacebookF /> Facebook
          </a>
          <a href="https://line.me/ti/p/%40ford_47" target="_blank" rel="noreferrer">
            <SiLine /> LINE ID: ford_47
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact