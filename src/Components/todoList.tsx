import * as React from 'react';

interface todoListInterface{
  doCardElement:JSX.Element[]
}

 const TodoList:React.FC<todoListInterface> = (props) => {

  return (

    <div className='todoList-container'>
      <div className="todoList-title">
        <h1>DO LIST</h1>
      </div>
      {props.doCardElement}
    </div>

  );
}

export default TodoList;