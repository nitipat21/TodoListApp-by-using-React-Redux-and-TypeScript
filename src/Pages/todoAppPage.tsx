import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Components/button';
import DoCard from '../Components/doCard';
import GreetingComponent from '../Components/greetingText';
import InputText from '../Components/InputText';
import TodoList from '../Components/todoList';
import { actions, RootState } from '../store';

const TodoPage:React.FC = () => {

  const doItemsList = useSelector((state:RootState) => state.todo.doItemsList);
  const [doInput,setDoInput] = React.useState("");
  const dispatch = useDispatch();
  
  console.log(doItemsList)

  const addTodo = () => {
    dispatch(actions.addTodo(doInput));
    setDoInput("");
  }

  const doItemsListElement = doItemsList.map((doitem) => {
    return  <DoCard  id={doitem.id}
                    do={doitem.do}
                    isDone={doitem.isDone}
                    isEdit={doitem.isEdit}
            />
  })

  return (
      
    <main className='todoPage'>
        <div className='todoPage-container'>
          <nav>
            <GreetingComponent />
            <InputText state={doInput} useState={setDoInput} label='What are you gonna do?'/>
            <Button text='Add' onClick={addTodo}/>
          </nav>
          <TodoList doCardElement={doItemsListElement}/>
        </div>
    </main>

  );
}

export default TodoPage;