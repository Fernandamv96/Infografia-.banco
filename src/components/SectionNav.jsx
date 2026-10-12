export default function SectionNav({ secciones }) {
  return (
    <nav className="section-nav no-print" aria-label="Secciones de la infografía">
      <ul>
        {secciones.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`}>{s.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
