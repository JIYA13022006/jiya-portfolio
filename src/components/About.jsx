import { motion } from 'framer-motion'
import {
  FiAward,
  FiLayers,
  FiCoffee,
  FiGitBranch,
  FiTarget,
} from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { about } from '../data/portfolio'

const iconMap = {
  graduation: FiAward,
  layers: FiLayers,
  coffee: FiCoffee,
  'git-branch': FiGitBranch,
  puzzle: FiTarget,
}

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading index="01" title="About Me" comment="who I am" />
        </motion.div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-ink/75 dark:text-paper/75 text-base sm:text-lg leading-relaxed"
          >
            {about.paragraph}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {about.highlights.map((h) => {
              const Icon = iconMap[h.icon]
              return (
                <div
                  key={h.label}
                  className="glass-card px-4 py-4 flex items-center gap-3"
                >
                  <span className="w-9 h-9 rounded-lg bg-accent-violet/10 text-accent-violet flex items-center justify-center flex-shrink-0">
                    <Icon size={16} />
                  </span>
                  <span className="text-sm font-medium text-ink dark:text-paper">
                    {h.label}
                  </span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
