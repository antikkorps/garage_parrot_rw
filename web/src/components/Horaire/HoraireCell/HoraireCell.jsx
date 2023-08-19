import Horaire from 'src/components/Horaire/Horaire'

export const QUERY = gql`
  query FindHoraireById($id: Int!) {
    horaire: horaire(id: $id) {
      id
      jourDeLaSemaine
      openingAM
      closingAM
      openingPM
      closingPM
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Horaire not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ horaire }) => {
  return <Horaire horaire={horaire} />
}
