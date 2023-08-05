import { combineReducers, createStore } from "redux";
import menuToggle from "./menuToggle";

const reducers = combineReducers({menuToggle});
const folioStore = createStore(reducers);

export type RootState = ReturnType<typeof folioStore.getState>

export default folioStore;