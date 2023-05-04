export type Action = { type: "ADD"; payload: string };

const addNote = (note: string): Action => ({
  type: "ADD",
  payload: note
});

export default addNote;
