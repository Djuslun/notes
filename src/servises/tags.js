import { pattern } from "../consts";

export const generateTags = (note) => {
  return note.match(pattern) || [];
}