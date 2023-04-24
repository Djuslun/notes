import { useHttp } from '../../hooks/http.hook'
import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from 'yup'
import { notesCreate, notesChange } from '../../redux/notes.Slice'
import { useDispatch } from "react-redux";
import uniqid from 'uniqid'
import CustomSelect from "./CustomSelect";
import { CustomField } from "./CustomField";
import { tagOptions } from "../../redux/notes.Slice";
import ButtonBox from "../buttons/ButtonBox";
import './FormNote.scss'

const FormNote = ({ title, description, tags: noteTags, noteId, handleOpen, handleDelete }) => {
  const { request } = useHttp()
  const isNote = !!noteId

  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch()

  const handleEdit = () => setEdit(!edit)

  const handleSubmit = ({ title, description, tags }, { resetForm }) => {
    if (isNote) {
      const newNote = { title, description, id: noteId, tags }
      request(`https://precious-deer-cuff-links.cyclic.app/notes/${noteId}`, 'PUT', JSON.stringify(newNote))
        .then(dispatch(notesChange({ id: noteId, changes: { title, description, tags } })))
        .catch((e) => console.log(e))
    }
    else {
      const newNote = { title, description, id: uniqid(), tags }
      request("https://precious-deer-cuff-links.cyclic.app/notes", 'POST', JSON.stringify(newNote))
        .then(data => dispatch(notesCreate(data)))
        .catch((e) => console.log(e))
      resetForm();
    }
  }

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
          .min(1, 'At least one tag')
          .max(3, 'Max 3 tag'),
      })}
      onSubmit={handleSubmit}
    >
      <Form className="form-note">
        <h2 className="form-note__title title">{isNote ? 'Note' : 'Add note'}</h2>
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
          maxMenuHeight={'65px'}
        />
        <ButtonBox
          isNote={isNote}
          edit={edit}
          handleDelete={handleDelete}
          handleOpen={handleOpen}
          handleEdit={handleEdit} />
      </Form>
    </Formik >
  )
}

export default FormNote