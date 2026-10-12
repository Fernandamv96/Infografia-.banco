import { useState } from 'react'

/** Selecciona una vulnerabilidad para resaltar las medidas que la mitigan. */
export default function RiesgosYMedidas({ vulnerabilidades, medidas }) {
  const [seleccion, setSeleccion] = useState(null)
  const vulnSel = vulnerabilidades.find((v) => v.id === seleccion)
  const relevantes = medidas.filter((m) => !seleccion || m.mitiga.includes(seleccion))

  return (
    <div className="riesgos">
      <div>
        <h3>Vulnerabilidades</h3>
        <p className="ayuda">Elige una para ver qué medidas la mitigan.</p>
        <ul className="grid">
          {vulnerabilidades.map((v) => (
            <li key={v.id}>
              <button
                type="button"
                className="card card-btn"
                aria-pressed={seleccion === v.id}
                onClick={() => setSeleccion(seleccion === v.id ? null : v.id)}
              >
                <span className="etiqueta">{v.etiqueta}</span>
                <strong>{v.titulo}</strong>
                <span>{v.texto}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Medidas que se pudieron aplicar</h3>
        <p className="ayuda" aria-live="polite">
          {vulnSel
            ? `${relevantes.length} medida(s) mitigan «${vulnSel.titulo}». `
            : `Mostrando las ${medidas.length} medidas. `}
          {vulnSel && (
            <button type="button" className="link-btn" onClick={() => setSeleccion(null)}>
              Ver todas
            </button>
          )}
        </p>
        <ul className="grid">
          {relevantes.map((m) => (
            <li key={m.id} className="card card-medida">
              <strong>{m.titulo}</strong>
              <span>{m.texto}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
