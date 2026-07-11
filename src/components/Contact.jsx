import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiSend, FiCheck } from 'react-icons/fi'
import WindowChrome from './WindowChrome'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolio'

const initialForm = { name: '', email: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!form.message.trim()) {
    errors.message = 'Message is required.'
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      // No backend is wired up — this mailto fallback opens the user's
      // mail client pre-filled with the message so it still reaches Jiya.
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setSubmitted(true)
      setForm(initialForm)
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-ink/[0.02] dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading index="06" title="Get In Touch" comment="let's connect" />
        </motion.div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-ink/70 dark:text-paper/70 leading-relaxed">
              Have an internship, project, or opportunity in mind? My inbox is
              always open — I'll do my best to get back to you soon.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="glass-card p-4 flex items-center gap-3 hover:-translate-y-0.5 transition-transform"
            >
              <span className="w-10 h-10 rounded-lg bg-accent-violet/10 text-accent-violet flex items-center justify-center flex-shrink-0">
                <FiMail size={16} />
              </span>
              <span className="text-sm font-medium text-ink dark:text-paper break-all">
                {profile.email}
              </span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="glass-card p-4 flex items-center gap-3 hover:-translate-y-0.5 transition-transform"
            >
              <span className="w-10 h-10 rounded-lg bg-accent-violet/10 text-accent-violet flex items-center justify-center flex-shrink-0">
                <FiGithub size={16} />
              </span>
              <span className="text-sm font-medium text-ink dark:text-paper break-all">
                github.com/JIYA13022006
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <WindowChrome label="contact-form.jsx">
              <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8 space-y-5">
                <div>
                  <label className="block font-mono text-xs text-ink/50 dark:text-paper/50 mb-1.5">
                    name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-white/5 border text-sm text-ink dark:text-paper placeholder:text-ink/30 dark:placeholder:text-paper/30 focus:outline-none focus:ring-2 focus:ring-accent-violet/50 transition-all ${
                      errors.name ? 'border-accent-rose' : 'border-ink/10 dark:border-white/10'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-accent-rose text-xs mt-1.5">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block font-mono text-xs text-ink/50 dark:text-paper/50 mb-1.5">
                    email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-white/5 border text-sm text-ink dark:text-paper placeholder:text-ink/30 dark:placeholder:text-paper/30 focus:outline-none focus:ring-2 focus:ring-accent-violet/50 transition-all ${
                      errors.email ? 'border-accent-rose' : 'border-ink/10 dark:border-white/10'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-accent-rose text-xs mt-1.5">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block font-mono text-xs text-ink/50 dark:text-paper/50 mb-1.5">
                    message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell me about the opportunity or project..."
                    className={`w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-white/5 border text-sm text-ink dark:text-paper placeholder:text-ink/30 dark:placeholder:text-paper/30 focus:outline-none focus:ring-2 focus:ring-accent-violet/50 transition-all resize-none ${
                      errors.message ? 'border-accent-rose' : 'border-ink/10 dark:border-white/10'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-accent-rose text-xs mt-1.5">{errors.message}</p>
                  )}
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  {submitted ? (
                    <>
                      <FiCheck size={16} /> Message ready — check your mail app
                    </>
                  ) : (
                    <>
                      <FiSend size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </WindowChrome>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
