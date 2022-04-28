import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

 const DoneList:React.FC = () => {

  const doneList = useSelector((state:RootState) => state.todo.doneList);

  return (

    <div className='doneList-container'>
         <div className="doneList-title">
           <h1>DONE LIST</h1>
        </div>
    </div>

  );
}

export default DoneList;