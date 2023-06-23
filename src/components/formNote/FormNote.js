import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from 'yup'
import { notesCreate, notesChange } from '../../redux/notes.Slice'
import { useDispatch, useSelector } from "react-redux";
import uniqid from 'uniqid'
import CustomSelect from "../customForms/CustomSelect";
import { CustomField } from "../customForms/CustomField";
import { selectAll } from '../../redux/filters.Slice'
import ButtonBox from "../buttons/ButtonBox";
import CustomMDEditor from "../customMDEditor/CustomMDEditor";
import './FormNote.scss'

const FormNote = ({ title, description, tags: noteTags, noteId, handleOpen, handleDelete }) => {
  const isNote = !!noteId
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch()
  const tagOptions = useSelector(selectAll)

  const handleEdit = () => setEdit(!edit)

  const handleSubmit = ({ title, description, tags }, { resetForm }) => {
    if (isNote) {
      dispatch(notesChange({ id: noteId, changes: { title, description, tags } }))
    }
    else {
      const newNote = { title, description, id: uniqid(), tags, createAt: new Date().toLocaleString() }
      dispatch(notesCreate(newNote))
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
          .min(2, 'Min 2 char')
          .max(30, `Max 30 char`)
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
          component={CustomMDEditor}
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