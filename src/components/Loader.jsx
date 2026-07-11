import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="font-mono text-accent-violet text-lg sm:text-xl flex items-center gap-1">
              <span>{'<Jiya'}</span>
              <span className="text-accent-gold">.</span>
              <span>{'Jain'}</span>
              <span className="text-accent-mint">{' />'}</span>
            </div>
            <div className="w-40 h-1 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-accent-violet"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1.1,
                  ease: 'easeInOut',
                }}
              />
            </div>
            <p className="font-mono text-[11px] text-paper/40 tracking-wide">
              compiling portfolio...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
