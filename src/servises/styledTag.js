import { pattern } from "../consts"

export const styledTags = (note, edit) => {
  return edit
    ? note
      .replace(/<span class="note__tag">/g, '')
      .replace(/<\/span>/g, '')
    : note
      .replace(/<span class="note__tag">/g, '')
      .replace(/<\/span>/g, '')
      .replace(pattern, '<span class="note__tag">$&</span>')
}