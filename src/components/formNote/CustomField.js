import { Field, ErrorMessage } from "formik"


export const CustomField = ({ label, ...props }) => {
  const { id, edit } = props
  return (
    <>
      <div className="form-note__input">
        <label className="form-note__label" htmlFor={props.id}>{label}</label>
        <Field
          className='form-note__field'
          disabled={id ? !edit : false}
          {...props}
        />
        <ErrorMessage name={props.name}>{msg => <div className="error">{msg}</div>}</ErrorMessage>
      </div>
    </>
  )
}
