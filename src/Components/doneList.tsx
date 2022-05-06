import * as React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../store';
import { FaTrash } from "react-icons/fa";

export interface doneListInterface{
  doneCardElement:JSX.Element[]
}

 const DoneList:React.FC<doneListInterface> = (props) => {

  const dispatch = useDispatch();

  const slideToNextPage = () => {
    dispatch(actions.slidePageTo('todoListPage'))
  }

  const clearList = () => {
    dispatch(actions.clearDoneList())
    dispatch(actions.changeAlertText(`Done List is cleared`));
    setTimeout(()=>{
      dispatch(actions.changeAlertText(''));
    },1500)
  }

  return (

    <div className='doneList-container'>
         <div className="doneList-title">
           <h1>DONE LIST</h1>
           <button className='clear-btn' onClick={clearList} ><FaTrash /></button>
        </div>
        {props.doneCardElement}
        <h1 className='LeftArrow' onClick={slideToNextPage}>{'<'}</h1>
    </div>

  );
}

export default DoneList;