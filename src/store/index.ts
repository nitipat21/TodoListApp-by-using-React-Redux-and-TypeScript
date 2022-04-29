import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import DoneList from "../Components/doneList";

export interface doItem {
    id:number;
    do:string;
    isStart:boolean;
    isDone:boolean;
    isEdit:boolean;
    isPause:boolean;
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
                isPause: false,
                color: state.doCardColorIndex < 3 ? state.doCardColorIndex += 1 : state.doCardColorIndex = 0
            });
        },
        removeTodo(state,action) {
            state.doItemsList = state.doItemsList.filter((item:doItem) => item.id !== action.payload ? item : "" );
        },
        setIsEdit(state,action) {
            state.doItemsList = state.doItemsList.map((item:doItem) => item.id === action.payload ? { ...item, isEdit:!item.isEdit } : item);
        },
        editTodo(state,action:{ type:string, payload: {id:number, newDoText:string} }) {
            state.doItemsList = state.doItemsList.map((item:doItem) => item.id === action.payload.id ? { ...item, do:action.payload.newDoText } : item);
        },
        startTodo(state,action) {
            state.doItemsList = state.doItemsList.map((item:doItem) => item.id === action.payload ? { ...item, isStart:true } : item);
        },
        pauseTodo(state,action) {
            
        },
        doneTodo(state,action) {
            state.doItemsList = state.doItemsList.map((item:doItem) => item.id === action.payload ? { ...item, isDone: true } : item);

            const thisItem = state.doItemsList.filter((item:doItem) => item.id === action.payload ? item : "" );
            state.doneList.unshift(...thisItem);
        },
        resetTodo(state,action) {
            state.doItemsList = state.doItemsList.map((item:doItem) => item.id === action.payload ? { ...item, isStart:false } : item);
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