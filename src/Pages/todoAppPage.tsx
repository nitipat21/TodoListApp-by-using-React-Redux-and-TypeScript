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

  const stateSave = useSelector((state:RootState)=> state.todo);
  localStorage.setItem("state",JSON.stringify(stateSave));

  const getState = localStorage.getItem("state");

  const doItemsList = useSelector((state:RootState) => state.todo.doItemsList);

  const doneList = useSelector((state:RootState) => state.todo.doneList);

  const [doInput,setDoInput] = React.useState("");

  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(actions.addTodo(doInput));
    setDoInput("");
  };

  const doItemsListElement = doItemsList.map((doItem) => {
    return  <DoCard  id={doItem.id}
                    do={doItem.do}
                    isStart={doItem.isStart}
                    isDone={doItem.isDone}
                    isEdit={doItem.isEdit}
                    isPause={doItem.isPause}
                    doTime={doItem.doTime}
                    color={doItem.color}
                    key={doItem.id}
            />
  });

  const doneItemsListElement = doneList.map((doneItem) => {
    return  <DoCard  id={doneItem.id}
                    do={doneItem.do}
                    isStart={doneItem.isStart}
                    isDone={doneItem.isDone}
                    isEdit={doneItem.isEdit}
                    isPause={doneItem.isPause}
                    doTime={doneItem.doTime}
                    color={doneItem.color}
                    key={doneItem.id}
            />
  });

  React.useEffect(()=>{
    const getState = localStorage.getItem("state");

    getState ? console.log(JSON.parse(getState)) : "";

  },[])

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
            <DoneList doneCardElement={doneItemsListElement}/>
          </div>
        </div>
    </main>

  );
}

export default TodoPage;