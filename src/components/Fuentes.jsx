export default function Fuentes({ fuentes }) {
  return (
    <ol className="fuentes">
      {Object.entries(fuentes).map(([id, f]) => (
        <li key={id} id={`fuente-${id}`}>
          <a href={f.url} target="_blank" rel="noopener noreferrer">{f.titulo}</a>
        </li>
      ))}
    </ol>
  )
}
