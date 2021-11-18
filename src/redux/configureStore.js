import { createStore } from 'redux';
import { initialState } from './reducer';

const store = createStore(initialState);

export default store;
