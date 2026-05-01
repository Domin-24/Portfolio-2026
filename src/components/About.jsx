import '../css/About.css'
import aboutImage from '../assets/images/Group 3.png'

function About() {
  return (
    <section id="About" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="About Me" />
        </div>
        
        <div className="about-content">
          <div className="about-header">
            <h3>Who I Am</h3>
            <h2>ABOUT ME</h2>
          </div>
          
          <p className="about-description">
           Fresh graduate in Information Technology (IT) with a solid foundation in Technical Support, System Monitoring, and Troubleshooting, complemented 
           by skills in Web Technologies, Game Development, and AI-assisted tools for problem-solving and productivity. Capable of contributing to both software development 
           and infrastructure support, with strong interest in IT Operations, Support Engineering, Web Development, and Interactive Application Development. Experienced in
            leveraging AI tools to support development workflows, research, and solution optimization. Adaptable, eager to learn new technologies, and committed to continuously 
            developing skills to contribute value to an organization.
          </p>
          
          <hr className="divider" />
          
          <div className="education-section">
            <h3>EDUCATION</h3>
            <p className="education-year">2022-2026</p>
            <p className="university">BURAPHA UNIVERSITY, CHON BURI, THAILAND</p>
            <p className="gpa">Cumulative GPA 3.03</p>
            <p className="major">Faculty of Informatics<br />Major Subject Information Technology for Digital Industry</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About