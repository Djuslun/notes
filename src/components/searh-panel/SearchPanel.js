import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik, Field } from "formik";
import { filtersChange, tagOptions } from '../../redux/filters.Slice';
import * as Yup from 'yup'
import CustomSelect from "../formNote/CustomSelect";
import './search-panel.scss';

const SearchPanel = () => {
  const dispatch = useDispatch()

  const onFilterValueChange = (filter) => dispatch(filtersChange(filter.value))

  useEffect(() => {
    return () => {
      onFilterValueChange({ value: 'all' })
    }
  }, [])

  const { filter } = useSelector(store => store.filters)

  return (
    <Formik
      initialValues={{
        filter: filter,
      }}
      validationSchema={Yup.object({
        filter: Yup
          .string()
      })}
      onSubmit={(values) => console.log(values)}
    >
      <Form className="search-form">
        <Field
          name='filter'
          id='filter'
          placeholder='Filter'
          isMulti={false}
          component={CustomSelect}
          options={[
            { value: 'all', label: 'All' },
            ...tagOptions
          ]}
          onFilterValueChange={onFilterValueChange}
        />
      </Form>
    </Formik>
  )
}

export default SearchPanel;