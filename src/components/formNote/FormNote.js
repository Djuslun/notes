import { useState } from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from 'yup'
import { createNote, changeNote } from '../../redux/actions'
import { useDispatch } from "react-redux";
import uniqid from 'uniqid'
import CustomSelect from "./CustomSelect";
import { CustomField } from "./CustomField";
import { tagOptions } from "../../redux/reducer";
import ButtonBox from "./ButtonBox";
import './FormNote.scss'

const FormNote = ({ title, description, tags: noteTags, noteId, handleOpen, handleDelete }) => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch()

  const handleEdit = () => setEdit(!edit)

  return (
    <Formik
      initialValues={{
        title: title,
        description: description,
        tags: noteTags,
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
          .min(1, 'At least one tag'),
      })}
      onSubmit={({ title, description, tags }, { resetForm }) => {
        if (noteId) {
          dispatch(changeNote(title, description, noteId, tags))
        }
        else {
          dispatch(createNote(title, description, uniqid(), tags))
          resetForm();
        }
      }}
    >
      <Form className="form-note">
        <h2 className="form-note__title title">{noteId ? 'Note' : 'Add note'}</h2>
        <CustomField
          label={'Note title'}
          name='title'
          type="text"
          id='title'
          edit={edit}
          noteId={noteId}
        />
        <CustomField
          label={'Note description'}
          name="description"
          as='textarea'
          id='description'
          className={'form-note__description-field'}
          edit={edit}
          noteId={noteId}
        />
        <CustomField
          label={'Note tags'}
          name='tags'
          component={CustomSelect}
          id='tags'
          edit={edit}
          noteId={noteId}
          placeholder='Select tags'
          isMulti={true}
          options={tagOptions}
        />
        <ButtonBox
          noteId={noteId}
          edit={edit}
          handleDelete={handleDelete}
          handleOpen={handleOpen}
          handleEdit={handleEdit} />
      </Form>
    </Formik >
  )
}

export default FormNote