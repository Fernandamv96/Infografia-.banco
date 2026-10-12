import caso from './data/caso-banco-chile.json'
import Header from './components/Header.jsx'
import SectionNav from './components/SectionNav.jsx'
import Section from './components/Section.jsx'
import Cifras from './components/Cifras.jsx'
import Timeline from './components/Timeline.jsx'
import CiaTabs from './components/CiaTabs.jsx'
import RiesgosYMedidas from './components/RiesgosYMedidas.jsx'
import Fuentes from './components/Fuentes.jsx'

const SECCIONES = [
  { id: 'cifras', label: 'Cifras' },
  { id: 'cronologia', label: 'Cronología' },
  { id: 'cia', label: 'Tríada CIA' },
  { id: 'medidas', label: 'Riesgos y medidas' },
  { id: 'lecciones', label: 'Lecciones' },
  { id: 'fuentes', label: 'Fuentes' },
]

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header meta={caso.meta} />
      <SectionNav secciones={SECCIONES} />

      <main id="contenido" tabIndex={-1}>
        <Section id="cifras" prompt="cat incidente.txt" titulo="El incidente en cifras">
          <Cifras cifras={caso.cifras} fuentes={caso.fuentes} />
        </Section>

        <Section id="cronologia" prompt="./timeline --verbose" titulo="¿Qué ocurrió?">
          <Timeline fases={caso.fases} estados={caso.estados} fuentes={caso.fuentes} />
        </Section>

        <Section id="cia" prompt="audit --cia" titulo="Impacto en la tríada CIA">
          <CiaTabs pilares={caso.cia} />
        </Section>

        <Section id="medidas" prompt="grep -i vulnerab *" titulo="Vulnerabilidades y medidas">
          <RiesgosYMedidas vulnerabilidades={caso.vulnerabilidades} medidas={caso.medidas} />
        </Section>

        <Section id="lecciones" prompt="echo $LECCIONES" titulo="Lecciones aprendidas">
          <ol className="lecciones">
            {caso.lecciones.map((l) => <li key={l}>{l}</li>)}
          </ol>
        </Section>

        <Section id="fuentes" prompt="cat fuentes.bib" titulo="Fuentes">
          <Fuentes fuentes={caso.fuentes} />
        </Section>
      </main>

      <footer className="footer">
        <p>Material educativo · Fundamentos de Seguridad de la Información · INACAP</p>
        <p>
          Hecho por <a href="https://fernandamv96.github.io">Fernanda (Fernandamv96)</a>
          {' · '}
          <a href="https://github.com/Fernandamv96/Infografia-.banco">código fuente</a>
        </p>
      </footer>
    </>
  )
}
