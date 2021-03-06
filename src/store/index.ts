import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

export interface doItem {
    id:number;
    do:string;
    isStart:boolean;
    isDone:boolean;
    isEdit:boolean;
    isPause:boolean;
    doTime:number;
    color:number;
    doDeadline:string;
}

interface todoSliceState {
    doItemsList: doItem[];
    doneList: doItem[];
    doCardColorIndex: number;
    setDeadline:boolean;
    setfixColor:boolean;
    showOptions:boolean;
    deadlineDate:string;
    todayDate:string;
    onPage:string;
    alertText:string;
}

const initialState: todoSliceState = {
    doItemsList: [],
    doneList: [],
    doCardColorIndex: 0,
    setDeadline:false,
    setfixColor:false,
    showOptions:false,
    deadlineDate:"",
    todayDate:"",
    onPage:"",
    alertText:""
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
                doTime: 0,
                color: state.doCardColorIndex,
                doDeadline:state.deadlineDate
            });

            if (!state.setfixColor) {
                state.doCardColorIndex < 3 ? state.doCardColorIndex += 1 : state.doCardColorIndex = 0
            }

            localStorage.setItem("todo",JSON.stringify(state));
        },
        removeTodo(state,action) {
            state.doItemsList = state.doItemsList.filter((item:doItem) => item.id !== action.payload ? item : "" );
            
            localStorage.setItem("todo",JSON.stringify(state));
        },
        setIsEdit(state,action) {
            state.doItemsList = state.doItemsList.map((item:doItem) => item.id === action.payload ? { ...item, isEdit:!item.isEdit } : item);
            
            localStorage.setItem("todo",JSON.stringify(state));
        },
        editTodo(state,action:{ type:string, payload: {id:number, newDoText:string, newDoDeadline:string, newCardColor:number} }) {
            state.doItemsList = state.doItemsList.map((item:doItem) => item.id === action.payload.id ? 
            { ...item, do:action.payload.newDoText, doDeadline: action.payload.newDoDeadline, color:action.payload.newCardColor } : item);
            
            localStorage.setItem("todo",JSON.stringify(state));
        },
        startTodo(state,action) {
            state.doItemsList = state.doItemsList.map((item:doItem) => item.id === action.payload ? { ...item, isStart:true } : item);

            localStorage.setItem("todo",JSON.stringify(state));
        },
        pauseTodo(state,action:{ type:string, payload: {id:number, doTime:number} }) {
            state.doItemsList = state.doItemsList.map((item:doItem) => item.id === action.payload.id ? { ...item, isPause: !item.isPause, doTime:action.payload.doTime } : item);
            
            localStorage.setItem("todo",JSON.stringify(state));
        },
        doneTodo(state,action:{ type:string, payload: {id:number, doTime:number} }) {
            state.doItemsList = state.doItemsList.map((item:doItem) => item.id === action.payload.id ? { ...item, isDone: true, isPause:true, doTime:action.payload.doTime, isEdit:false } : item);
            
            const thisItem = state.doItemsList.filter((item:doItem) => item.id === action.payload.id ? item : "" );
            
            state.doneList.unshift(...thisItem);
            
            localStorage.setItem("todo",JSON.stringify(state));
        },
        resetTodo(state,action) {
            state.doItemsList = state.doItemsList.map((item:doItem) => item.id === action.payload ? { ...item, isStart:false, isPause:false, doTime:0 } : item);
            
            localStorage.setItem("todo",JSON.stringify(state));
        },
        updateTime(state,action:{ type:string, payload: {id:number, doTime:number} }) {
            state.doItemsList = state.doItemsList.map((item:doItem) => item.id === action.payload.id ? {...item, doTime:action.payload.doTime} : item);
            
            localStorage.setItem("todo",JSON.stringify(state));
        },
        clearDoList(state) {
            state.doItemsList = initialState.doItemsList;
            
            localStorage.setItem("todo",JSON.stringify(state));
        },
        clearDoneList(state) {
            state.doneList = initialState.doneList;
            
            localStorage.setItem("todo",JSON.stringify(state));
        },
        updateState(state,action) {
            state.doCardColorIndex = action.payload.doCardColorIndex;
            state.doItemsList = action.payload.doItemsList;
            state.doneList = action.payload.doneList;
            state.setDeadline = action.payload.setDeadline;
            state.setfixColor = action.payload.setfixColor;
            state.showOptions = action.payload.showOptions;
            state.deadlineDate = action.payload.deadlineDate;
            state.todayDate = action.payload.todayDate;
            state.alertText = '';
        },
        toggleSetFixColor(state,action) {
            state.setfixColor = action.payload;

            if (!state.setfixColor) {
                state.doCardColorIndex = 0;
            };

            localStorage.setItem("todo",JSON.stringify(state));
        },
        toggleSetDeadline(state,action) {
            state.setDeadline = action.payload;

            if (!state.setDeadline) {
                state.deadlineDate = "";
            };

            localStorage.setItem("todo",JSON.stringify(state));
        },
        toggleShowOptions(state,action) {
            state.showOptions = action.payload;
            
            localStorage.setItem("todo",JSON.stringify(state));
        },
        fixCardColor(state,action) {
            state.doCardColorIndex = action.payload;
            
            localStorage.setItem("todo",JSON.stringify(state));
        },
        fixDeadlineDate(state,action) {
            state.deadlineDate = action.payload;
            
            localStorage.setItem("todo",JSON.stringify(state));
        },
        updateTodayDate(state,action) {
            state.todayDate = action.payload;

            localStorage.setItem("todo",JSON.stringify(state));
        },
        slidePageTo(state,action) {
            state.onPage = action.payload;

            localStorage.setItem("todo",JSON.stringify(state));
        },
        changeAlertText(state,action) {
            state.alertText = action.payload;
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