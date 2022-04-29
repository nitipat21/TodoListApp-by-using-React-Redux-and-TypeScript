import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

export interface doItem {
    id:number;
    do:string;
    isStart:boolean;
    isDone:boolean;
    isEdit:boolean;
    color:number;
}

interface todoSliceState {
    doItemsList: doItem[];
    doneList: doItem[];
    doCardColorIndex: number;
}

const initialState: todoSliceState = {
    doItemsList: [],
    doneList: [],
    doCardColorIndex: 0
}


const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo(state,action) {
            state.doItemsList.unshift({
                id: state.doItemsList.length,
                do: action.payload,
                isStart: false,
                isDone: false,
                isEdit: false,
                color: state.doCardColorIndex < 3 ? state.doCardColorIndex += 1 : state.doCardColorIndex = 0
            });
        },
        removeTodo(state,action) {
            state.doItemsList = state.doItemsList.filter((item:doItem) => item.id !== action.payload ? item : "" );
        },
        editTodo(state,action) {
            state.doItemsList = state.doItemsList.map((item:doItem) => item.id === action.payload ? { ...item, isEdit:true } : item);
        },
        startTodo(state,action) {

        },
        pauseTodo(state,action) {

        },
        doneTodo(state,action) {

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