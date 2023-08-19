import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_HORAIRE_MUTATION = gql`
  mutation DeleteHoraireMutation($id: Int!) {
    deleteHoraire(id: $id) {
      id
    }
  }
`

const Horaire = ({ horaire }) => {
  const [deleteHoraire] = useMutation(DELETE_HORAIRE_MUTATION, {
    onCompleted: () => {
      toast.success('Horaire deleted')
      navigate(routes.horaires())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete horaire ' + id + '?')) {
      deleteHoraire({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Horaire {horaire.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{horaire.id}</td>
            </tr>
            <tr>
              <th>Jour de la semaine</th>
              <td>{horaire.jourDeLaSemaine}</td>
            </tr>
            <tr>
              <th>Opening am</th>
              <td>{timeTag(horaire.openingAM)}</td>
            </tr>
            <tr>
              <th>Closing am</th>
              <td>{timeTag(horaire.closingAM)}</td>
            </tr>
            <tr>
              <th>Opening pm</th>
              <td>{timeTag(horaire.openingPM)}</td>
            </tr>
            <tr>
              <th>Closing pm</th>
              <td>{timeTag(horaire.closingPM)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editHoraire({ id: horaire.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(horaire.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Horaire
