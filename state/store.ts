import { combineReducers, createStore } from 'redux';
import menuToggle from './reducers/menuToggle';
import changeRoutes from './reducers/routeChange';

const reducers = combineReducers({ menuToggle, changeRoutes });
const folioStore = createStore(reducers);

export type RootState = ReturnType<typeof folioStore.getState>;

export default folioStore;
