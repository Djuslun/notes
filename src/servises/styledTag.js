import { pattern } from "../consts"

export const styledTags = (note, edit) => {
  return edit
    ? note
    : note.replace(pattern, '<span class="note__tag">$&</span>')
}