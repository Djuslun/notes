import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import { Form, Formik, Field } from "formik";
import * as Yup from 'yup'
import MultiSelect from "../formNote/CustomSelect";
import { tagOptions } from "../../redux/reducer";
import './search-panel.scss';

const SearchPanel = () => {
  const dispatch = useDispatch()

  const onFilterValueChange = (value) => {
    dispatch(changeFilter(value))
  }

  return (
    <Formik
      initialValues={{
        filter: '',
      }}
      validationSchema={Yup.object({
        filter: Yup
          .string()
      })}
      onSubmit={values => console.log(values)}
    >
      <Form className="search-form">
        <Field
          name='filter'
          id='filter'
          placeholder='Filter'
          isMulti={false}
          component={MultiSelect}
          options={[
            { value: 'all', label: 'All' },
            ...tagOptions
          ]}
          InputProps={value => onFilterValueChange(value.value)}
        />
      </Form>
    </Formik>
  )
}

export default SearchPanel;