import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulation d'envoi
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(null), 3000)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="orb orb-cyan" style={{ bottom: '10%', right: '-100px' }} />
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Parlons de votre projet
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          // N'hésitez pas à me contacter
        </motion.p>

        <div className="contact-wrapper">
          {/* Info Side */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="contact-heading">Créons quelque chose de <span>remarquable</span> ensemble.</h3>
            <p className="contact-desc">
              Je suis actuellement à la recherche de nouvelles opportunités.
              Que vous ayez une question, un projet en tête ou que vous souhaitiez 
              simplement dire bonjour, je ferai de mon mieux pour vous répondre !
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="detail-icon"><FiMail /></div>
                <div>
                  <span className="detail-label">Email</span>
                  <a href="mailto:dioo.issa22@gmail.com" className="detail-value">dioo.issa22@gmail.com</a>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="detail-icon"><FiPhone /></div>
                <div>
                  <span className="detail-label">Téléphone</span>
                  <span className="detail-value">+221 78 526 45 71</span>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="detail-icon"><FiMapPin /></div>
                <div>
                  <span className="detail-label">Localisation</span>
                  <span className="detail-value">Sénégal, Dakar (Remote OK)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            className="contact-form-container card"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Votre message ici..."
                  rows="5"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${status === 'sending' ? 'sending' : ''} ${status === 'success' ? 'success' : ''}`}
                disabled={status !== null}
              >
                {status === 'sending' ? 'Envoi en cours...' : status === 'success' ? 'Message envoyé !' : (
                  <>Envoyer le message <FiSend /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
