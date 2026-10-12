export default function Header({ meta }) {
  return (
    <header className="hero">
      <p className="prompt" aria-hidden="true">&gt; whoami --caso</p>
      <h1>{meta.titulo}</h1>
      <p className="subtitulo">{meta.subtitulo}</p>
      <p className="resumen">{meta.resumen}</p>
      <button type="button" className="btn no-print" onClick={() => window.print()}>
        Imprimir / guardar como PDF
      </button>
    </header>
  )
}
