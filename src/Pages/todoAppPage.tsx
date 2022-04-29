import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Components/button';
import DoCard from '../Components/doCard';
import DoneList from '../Components/doneList';
import GreetingComponent from '../Components/greetingText';
import InputText from '../Components/InputText';
import TodoList from '../Components/todoList';
import { actions, RootState } from '../store';

const TodoPage:React.FC = () => {

  const doItemsList = useSelector((state:RootState) => state.todo.doItemsList);

  const [doInput,setDoInput] = React.useState("");

  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(actions.addTodo(doInput));
    setDoInput("");
  };

  const doItemsListElement = doItemsList.map((doitem) => {
    return  <DoCard  id={doitem.id}
                    do={doitem.do}
                    isStart={doitem.isStart}
                    isDone={doitem.isDone}
                    isEdit={doitem.isEdit}
                    color={doitem.color}
            />
  });

  return (
      
    <main className='todoPage'>
        <div className='todoPage-container'>
          <nav>
            <GreetingComponent />
            <div className="addTodo-container">
              <InputText state={doInput} setState={setDoInput} label='What are you gonna do?'/>
              <Button text='Add' onClick={addTodo}/>
            </div>
          </nav>
          <div className="list-container">
            <TodoList doCardElement={doItemsListElement}/>
            <DoneList />
          </div>
        </div>
    </main>

  );
}

export default TodoPage;