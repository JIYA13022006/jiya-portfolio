// Reusable "editor window" frame used for the hero terminal, project cards,
// and the contact form. This is the site's signature visual motif: every
// key content block is presented as though it lives inside a code editor.
export default function WindowChrome({ label, children, className = '' }) {
  return (
    <div className={`window-chrome ${className}`}>
      <div className="window-titlebar">
        <span className="window-dot bg-accent-rose/70" />
        <span className="window-dot bg-accent-gold/70" />
        <span className="window-dot bg-accent-mint/70" />
        {label && (
          <span className="ml-2 font-mono text-[11px] sm:text-xs text-ink/50 dark:text-paper/50 truncate">
            {label}
          </span>
        )}
      </div>
      <div>{children}</div>
    </div>
  )
}
