import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiUser, FiMapPin, FiMail, FiDownload } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi'
import './About.css'

const facts = [
  { icon: <FiUser />, label: 'Statut', value: 'Développeur Full Stack' },
  { icon: <FiMapPin />, label: 'Localisation', value: 'Sénégal / Remote' },
  { icon: <FiMail />, label: 'Email', value: 'dioo.issa22@gmail.com' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="orb orb-purple" style={{ bottom: '-200px', left: '-200px' }} />
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          À propos de moi
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          // Mon histoire en quelques lignes
        </motion.p>

        <div className="about-grid">
          {/* Avatar column */}
          <motion.div
            className="about-avatar-col"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="avatar-wrapper">
              <div className="avatar-ring avatar-ring-1" />
              <div className="avatar-ring avatar-ring-2" />
              <div className="avatar-image">
                <span className="avatar-emoji">👨‍💻</span>
              </div>
              <div className="avatar-badge">
                <HiOutlineSparkles />
                <span>Disponible</span>
              </div>
            </div>

            {/* Fact pills */}
            <div className="about-facts">
              {facts.map((f) => (
                <div className="fact-item" key={f.label}>
                  <span className="fact-icon">{f.icon}</span>
                  <div>
                    <span className="fact-label">{f.label}</span>
                    <span className="fact-value">{f.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            className="about-text-col"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className="about-tag tag">
              <span>{'<'}</span> Mon histoire <span>{'>'}</span>
            </div>

            <h3 className="about-heading">
              Développeur passionné par la création
              <span className="about-heading-accent"> d'expériences</span>
            </h3>

            <p className="about-text">
              Depuis mes premiers pas en programmation, j'ai toujours été fasciné par
              la capacité du code à donner vie à des idées. Aujourd'hui, je combine
              maîtrise technique et sens esthétique pour créer des applications web
              qui sortent de l'ordinaire.
            </p>

            <p className="about-text">
              Mon approche : écouter, concevoir, coder et livrer. Chaque projet est
              une opportunité de repousser mes limites et d'apporter une vraie
              valeur ajoutée. Que ce soit une landing page percutante, une app
              full-stack ou une API robuste — je m'y implique à 100%.
            </p>

            <blockquote className="about-quote">
              "Le bon code, c'est du code qu'on comprend 6 mois plus tard."
            </blockquote>

            <div className="about-actions">
              <a href="/MyCv.pdf" download className="btn btn-primary">
                <FiDownload /> Télécharger mon CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
