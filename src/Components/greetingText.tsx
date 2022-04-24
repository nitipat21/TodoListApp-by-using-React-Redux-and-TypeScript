import * as React from 'react';

const Greeting:React.FC = () => {

  return (
      <div className='greeting-container'>
        <h1>Hi,<span className='username'>{ localStorage.getItem('username') ? localStorage.getItem('username') : "" }</span></h1>
      </div>
  );
}

export default Greeting;