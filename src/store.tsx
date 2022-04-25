import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Itodo {
    id:number
    do:string
    done:boolean
}

interface ItodoSliceState {
    todoList: Itodo[];
}

const initialState: ItodoSliceState = {
    todoList:[],
}

const todoListSlice = createSlice({
    name:'todoList',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todoList = [
                ...state.todoList, 
                {
                    id:state.todoList.length,
                    do:action.payload,
                    done:false
                }
            ]
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todoList = state.todoList.filter(({id}) => id !== action.payload)
        }
    } 
})

export const { addTodo, removeTodo } = todoListSlice.actions;

const store = configureStore({
    reducer: {
        todoList:todoListSlice.reducer,
    },
});

type RootState = ReturnType<typeof store.getState>

export const selectTodoList = (state:RootState) => state.todoList.todoList;

export default store;