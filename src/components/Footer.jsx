import { FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi'
import { HiCode } from 'react-icons/hi'
import { Link } from 'react-scroll'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="hero" smooth={true} duration={600} className="footer-logo">
              <HiCode className="logo-icon" />
              <span className="logo-text">issa<span className="logo-accent">.portfolio</span></span>
            </Link>
            <p className="footer-desc">
              Concevoir et développer des expériences web exceptionnelles, 
              accessibles et performantes pour le monde de demain.
            </p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Navigation</h4>
            <div className="footer-links">
              <Link to="hero" smooth={true} duration={600} className="footer-link">Accueil</Link>
              <Link to="about" smooth={true} duration={600} className="footer-link">À propos</Link>
              <Link to="projects" smooth={true} duration={600} className="footer-link">Projets</Link>
              <Link to="contact" smooth={true} duration={600} className="footer-link">Contact</Link>
            </div>
          </div>

          <div className="footer-socials-group">
            <h4 className="footer-title">Réseaux</h4>
            <div className="footer-socials">
              <a href="https://github.com/pourty01" target="_blank" rel="noreferrer" className="footer-social-link">
                <FiGithub /> Github
              </a>
              <a href="https://www.instagram.com/__issa_joop__?igsh=MTVpMXgxcWl6Y3Qwcg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="footer-social-link">
                <FiInstagram /> Instagram
              </a>
              <a href="https://x.com/issa_joop?s=21" target="_blank" rel="noreferrer" className="footer-social-link">
                <FiTwitter /> Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Pape Issa Diop. Tous droits réservés.</p>
          <p className="footer-credit">Fait avec 💜 et React</p>
        </div>
      </div>
    </footer>
  )
}
