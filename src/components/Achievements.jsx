import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { achievements } from '../data/portfolio'

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading index="05" title="Achievements" comment="milestones" />
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <FiCheckCircle size={22} className="text-accent-mint mb-4" />
              <h3 className="font-display font-semibold text-ink dark:text-paper mb-2">
                {a.title}
              </h3>
              <p className="text-sm text-ink/65 dark:text-paper/65 leading-relaxed">
                {a.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
