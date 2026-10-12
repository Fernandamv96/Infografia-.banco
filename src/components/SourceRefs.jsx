/** Referencias numeradas a las fuentes del JSON, enlazadas a la sección "Fuentes". */
export default function SourceRefs({ ids = [], fuentes }) {
  if (!ids.length) return null
  const orden = Object.keys(fuentes)
  return (
    <span className="refs">
      {ids.map((id) => {
        const n = orden.indexOf(id) + 1
        return (
          <a key={id} href={`#fuente-${id}`} aria-label={`Fuente ${n}: ${fuentes[id].titulo}`}>
            [{n}]
          </a>
        )
      })}
    </span>
  )
}
