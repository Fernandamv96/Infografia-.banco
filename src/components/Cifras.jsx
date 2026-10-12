import SourceRefs from './SourceRefs.jsx'

export default function Cifras({ cifras, fuentes }) {
  return (
    <dl className="cifras">
      {cifras.map((c) => (
        <div key={c.etiqueta} className="cifra">
          <dt>{c.etiqueta}</dt>
          <dd>
            <span className="cifra-valor">{c.valor}</span>
            <SourceRefs ids={c.fuentes} fuentes={fuentes} />
          </dd>
        </div>
      ))}
    </dl>
  )
}
