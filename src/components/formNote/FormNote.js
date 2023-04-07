import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from 'yup'
import { createNote, changeNote } from '../../redux/actions'
import { useDispatch } from "react-redux";
import uniqid from 'uniqid'
import MultiSelect from "./CustomSelect";
import { CustomField } from "./CustomField";
import { tagOptions } from "../../redux/reducer";
import ButtonBox from "./ButtonBox";
import './FormNote.scss'

const FormNote = ({ title, description, tags, id, handleOpen, handleDelete }) => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch()

  const handleEdit = () => setEdit(!edit)

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
          name='title'
          type="text"
          id='title'
          edit={edit}
        />
        <CustomField
          label={'Note description'}
          name="description"
          as='textarea'
          id='description'
          edit={edit}
        />
        <CustomField
          label={'Note tags'}
          name='tags'
          component={MultiSelect}
          id='tags'
          edit={edit}
          placeholder='Select tags'
          isMulti={true}
          options={tagOptions}
        />
        <ButtonBox
          id={id}
          edit={edit}
          handleDelete={handleDelete}
          handleOpen={handleOpen}
          handleEdit={handleEdit} />
      </Form>
    </Formik >
  )
}

export default FormNote