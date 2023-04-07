import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from 'yup'
import { createNote, changeNote } from '../../redux/actions'
import { useDispatch } from "react-redux";
import uniqid from 'uniqid'
import MultiSelect from "./CustomSelect";
import { CustomField } from "./CustomField";
import './FormNote.scss'

const FormNote = ({ title, description, tags, id, handleOpen, handleDelete }) => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch()

  const handleEdit = () => {
    setEdit(!edit)
  }

  return (
    <Formik
      initialValues={{
        title: title,
        description: description,
        tags: tags,
      }}
      validationSchema={Yup.object({
        title: Yup
          .string()
          .min(2, '')
          .max(30, `Max ${30} char`)
          .trim()
          .required('Requiered'),
        description: Yup
          .string()
          .min(0, ''),
        tags: Yup
          .array()
          .min(1, 'At least one tag')
          .required('Requiered'),
      })}
      onSubmit={({ title, description, tags }, { resetForm }) => {
        if (id) {
          dispatch(changeNote(title, description, id, tags))
        }
        else {
          dispatch(createNote(title, description, uniqid(), tags))
          resetForm();
        }
      }}
    >
      <Form className="form-note">
        <h2 className="form-note__title title">{id ? 'Note' : 'Add note'}</h2>
        <CustomField
          label={'Note title'}
          className='form-note__field'
          type="text"
          name='title'
          id='title'
          disabled={id ? !edit : false} />
        <CustomField
          label={'Note description'}
          as='textarea'
          className='form-note__field'
          name="description"
          id='description'
          disabled={id ? !edit : false}
        />
        <CustomField
          disabled={id ? !edit : false}
          name='tags'
          id='tags'
          placeholder='Select tags'
          className='form-note__field'
          isMulti={true}
          component={MultiSelect}
          options={[
            { value: 'Work', label: 'Work' },
            { value: 'Home', label: 'Home' },
            { value: 'Hobby', label: 'Hobby' }
          ]}
        />
        <div className="button__box">
          {id
            ? <button className="form-note__button" onClick={handleDelete}>Delete</button>
            : <button className="form-note__button" type="submit">Submit</button>}
          {id
            ? <button
              type="button"
              className="form-note__button"
              onClick={handleOpen}>
              Close
            </button>
            : null}
          {id
            ? <button
              type={!edit ? "submit" : 'button'}
              className="form-note__button"
              onClick={(props) => handleEdit(props)}
            >
              Edit
            </button>
            : null}
        </div>
      </Form>
    </Formik >
  )
}

export default FormNote