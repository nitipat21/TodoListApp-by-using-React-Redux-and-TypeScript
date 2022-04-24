import * as React from 'react';

const TodoPage:React.FC = () => {

  

  return (
      
    <main className="todoPage">
        <div className="todoPage-container">
          <div className="greeting">
            <h1>Hi,
              <span className='username'>{ localStorage.getItem("username") ? localStorage.getItem("username") : ""}</span>
              What are gonna do today?</h1>
          </div>
        </div>
    </main>

  );
}

export default TodoPage;