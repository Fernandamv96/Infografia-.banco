export default function Section({ id, prompt, titulo, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-titulo`}>
      <p className="prompt" aria-hidden="true">&gt; {prompt}</p>
      <h2 id={`${id}-titulo`}>{titulo}</h2>
      {children}
    </section>
  )
}
