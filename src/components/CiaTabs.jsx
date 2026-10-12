import { useRef, useState } from 'react'

/** Pestañas accesibles (patrón WAI-ARIA Tabs): flechas, Inicio y Fin para navegar. */
export default function CiaTabs({ pilares }) {
  const [activa, setActiva] = useState(0)
  const tabs = useRef([])

  function onKeyDown(e) {
    const ultimo = pilares.length - 1
    const destino = {
      ArrowRight: activa === ultimo ? 0 : activa + 1,
      ArrowLeft: activa === 0 ? ultimo : activa - 1,
      Home: 0,
      End: ultimo,
    }[e.key]
    if (destino === undefined) return
    e.preventDefault()
    setActiva(destino)
    tabs.current[destino]?.focus()
  }

  return (
    <div className="cia">
      <div role="tablist" aria-label="Pilares de la tríada CIA" className="cia-tabs">
        {pilares.map((p, i) => (
          <button
            key={p.id}
            ref={(el) => { tabs.current[i] = el }}
            role="tab"
            type="button"
            id={`tab-${p.id}`}
            aria-selected={i === activa}
            aria-controls={`panel-${p.id}`}
            tabIndex={i === activa ? 0 : -1}
            onClick={() => setActiva(i)}
            onKeyDown={onKeyDown}
          >
            <span className="cia-letra" aria-hidden="true">{p.titulo[0]}</span> {p.titulo}
          </button>
        ))}
      </div>
      {pilares.map((p, i) => (
        <div
          key={p.id}
          role="tabpanel"
          id={`panel-${p.id}`}
          aria-labelledby={`tab-${p.id}`}
          hidden={i !== activa}
          className="cia-panel"
          tabIndex={0}
        >
          <p>{p.texto}</p>
          <ul>{p.puntos.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      ))}
    </div>
  )
}
