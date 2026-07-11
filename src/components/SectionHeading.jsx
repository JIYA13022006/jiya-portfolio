// Small styled label used above each section heading, formatted like a
// code comment (e.g. "// 02 — Skills") to reinforce the developer motif.
export default function SectionHeading({ index, title, comment }) {
  return (
    <div className="mb-4">
      <p className="eyebrow">
        // {index} — {comment}
      </p>
      <h2 className="section-title mb-0">{title}</h2>
    </div>
  )
}
