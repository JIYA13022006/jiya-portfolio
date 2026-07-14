import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import WindowChrome from './WindowChrome'
import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolio'

const accentMap = {
  violet: 'text-accent-violet bg-accent-violet/10',
  gold: 'text-accent-gold bg-accent-gold/10',
  mint: 'text-accent-mint bg-accent-mint/10',
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading index="03" title="Projects" comment="things I've built" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={p.tech.length > 4 ? 'md:col-span-2' : ''}
            >
              <WindowChrome
                label={p.fileLabel}
                className="h-full hover:shadow-glow transition-shadow duration-300"
              >
                <div className="p-6 sm:p-7">
                  <div
                    className={`w-full h-32 rounded-lg mb-5 flex flex-col items-center justify-center ${accentMap[p.accent]}`}
                  >
                    <span className="font-mono text-xs opacity-70">[ project preview ]</span>
                    <span className="mt-1 font-display text-base font-semibold text-ink dark:text-paper leading-tight">
                      {p.name}
                    </span>
                  </div>


                  <h3 className="font-display text-xl font-semibold text-ink dark:text-paper mb-2">
                    {p.name}
                  </h3>
                  <p className="text-sm text-ink/70 dark:text-paper/70 leading-relaxed mb-4">
                    {p.description}
                  </p>

                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-5">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="text-xs text-ink/60 dark:text-paper/60 flex items-center gap-1.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent-violet flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary flex-1 justify-center !py-2.5 text-xs"
                    >
                      <FiGithub size={14} /> GitHub
                    </a>
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary flex-1 justify-center !py-2.5 text-xs"
                    >
                      <FiExternalLink size={14} /> Live Demo
                    </a>
                  </div>
                </div>
              </WindowChrome>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
