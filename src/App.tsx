import "./styles.css";
import Note from "./Note";
import { useSelector, useDispatch } from "react-redux";
import { NoteState } from "./noteReducer";
import addNote from "./action";

export default function App() {
  const notes = useSelector<NoteState, NoteState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();
  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };
  return (
    <>
      <Note addNote={onAddNote} />
      <hr />
      <ul className="ul">
        {notes.map((note) => {
          return (
            <li className="note-list" key={note}>
              {note}
            </li>
          );
        })}
      </ul>
    </>
  );
}
