import * as React from 'react';
import GreetingComponent from '../Components/greetingText';
import InputText from '../Components/InputText';

const TodoPage:React.FC = () => {

  const [todo,setTodo] = React.useState<string>("");

  return (
      
    <main className='todoPage'>
        <div className='todoPage-container'>
          <nav>
            <GreetingComponent />
            <InputText state={todo} useState={setTodo} label='What are you gonna do?' />
          </nav>
        </div>
    </main>

  );
}

export default TodoPage;