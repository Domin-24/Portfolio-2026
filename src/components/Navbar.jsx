import '../css/Nevbar.css'
import icon from '../assets/icons/icon-nev.png'

function Navbar() {
  return (
    <div className="Navbar">
      <img className="icon-nev" src={icon} alt="Navbar Icon" />
      <nav>
        <ul>
          <li><a href="#About">About</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar