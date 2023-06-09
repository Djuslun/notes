import FormNote from "../../components/formNote/FormNote"
import FormTag from "../../components/formTag/FormTag"
import './newNote.scss'

const NewNote = ({ }) => {

  return (
    <div className="new-note">
      <FormNote
        title=''
        description=''
        tags={[]}
      />
      <FormTag />
    </div>
  )
}

export default NewNote