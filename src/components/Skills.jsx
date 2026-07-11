import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-ink/[0.02] dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading index="02" title="Skills" comment="what I work with" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="glass-card p-6 hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
            >
              <p className="font-mono text-[11px] text-ink/40 dark:text-paper/40 mb-1">
                {group.comment}
              </p>
              <h3 className="font-display text-lg font-semibold text-ink dark:text-paper mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span key={s.name} className="tech-badge">
                    {s.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
