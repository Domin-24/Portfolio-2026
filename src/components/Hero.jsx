import '../css/Hero.css'
import ava from '../assets/images/avatar-card.png'

function Hero() {
  return (
    <div className="Hero">
      <section className="hero-content">
        <div className='conten-1'>
          <p className='hello-text'>Hello!</p>
          <p className='text-name'><span className='im'>I'M  </span>RAPEEPAT TABTONG</p>
        </div>
        <div className='conten-2'>
          <p>Welcome to My Portfolio</p>
          <p>Here you’ll find a collection of my work, projects, and experiences.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className='ava-card'>
          <p className='text-card'>RAPEEPAT</p>
          <img  className="avatar" src={ava} alt="Avatar" />
        </div>
      </section>
    </div>
    
  )
}

export default Hero