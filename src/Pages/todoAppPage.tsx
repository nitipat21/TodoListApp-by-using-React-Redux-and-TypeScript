import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoInput from '../Components/todoInput';
import DoCard from '../Components/doCard';
import DoneList from '../Components/doneList';
import GreetingComponent from '../Components/greetingText';
import Option from '../Components/options';
import TodoList from '../Components/todoList';
import { actions, doItem, RootState } from '../store';

const TodoPage:React.FC = () => {

  const dispatch = useDispatch();
  
  if(!localStorage.getItem('todo')) {
    localStorage.setItem('todo', JSON.stringify(useSelector((state:RootState) => state.todo)));
  }

  const doItemsList = useSelector((state:RootState) => state.todo.doItemsList);

  const doneList = useSelector((state:RootState) => state.todo.doneList);

  const onPage = useSelector((state:RootState) => state.todo.onPage);

  const updateState = () => {
    const localState = JSON.parse(localStorage.getItem('todo')|| '');
    dispatch(actions.updateState(localState));
  };

  const formatDate = (date:Date) => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  };

  const doItemsListElement = doItemsList.map((doItem:doItem) => {
    return  <DoCard  id={doItem.id}
                    do={doItem.do}
                    doDeadline={doItem.doDeadline}
                    isStart={doItem.isStart}
                    isDone={doItem.isDone}
                    isEdit={doItem.isEdit}
                    isPause={doItem.isPause}
                    doTime={doItem.doTime}
                    color={doItem.color}
                    key={doItem.id}
            />
  });

  const doneItemsListElement = doneList.map((doneItem:doItem) => {
    return  <DoCard  id={doneItem.id}
                    do={doneItem.do}
                    doDeadline={doneItem.doDeadline}
                    isStart={doneItem.isStart}
                    isDone={doneItem.isDone}
                    isEdit={doneItem.isEdit}
                    isPause={doneItem.isPause}
                    doTime={doneItem.doTime}
                    color={doneItem.color}
                    key={doneItem.id}
            />
  });

  React.useLayoutEffect(()=>{
    updateState();
  },[]);

  React.useEffect(()=> {
    const today = new Date();
    
    dispatch(actions.updateTodayDate(formatDate(today)));
  },[]);

  return (
      
    <main className='todoPage'>
        <div className='todoPage-container'>
          <nav>
            <GreetingComponent />
            <div className='addTodo-container'>
              <TodoInput />
              <Option />
            </div>
          </nav>
          <div className={`list-container ${onPage}`}>
            <TodoList doCardElement={doItemsListElement}/>
            <DoneList doneCardElement={doneItemsListElement}/>
          </div>
        </div>
    </main>

  );
}

export default TodoPage;