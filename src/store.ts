import { createStore } from "redux";
import noteReducer from "./noteReducer";

export const store = createStore(noteReducer);
