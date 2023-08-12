import { Button } from '@chakra-ui/react'
import { BiMailSend } from 'react-icons/bi'

import {
  FieldError,
  Form,
  FormError,
  Label,
  TextField,
  TextAreaField,
  useForm,
  Submit,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`
const ContactPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Merci de votre demande de contact')
      formMethods.reset()
    },
  })
  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Toaster />
      <h2 className="mx-auto mt-10 text-center text-xl font-bold text-red-500">
        Contactez nous !
      </h2>
      <p className="mx-auto mt-3 text-center text-xl font-medium sm:w-1/2">
        La meilleure façon de nous contacter et de le faire par le formulaire
        ci-dessous en précisant votre demande
      </p>
      <Form
        onSubmit={onSubmit}
        config={{ mode: 'onBlur' }}
        error={error}
        formMethods={formMethods}
        className="mx-auto my-5 flex w-full flex-col items-center justify-center sm:w-1/2"
      >
        <FormError error={error} wrapperClassName="form-error" />

        <div className="form_group my-4">
          <Label name="name" errorClassName="error">
            Nom
          </Label>
          <TextField
            name="name"
            validation={{ required: true }}
            errorClassName="error"
          />
          <FieldError name="name" className="error" />

          <Label name="numero_de_telephone" errorClassName="error">
            Téléphone
          </Label>
          <TextField
            name="numero_de_telephone"
            validation={{ required: true }}
            errorClassName="error"
          />
          <FieldError name="numero_de_telephone" className="error" />

          <Label name="email" errorClassName="error">
            Email
          </Label>
          <TextField
            name="email"
            validation={{
              required: true,
              pattern: {
                value: /^[^@]+@[^.]+\..+$/,
                message: 'Please enter a valid email address',
              },
            }}
            errorClassName="error"
          />
          <FieldError name="email" className="error" />

          <Label name="message" errorClassName="error">
            Message
          </Label>
          <TextAreaField
            name="message"
            validation={{ required: true }}
            errorClassName="error"
          />
          <FieldError name="message" className="error" />
        </div>
        <Button
          size="lg"
          colorScheme="red"
          rightIcon={<BiMailSend />}
          className="my-4 block"
        >
          <Submit disabled={loading}>Envoyer le formulaire</Submit>
        </Button>
      </Form>
    </>
  )
}

export default ContactPage
