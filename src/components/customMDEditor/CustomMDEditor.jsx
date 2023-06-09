import MDEditor from '@uiw/react-md-editor';

export default function CustomMDEditor({ field, form, disabled }) {
  const handleChange = (value) => { form.setFieldValue(field.name, value) }

  return (
    <div className="container">
      <MDEditor
        value={field.value}
        onChange={handleChange}
        preview={disabled ? 'preview' : 'live'}
        hideToolbar={disabled}
      />
    </div>
  );
}