import { Field, ErrorMessage } from "formik"


export const CustomField = ({ label, edit, noteId, ...props }) => {
  const { id } = props
  return (
    <>
      <div className="form-note__input">
        <label className="form-note__label" htmlFor={id}>{label}</label>
        <Field
          className='form-note__field'
          disabled={noteId ? !edit : false}
          {...props}
        />
        <ErrorMessage name={props.name}>{msg => <div className="error">{msg}</div>}</ErrorMessage>
      </div>
    </>
  )
}
