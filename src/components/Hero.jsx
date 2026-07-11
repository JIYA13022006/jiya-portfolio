import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi'
import WindowChrome from './WindowChrome'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { profile } from '../data/portfolio'

export default function Hero() {
  const typed = useTypingEffect(profile.roles)

  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 sm:pt-32 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-32 -left-24 w-96 h-96 rounded-full bg-accent-violet/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent-mint/10 blur-[110px]" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="eyebrow mb-4">// welcome to my portfolio</p>

          <WindowChrome label="hero.jsx">
            <div className="p-6 sm:p-8">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] text-ink dark:text-paper">
                Hi, I'm{' '}
                <span className="text-accent-violet">{profile.name}</span>
              </h1>

              <div className="mt-4 h-8 font-mono text-base sm:text-lg text-accent-mint">
                <span>{typed}</span>
                <span className="inline-block w-[2px] h-5 align-middle bg-accent-mint ml-1 animate-blink" />
              </div>

              <p className="mt-6 text-ink/70 dark:text-paper/70 text-base sm:text-lg leading-relaxed max-w-xl">
                {profile.intro}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={profile.resumeUrl}
                  download
                  className="btn-primary"
                >
                  <FiDownload size={16} /> Download Resume
                </a>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="btn-secondary"
                >
                  Contact Me <FiArrowRight size={16} />
                </button>
              </div>

              <div className="mt-8 flex items-center gap-4">
                {[
                  { icon: FiGithub, href: profile.github, label: 'GitHub' },
                  { icon: FiLinkedin, href: profile.linkedin, label: 'LinkedIn' },
                  { icon: FiMail, href: `mailto:${profile.email}`, label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-ink/10 dark:border-white/15 flex items-center justify-center text-ink/70 dark:text-paper/70 hover:text-accent-violet hover:border-accent-violet hover:-translate-y-0.5 transition-all"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </WindowChrome>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-violet/30 via-accent-gold/20 to-accent-mint/30 blur-2xl" />
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-[2rem] glass-card flex items-center justify-center overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-violet/20 to-accent-mint/10">
                <span className="font-display text-6xl sm:text-7xl font-semibold text-accent-violet">
                  JJ
                </span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 window-chrome px-4 py-2">
              <span className="font-mono text-xs text-accent-mint">
                status: open_to_work
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
