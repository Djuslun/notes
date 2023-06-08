import FormNote from "../../components/formNote/FormNote"
import FormTag from "../../components/formTag/FormTag"

const NewNote = ({ }) => {

  return (
    <>
      <FormNote
        title=''
        description=''
        tags={[]}
      />
      <FormTag />
    </>
  )
}

export default NewNote