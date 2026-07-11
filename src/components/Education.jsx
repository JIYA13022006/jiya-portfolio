import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import WindowChrome from './WindowChrome'
import { education, coursework } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 bg-ink/[0.02] dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading index="04" title="Education" comment="academic background" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-7">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <WindowChrome label="education.json">
              <div className="p-6 sm:p-8 flex gap-4">
                <span className="w-12 h-12 rounded-xl bg-accent-violet/10 text-accent-violet flex items-center justify-center flex-shrink-0">
                  <FiBookOpen size={20} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink dark:text-paper">
                    {education.degree}
                  </h3>
                  <p className="text-accent-violet font-medium mt-1">
                    {education.branch}
                  </p>
                  <p className="text-ink/70 dark:text-paper/70 text-sm mt-3">
                    {education.university}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="tech-badge">{education.status}</span>
                    <span className="tech-badge">{education.years}</span>
                  </div>
                </div>
              </div>
            </WindowChrome>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <WindowChrome label="coursework.json">
              <div className="p-6 sm:p-8">
                <p className="font-mono text-xs text-ink/40 dark:text-paper/40 mb-4">
                  relevant coursework
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {coursework.map((c) => (
                    <span key={c} className="tech-badge !text-xs">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </WindowChrome>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
