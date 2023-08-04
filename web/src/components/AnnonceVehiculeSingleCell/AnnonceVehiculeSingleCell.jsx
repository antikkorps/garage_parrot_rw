import AnnonceSingle from 'src/components/AnnonceSingle/AnnonceSingle'

export const QUERY = gql`
  query FindAnnonceVehiculeSingleQuery($id: Int!) {
    annonceVehiculeSingle: annonce(id: $id) {
      id
      title
      description
      kilometrage
      yearofcirculation
      price
      published
      authorId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ annonceVehiculeSingle }) => {
  return <AnnonceSingle annonce={annonceVehiculeSingle} />
}
