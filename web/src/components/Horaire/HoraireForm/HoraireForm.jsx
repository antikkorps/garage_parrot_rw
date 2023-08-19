import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const HoraireForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.horaire?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="jourDeLaSemaine"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Jour de la semaine
        </Label>

        <TextField
          name="jourDeLaSemaine"
          defaultValue={props.horaire?.jourDeLaSemaine}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="jourDeLaSemaine" className="rw-field-error" />

        <Label
          name="openingAM"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Opening am
        </Label>

        <DatetimeLocalField
          name="openingAM"
          defaultValue={formatDatetime(props.horaire?.openingAM)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="openingAM" className="rw-field-error" />

        <Label
          name="closingAM"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Closing am
        </Label>

        <DatetimeLocalField
          name="closingAM"
          defaultValue={formatDatetime(props.horaire?.closingAM)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="closingAM" className="rw-field-error" />

        <Label
          name="openingPM"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Opening pm
        </Label>

        <DatetimeLocalField
          name="openingPM"
          defaultValue={formatDatetime(props.horaire?.openingPM)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="openingPM" className="rw-field-error" />

        <Label
          name="closingPM"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Closing pm
        </Label>

        <DatetimeLocalField
          name="closingPM"
          defaultValue={formatDatetime(props.horaire?.closingPM)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="closingPM" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default HoraireForm
