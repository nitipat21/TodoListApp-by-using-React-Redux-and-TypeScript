import * as React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../store';

const TodoInput:React.FC = () => {

    const dispatch = useDispatch();

    const [doInput,setDoInput] = React.useState('');

    const addTodo = () => {
        dispatch(actions.addTodo(doInput));
        setDoInput('');
    };

    return (

        <div className="todoInput-container">
            <div className='todoInputText-container'>
                <input id='inputText'type='text' onChange={(event)=> setDoInput(event.target.value)} value={doInput} placeholder='What are you gonna do?'/>
            </div>
            <div className='todoInputButton-container'>
                <button type='button' onClick={addTodo}>Add</button>
            </div>
        </div>

    );
}

export default TodoInput;