import { Link, routes } from '@redwoodjs/router'

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
        return (
          <article key={annonce.id}>
            <h2>
              <Link to={routes.annonceDetail({ id: annonce.id })}>
                {annonce.title}
              </Link>
            </h2>
            <p>Description : {annonce.description}</p>
            <p>Kilométrage : {annonce.kilometrage}</p>
            <p>Année de mise en circulation : {annonce.yearofcirculation}</p>
            <p>Prix : {annonce.price} Euros</p>
            <p>{annonce.published}</p>
            <p>
              {annonce.createdAt} by {annonce.authorId}
            </p>
          </article>
        )
      })}
    </ul>
  )
}
