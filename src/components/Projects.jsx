import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'

import esanteImg from '../assets/projects/esante.jpg'
import avisClientImg from '../assets/projects/avis_client.jpg'
import automatisationImg from '../assets/projects/automatisation.jpg'
import portfolioPhotoImg from '../assets/projects/portfolio_photo.jpg'
import stockImg from '../assets/projects/stock.jpg'

import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'eSante - Gestion de Dossiers Patients',
    description: 'Plateforme complète de gestion de dossiers médicaux, optimisant le suivi et l\'administration pour les professionnels de santé.',
    image: esanteImg,
    tags: ['Projet Actuel', 'Santé', 'Full Stack'],
    demo: '',
    featured: true,
  },
  {
    id: 2,
    title: 'Avis-Client (SaaS IA)',
    description: 'Solution SaaS basée sur Python Django intégrant l\'Intelligence Artificielle pour l\'analyse de données et la prise de décisions stratégiques.',
    image: avisClientImg,
    tags: ['Python', 'Django', 'IA', 'Data Analytics'],
    demo: '',
    featured: true,
  },
  {
    id: 3,
    title: 'Recherches en Automatisation',
    description: 'Travaux de recherche et développement de scripts d\'automatisation visant à simplifier, optimiser et accélérer l\'exécution des tâches répétitives.',
    image: automatisationImg,
    tags: ['Scripts', 'Productivité', 'R&D'],
    demo: '',
    featured: false,
  },
  {
    id: 4,
    title: 'Portfolio Photographe',
    description: 'Site vitrine moderne élégant conçu pour mettre en valeur les galeries et prestations d\'un photographe professionnel.',
    image: portfolioPhotoImg,
    tags: ['React', 'Framer Motion', 'UI/UX'],
    demo: '',
    featured: false,
  },
  {
    id: 5,
    title: 'Logiciel de Gestion de Stock (En préparation)',
    description: 'Application métier performante destinée à la gestion d\'inventaire et l\'optimisation logistique de grands entrepôts.',
    image: stockImg,
    tags: ['Logistique', 'Système', 'Base de données'],
    demo: '',
    featured: false,
  }
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="orb orb-purple" style={{ top: '30%', left: '-200px' }} />
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Mes Réalisations
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          // Une sélection de mes meilleurs projets
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + idx * 0.1 }}
            >
              <div className="project-image-wrapper">
                <div className="project-overlay" />
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-links-overlay">

                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="project-link-icon">
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-content">
                <div className="project-type">
                  <FiFolder className="type-icon" />
                  {project.featured ? 'Projet Phare' : 'Projet Personnel'}
                </div>
                <h3 className="project-title">
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
