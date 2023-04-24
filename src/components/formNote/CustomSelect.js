import Select from 'react-select';

const CustomSelect = ({
  field,
  form,
  options,
  isMulti = false,
  placeholder,
  InputProps,
  disabled,
  maxMenuHeight
}) => {
  const handleChange = (option = []) => {
    form.setFieldValue(
      field.name,
      isMulti ? (option).map((item) => item.value) : option.value,
    )
    InputProps?.(option)
  }

  const getValue = () => {
    return isMulti
      ? options.filter((option = []) => field.value && field.value.indexOf(option.value) >= 0)
      : options.find((option = []) => option.value === field.value);
  };

  return (
    <Select
      className="react-select-container"
      classNamePrefix="react-select"
      name={field.name}
      value={getValue()}
      onChange={handleChange}
      onBlur={field.onBlur}
      inputId={field.name}
      options={options}
      placeholder={placeholder}
      isMulti={isMulti}
      closeMenuOnSelect={!isMulti}
      isDisabled={disabled}
      maxMenuHeight={maxMenuHeight}
    />
  )
}

export default CustomSelect;