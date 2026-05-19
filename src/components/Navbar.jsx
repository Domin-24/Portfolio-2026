import { useState } from 'react'
import '../css/Nevbar.css'
import icon from '../assets/icons/icon-nev.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="Navbar">
      <img className="icon-nev" src={icon} alt="Navbar Icon" />

      <button
        className={`nav-toggle ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li><a href="#About" onClick={closeMenu}>About</a></li>
          <li><a href="#Skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#Projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#Contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar