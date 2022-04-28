import * as React from 'react';

interface todoListInterface{
  doCardElement:JSX.Element[]
}

 const TodoList:React.FC<todoListInterface> = (props) => {

  return (

    <div className='todoList-container'>
        {props.doCardElement}
    </div>

  );
}

export default TodoList;