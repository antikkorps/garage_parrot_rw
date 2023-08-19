import { Link, routes } from '@redwoodjs/router'

import Horaires from 'src/components/Horaire/Horaires'

export const QUERY = gql`
  query FindHoraires {
    horaires {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No horaires yet. '}
      <Link to={routes.newHoraire()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ horaires }) => {
  return <Horaires horaires={horaires} />
}
