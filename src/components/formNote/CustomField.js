import { Field, ErrorMessage } from "formik"


export const CustomField = ({ label, ...props }) => {
  return (
    <>
      <div className="form-note__input">
        <label className="form-note__label" htmlFor={props.id}>{label}</label>
        <Field
          {...props}
        />
        <ErrorMessage name={props.name}>{msg => <div className="error">{msg}</div>}</ErrorMessage>
      </div>
    </>
  )
}
