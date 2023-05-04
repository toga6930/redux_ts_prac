import { Action } from "./action";

export interface NoteState {
  notes: string[];
}

const initialState = {
  notes: []
};
const noteReducer = (state: NoteState = initialState, action: Action) => {
  switch (action.type) {
    case "ADD": {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    default:
      return state;
  }
};

export default noteReducer;
