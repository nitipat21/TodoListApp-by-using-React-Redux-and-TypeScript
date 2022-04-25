import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers'

const defaultState = {};

const store = configureStore(
    reducers,
    defaultState
);

export default store;