import AnnonceSingle from 'src/components/AnnonceSingle/AnnonceSingle'

export const QUERY = gql`
  query AnnoncesVehiculesQuery {
    annonces {
      id
      title
      description
      kilometrage
      yearofcirculation
      price
      published
      authorId
      createdAt
      Equipment {
        id
        name
      }
      Image {
        id
        name
        url
        featuredImage
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ annonces }) => {
  return (
    <ul>
      {annonces.map((annonce) => {
        return <AnnonceSingle key={annonce.id} annonce={annonce} />
      })}
    </ul>
  )
}
