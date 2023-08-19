import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import HoraireForm from 'src/components/Horaire/HoraireForm'

export const QUERY = gql`
  query EditHoraireById($id: Int!) {
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
const UPDATE_HORAIRE_MUTATION = gql`
  mutation UpdateHoraireMutation($id: Int!, $input: UpdateHoraireInput!) {
    updateHoraire(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ horaire }) => {
  const [updateHoraire, { loading, error }] = useMutation(
    UPDATE_HORAIRE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Horaire updated')
        navigate(routes.horaires())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateHoraire({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Horaire {horaire?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <HoraireForm
          horaire={horaire}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
