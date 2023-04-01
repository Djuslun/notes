import uniqid from 'uniqid'
import sanitizeHtml from "sanitize-html"
import { sanitizeConf } from "../consts"
import { generateTags } from "./tags"



export const submitFormPrepare = (ref) => {
  const id = uniqid()
  const note = ref.current.value
  const newNote = sanitizeHtml(note, sanitizeConf).trim()
  const tags = generateTags(newNote)

  return { newNote, id, tags }
}