import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import HoraireForm from 'src/components/Horaire/HoraireForm'

const CREATE_HORAIRE_MUTATION = gql`
  mutation CreateHoraireMutation($input: CreateHoraireInput!) {
    createHoraire(input: $input) {
      id
    }
  }
`

const NewHoraire = () => {
  const [createHoraire, { loading, error }] = useMutation(
    CREATE_HORAIRE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Horaire created')
        navigate(routes.horaires())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createHoraire({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Horaire</h2>
      </header>
      <div className="rw-segment-main">
        <HoraireForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewHoraire
