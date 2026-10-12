// Verifica la integridad del JSON de la infografía: referencias cruzadas válidas.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const caso = JSON.parse(
  readFileSync(new URL('../src/data/caso-banco-chile.json', import.meta.url), 'utf8'),
)
const fuentes = new Set(Object.keys(caso.fuentes))
const vulnerabilidades = new Set(caso.vulnerabilidades.map((v) => v.id))

test('toda referencia a una fuente existe', () => {
  const refs = [...caso.cifras, ...caso.fases].flatMap((x) => x.fuentes ?? [])
  for (const id of refs) assert.ok(fuentes.has(id), `fuente inexistente: ${id}`)
})

test('las fases documentadas citan al menos una fuente', () => {
  for (const f of caso.fases.filter((x) => x.estado === 'documentado')) {
    assert.ok(f.fuentes?.length, `fase documentada sin fuente: ${f.id}`)
  }
})

test('cada fase usa un estado definido', () => {
  for (const f of caso.fases) assert.ok(f.estado in caso.estados, `estado desconocido: ${f.estado}`)
})

test('cada medida mitiga vulnerabilidades existentes y toda vulnerabilidad tiene medida', () => {
  const cubiertas = new Set()
  for (const m of caso.medidas) {
    for (const id of m.mitiga) {
      assert.ok(vulnerabilidades.has(id), `vulnerabilidad inexistente: ${id}`)
      cubiertas.add(id)
    }
  }
  assert.deepEqual([...vulnerabilidades].filter((v) => !cubiertas.has(v)), [])
})

test('la tríada CIA tiene sus tres pilares', () => {
  assert.deepEqual(caso.cia.map((p) => p.id), ['confidencialidad', 'integridad', 'disponibilidad'])
})

test('las fuentes son URLs https', () => {
  for (const f of Object.values(caso.fuentes)) assert.match(f.url, /^https:\/\//)
})
