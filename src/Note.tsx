import { useState, ChangeEvent } from "react";

interface Props {
  addNote(note: string): void;
}

const Note = ({ addNote }: Props) => {
  const [note, setNote] = useState("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const addNoteBtn = () => {
    addNote(note);
    setNote("");
  };
  return (
    <div className="note-container">
      <input
        value={note}
        onChange={updateNote}
        type="text"
        name="note"
        placeholder="Note"
        className="note"
      />
      <button onClick={addNoteBtn} className="note-btn">
        Add
      </button>
    </div>
  );
};
export default Note;
