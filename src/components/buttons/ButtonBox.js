import Button from "./Button"
import NoteButtons from "./NoteButtons"

const ButtonBox = ({ isNote, ...props }) => {
  return (
    <>
      {isNote
        ? <NoteButtons {...props} />
        : <Button
          type="submit">
          Submit
        </Button>
      }
    </>)
}

export default ButtonBox