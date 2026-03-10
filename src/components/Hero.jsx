import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi'
import { HiOutlineCode, HiOutlineLightningBolt } from 'react-icons/hi'
import { Link } from 'react-scroll'
import './Hero.css'

const roles = ['Développeur Full Stack','Database Management','React & Node.js Dev', 'UI/UX Enthusiast', 'Problem Solver']

function TypingText({ strings }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const timeout = useRef(null)

  useEffect(() => {
    const current = strings[index]
    if (!deleting && displayed.length < current.length) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
    } else if (!deleting && displayed.length === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % strings.length)
    }
    return () => clearTimeout(timeout.current)
  }, [displayed, deleting, index, strings])

  return (
    <span className="typing-text">
      {displayed}
      <span className="cursor">|</span>
    </span>
  )
}

const particleCount = 60
const particles = Array.from({ length: particleCount }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 20 + 10,
  delay: Math.random() * 10,
}))

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Animated particles */}
      <div className="particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Orbs */}
      <div className="orb orb-purple hero-orb-1" />
      <div className="orb orb-cyan hero-orb-2" />

      {/* Grid */}
      <div className="hero-grid" />

      <div className="container hero-content">
        {/* Badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <HiOutlineLightningBolt className="badge-icon" />
          <span>Disponible pour de nouveaux projets</span>
          <span className="badge-dot" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Bonjour, je suis
          <br />
          <span className="hero-name">Pape Issa Diop</span>
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <HiOutlineCode className="sub-icon" />
          <TypingText strings={roles} />
        </motion.div>

        {/* Description */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Je crée des expériences web <strong>uniques et performantes</strong> qui mêlent
          design soigné et code propre. Passionné par les nouvelles technologies et
          l'innovation digitale.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Link to="projects" smooth={true} duration={700} offset={-80}>
            <button className="btn btn-primary">Voir mes projets</button>
          </Link>
          <Link to="contact" smooth={true} duration={700} offset={-80}>
            <button className="btn btn-outline">Me contacter</button>
          </Link>
        </motion.div>

        {/* Socials */}
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a href="https://github.com/pourty01" target="_blank" rel="noreferrer" className="social-link">
            <FiGithub />
          </a>
          <a href="https://www.instagram.com/__issa_joop__?igsh=MTVpMXgxcWl6Y3Qwcg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="social-link">
            <FiInstagram />
          </a>
          <a href="https://x.com/issa_joop?s=21" target="_blank" rel="noreferrer" className="social-link">
            <FiTwitter />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          {[
            { value: '3+', label: 'Années d\'exp.' },
            { value: '20+', label: 'Projets livrés' },
            { value: '100%', label: 'Satisfaction client' },
          ].map((stat) => (
            <div key={stat.label} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <Link to="about" smooth={true} duration={600} offset={-80}>
          <FiArrowDown className="scroll-arrow" />
        </Link>
      </motion.div>
    </section>
  )
}
