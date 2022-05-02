import * as React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../store';

export interface doneListInterface{
  doneCardElement:JSX.Element[]
}

 const DoneList:React.FC<doneListInterface> = (props) => {

  const dispatch = useDispatch();

  return (

    <div className='doneList-container'>
         <div className="doneList-title">
           <h1>DONE LIST</h1>
           <button className='clear-btn' onClick={()=>dispatch(actions.clearDoneList())} >Clear</button>
        </div>
        {props.doneCardElement}
    </div>

  );
}

export default DoneList;