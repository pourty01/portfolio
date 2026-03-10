import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiReact, SiNodedotjs, SiJavascript, SiTypescript, SiPython,
  SiMongodb, SiPostgresql, SiDocker, SiGit, SiFigma,
  SiTailwindcss, SiNextdotjs, SiExpress, SiFirebase, SiLinux,
} from 'react-icons/si'
import { FiCode, FiServer, FiLayout, FiDatabase } from 'react-icons/fi'
import './Skills.css'

const skillCategories = [
  {
    icon: <FiLayout />,
    title: 'Frontend',
    color: '#7c3aed',
    skills: [
      { icon: <SiReact />, name: 'React', level: 90 },
      { icon: <SiNextdotjs />, name: 'Next.js', level: 80 },
      { icon: <SiJavascript />, name: 'JavaScript', level: 92 },
      { icon: <SiTypescript />, name: 'TypeScript', level: 75 },
      { icon: <SiTailwindcss />, name: 'Tailwind', level: 85 },
    ],
  },
  {
    icon: <FiServer />,
    title: 'Backend',
    color: '#06b6d4',
    skills: [
      { icon: <SiNodedotjs />, name: 'Node.js', level: 88 },
      { icon: <SiExpress />, name: 'Express', level: 85 },
      { icon: <SiPython />, name: 'Python', level: 78 },
      
    ],
  },
  {
    icon: <FiDatabase />,
    title: 'Data & Infra',
    color: '#f59e0b',
    skills: [
      { icon: <SiMongodb />, name: 'MongoDB', level: 82 },
      { icon: <SiPostgresql />, name: 'PostgreSQL', level: 75 },
      { icon: <SiDocker />, name: 'Docker', level: 70 },
      { icon: <SiLinux />, name: 'Linux', level: 65 },
    ],
  },
  {
    icon: <FiCode />,
    title: 'Outils',
    color: '#ec4899',
    skills: [
      { icon: <SiGit />, name: 'Git', level: 90 },
      { icon: <SiFigma />, name: 'Figma', level: 68 },
    ],
  },
]

function SkillBar({ skill, color, inView }) {
  return (
    <div className="skill-bar-item">
      <div className="skill-bar-header">
        <span style={{ color }} className="skill-icon">{skill.icon}</span>
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percent" style={{ color }}>{skill.level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}, rgba(255,255,255,0.3))` }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="orb orb-cyan" style={{ top: '20%', right: '-200px' }} />
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Stack & Compétences
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          // Technologies que je maîtrise
        </motion.p>

        <div className="skills-grid">
          {skillCategories.map((cat, cIdx) => (
            <motion.div
              key={cat.title}
              className="skill-category card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: cIdx * 0.15 }}
            >
              <div className="cat-header">
                <span style={{ color: cat.color, background: `${cat.color}20` }} className="cat-icon">
                  {cat.icon}
                </span>
                <h3 className="cat-title">{cat.title}</h3>
              </div>
              <div className="cat-skills">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} color={cat.color} inView={inView} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
