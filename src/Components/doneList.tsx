import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export interface doneListInterface{
  doneCardElement:JSX.Element[]
}

 const DoneList:React.FC<doneListInterface> = (props) => {

  return (

    <div className='doneList-container'>
         <div className="doneList-title">
           <h1>DONE LIST</h1>
        </div>
        {props.doneCardElement}
    </div>

  );
}

export default DoneList;