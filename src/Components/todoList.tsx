import * as React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../store';
import { FaTrash } from "react-icons/fa";

export interface todoListInterface{
  doCardElement:JSX.Element[]
}

 const TodoList:React.FC<todoListInterface> = (props) => {

  const dispatch = useDispatch();

  const slideToNextPage = () => {
    dispatch(actions.slidePageTo('doneListPage'))
  }

  return (

    <div className='todoList-container'>
      <div className="todoList-title">
        <h1>DO LIST</h1>
        <button className='clear-btn' onClick={()=>dispatch(actions.clearDoList())} ><FaTrash /></button>
      </div>
      {props.doCardElement}
      <h1 className='rightArrow' onClick={slideToNextPage}>{'>'}</h1>
    </div>

  );
}

export default TodoList;