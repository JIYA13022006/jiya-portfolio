import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 dark:border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="font-mono text-xs text-ink/50 dark:text-paper/50">
          © {year} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
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
              className="w-8 h-8 rounded-full border border-ink/10 dark:border-white/15 flex items-center justify-center text-ink/60 dark:text-paper/60 hover:text-accent-violet hover:border-accent-violet transition-colors"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
