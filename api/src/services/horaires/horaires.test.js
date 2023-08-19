import {
  horaires,
  horaire,
  createHoraire,
  updateHoraire,
  deleteHoraire,
} from './horaires'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('horaires', () => {
  scenario('returns all horaires', async (scenario) => {
    const result = await horaires()

    expect(result.length).toEqual(Object.keys(scenario.horaire).length)
  })

  scenario('returns a single horaire', async (scenario) => {
    const result = await horaire({ id: scenario.horaire.one.id })

    expect(result).toEqual(scenario.horaire.one)
  })

  scenario('creates a horaire', async () => {
    const result = await createHoraire({
      input: {
        jourDeLaSemaine: 'String',
        openingAM: '2023-08-19T17:10:37.318Z',
        closingAM: '2023-08-19T17:10:37.318Z',
        openingPM: '2023-08-19T17:10:37.318Z',
        closingPM: '2023-08-19T17:10:37.318Z',
      },
    })

    expect(result.jourDeLaSemaine).toEqual('String')
    expect(result.openingAM).toEqual(new Date('2023-08-19T17:10:37.318Z'))
    expect(result.closingAM).toEqual(new Date('2023-08-19T17:10:37.318Z'))
    expect(result.openingPM).toEqual(new Date('2023-08-19T17:10:37.318Z'))
    expect(result.closingPM).toEqual(new Date('2023-08-19T17:10:37.318Z'))
  })

  scenario('updates a horaire', async (scenario) => {
    const original = await horaire({ id: scenario.horaire.one.id })
    const result = await updateHoraire({
      id: original.id,
      input: { jourDeLaSemaine: 'String2' },
    })

    expect(result.jourDeLaSemaine).toEqual('String2')
  })

  scenario('deletes a horaire', async (scenario) => {
    const original = await deleteHoraire({
      id: scenario.horaire.one.id,
    })
    const result = await horaire({ id: original.id })

    expect(result).toEqual(null)
  })
})
