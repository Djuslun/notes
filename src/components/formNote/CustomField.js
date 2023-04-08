import { Field, ErrorMessage } from "formik"

export const CustomField = ({ label, edit, noteId, ...props }) => {
  return (
    <>
      <div className="form-note__input">
        <label >
          <p className="form-note__label">{label}</p>
          <Field
            className='form-note__field'
            disabled={noteId ? !edit : false}
            {...props}
          />
          <ErrorMessage name={props.name}>{msg => <div className="error">{msg}</div>}</ErrorMessage>
        </label>
      </div>
    </>
  )
}
