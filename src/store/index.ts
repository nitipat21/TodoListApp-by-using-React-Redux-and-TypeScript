import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

export interface doItem {
    id:number,
    do:string;
    isDone:boolean;
    isEdit:boolean;
}

interface todoSliceState {
    doItemsList: doItem[];
}

const initialState: todoSliceState = {
    doItemsList: []
}


const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo(state,action) {
            state.doItemsList.push({
                id: state.doItemsList.length,
                do: action.payload,
                isDone: false,
                isEdit: false
            })
        },
        removeTodo(state,action) {

        },
        editTodo(state,action) {

        }
    }
});

const RootReducer = combineReducers({
    todo:todoSlice.reducer
})

const store = configureStore({
    reducer:RootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export const actions = todoSlice.actions;
export default store;