import { useState } from 'react'
import SourceRefs from './SourceRefs.jsx'

export default function Timeline({ fases, estados, fuentes }) {
  const [abierta, setAbierta] = useState(fases.find((f) => f.estado === 'documentado')?.id)

  return (
    <>
      <ul className="leyenda" aria-label="Leyenda de estados">
        {Object.entries(estados).map(([id, label]) => (
          <li key={id}><span className={`badge badge-${id}`}>{label}</span></li>
        ))}
      </ul>
      <ol className="timeline">
        {fases.map((fase, i) => {
          const expandida = abierta === fase.id
          const panelId = `fase-${fase.id}`
          return (
            <li key={fase.id} className={`fase${expandida ? ' is-open' : ''}`}>
              <h3>
                <button
                  type="button"
                  className="fase-toggle"
                  aria-expanded={expandida}
                  aria-controls={panelId}
                  onClick={() => setAbierta(expandida ? null : fase.id)}
                >
                  <span className="fase-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <span className="fase-titulo">{fase.titulo}</span>
                  <span className={`badge badge-${fase.estado}`}>{estados[fase.estado]}</span>
                </button>
              </h3>
              <div id={panelId} className="fase-panel" hidden={!expandida}>
                <p>
                  {fase.texto} <SourceRefs ids={fase.fuentes} fuentes={fuentes} />
                </p>
              </div>
            </li>
          )
        })}
      </ol>
    </>
  )
}
