import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, RootState } from '../store';
import { FaPlus } from "react-icons/fa";

const TodoInput:React.FC = () => {

    const dispatch = useDispatch();

    const doItemsListState = useSelector((state:RootState) => state.todo.doItemsList);

    const [doInput,setDoInput] = React.useState<string>('');

    const [warnEmptyInput,isWarnEmptyInput] = React.useState<boolean>(false);

    const addTodo = () => {

        if(doItemsListState.length === 10 || doInput === '') {
            if (!warnEmptyInput) {
                if (doItemsListState.length === 10) {
                    setDoInput('You reached limit 10 items');
                } 
    
                isWarnEmptyInput(true);
                setTimeout(()=> {
                    isWarnEmptyInput(false);
                    setDoInput('');
                },2000);
            }
        } else {
            dispatch(actions.addTodo(doInput));
            setDoInput('');
            dispatch(actions.changeAlertText(`${doInput} is added`));
            setTimeout(()=>{
                dispatch(actions.changeAlertText(''));
            },2000)
        }
    } 
    
    return (

        <div className="todoInput-container">
            <div className='todoInputText-container'>
                <input  className={ warnEmptyInput ? 'shaking' : "" } 
                        id='inputText'type='text' 
                        onChange={(event)=> setDoInput(event.target.value)} 
                        value={doInput} 
                        placeholder='What are you gonna do?'
                        maxLength={22}
                />
            </div>
            <div className='todoInputButton-container'>
                <button type='button' onClick={addTodo}><FaPlus /></button>
            </div>
        </div>

    );
}

export default TodoInput;