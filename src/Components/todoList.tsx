import * as React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../store';

export interface todoListInterface{
  doCardElement:JSX.Element[]
}

 const TodoList:React.FC<todoListInterface> = (props) => {

  const dispatch = useDispatch();

  return (

    <div className='todoList-container'>
      <div className="todoList-title">
        <h1>DO LIST</h1>
        <button className='clear-btn' onClick={()=>dispatch(actions.clearDoList())} >Clear</button>
      </div>
      {props.doCardElement}
    </div>

  );
}

export default TodoList;