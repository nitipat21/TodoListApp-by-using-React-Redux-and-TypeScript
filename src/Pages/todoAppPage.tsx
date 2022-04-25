import * as React from 'react';
import GreetingComponent from '../Components/greetingText';

const TodoPage:React.FC = () => {

  return (
      
    <main className='todoPage'>
        <div className='todoPage-container'>
          <nav>
            <GreetingComponent />
          </nav>
        </div>
    </main>

  );
}

export default TodoPage;