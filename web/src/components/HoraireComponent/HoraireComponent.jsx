import { useQuery } from '@redwoodjs/web'
export const QUERY = gql`
  query HorairesQuery($id: Int!) {
    horaire(id: $id) {
      id
      jourDeLaSemaine
      openingAM
      closingAM
      openingPM
      closingPM
    }
  }
`
const HoraireComponent = () => {
  const { loading, error, data } = useQuery(QUERY)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const horaires = data.horaire

  return (
    <>
      <h1>Horaires</h1>
      <table>
        <thead>{/* ... */}</thead>
        <tbody>
          {horaires.map((horaire) => (
            <tr key={horaire.id}>
              <td>{horaire.jourDeLaSemaine}</td>
              <td>{horaire.openingAM}</td>
              <td>{horaire.closingAM}</td>
              <td>{horaire.openingPM}</td>
              <td>{horaire.closingPM}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default HoraireComponent
