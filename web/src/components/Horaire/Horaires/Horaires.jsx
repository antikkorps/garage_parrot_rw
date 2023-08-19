import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Horaire/HorairesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_HORAIRE_MUTATION = gql`
  mutation DeleteHoraireMutation($id: Int!) {
    deleteHoraire(id: $id) {
      id
    }
  }
`

const HorairesList = ({ horaires }) => {
  const [deleteHoraire] = useMutation(DELETE_HORAIRE_MUTATION, {
    onCompleted: () => {
      toast.success('Horaire deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete horaire ' + id + '?')) {
      deleteHoraire({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Jour de la semaine</th>
            <th>Opening am</th>
            <th>Closing am</th>
            <th>Opening pm</th>
            <th>Closing pm</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {horaires.map((horaire) => (
            <tr key={horaire.id}>
              <td>{truncate(horaire.id)}</td>
              <td>{truncate(horaire.jourDeLaSemaine)}</td>
              <td>{timeTag(horaire.openingAM)}</td>
              <td>{timeTag(horaire.closingAM)}</td>
              <td>{timeTag(horaire.openingPM)}</td>
              <td>{timeTag(horaire.closingPM)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.horaire({ id: horaire.id })}
                    title={'Show horaire ' + horaire.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editHoraire({ id: horaire.id })}
                    title={'Edit horaire ' + horaire.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete horaire ' + horaire.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(horaire.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HorairesList
