import { Form, Formik } from "formik";
import * as Yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import CustomSelect from "../customForms/CustomSelect";
import { CustomField } from "../customForms/CustomField";
import { filtersAdd, selectAll, filtersDelete } from "../../redux/filters.Slice";
import { Button } from "@mui/material";
import uniqid from 'uniqid'

const FormTag = ({ }) => {
  const dispatch = useDispatch()
  const allTags = useSelector(selectAll).map(item => ({ value: item.id, label: item.label }))

  const handleSubmit = (tag, { resetForm }) => {
    const newTag = {
      value: tag.newTag,
      label: tag.newTag,
      id: uniqid()
    }
    if (allTags.some(item => item.value === newTag.value)) {
      console.log('have exist')
      return
    }
    if (allTags.length >= 10) {
      console.log('max is 10 tags')
      return
    }
    dispatch(filtersAdd(newTag))
    resetForm()
  }

  const handleDelete = (value, { resetForm }) => {
    console.log(value.deletedTags)
    dispatch(filtersDelete(value.deletedTags))
    resetForm()
  }

  return (
    <div>
      <Formik
        initialValues={{
          deletedTags: []
        }}
        validationSchema={Yup.object({
          deletedTags: Yup
            .array()
            .min(1)
            .required('Requiered')
        })}
        onSubmit={handleDelete}
      >
        <Form className="form-note">
          <h2 className="form-note__title title">{'Delete tag'}</h2>
          <CustomField
            label={'Delete tag'}
            name='deletedTags'
            type="text"
            id='deletedTags'
            component={CustomSelect}
            options={allTags}
            isMulti={true}
          />
          <Button type={'submit'}>- Delete tag</Button>
        </Form>
      </Formik >
      <Formik
        initialValues={{
          newTag: ''
        }}
        validationSchema={Yup.object({
          newTag: Yup
            .string()
            .min(2, '')
            .max(30, `Max ${30} char`)
            .trim()
            .required('Requiered')
        })}
        onSubmit={handleSubmit}
      >
        <Form className="form-note">
          <h2 className="form-note__title title">{'New tag'}</h2>
          <CustomField
            label={'Add tag'}
            name='newTag'
            type="text"
            id='newTag'
          />
          <Button type={'submit'}>+ Add tag</Button>
        </Form>
      </Formik >
    </div>
  )
}

export default FormTag