import * as React from 'react';
import { useDispatch } from 'react-redux';
import { actions, doItem } from '../store';
import Timer from './timer';

enum DoCardColor {
  lightPink,
  lightBlue,
  lightOrange,
  lightYellow
}

const DoCard:React.FC<doItem> = (props) => {

  const dispatch = useDispatch();

  const doRef = React.useRef<HTMLInputElement>(null);

  const [editDo,setEditDo] = React.useState<string>(props.do);

  const [time,setTime] = React.useState<number>(props.doTime);

  const removeDoItem = () => {
    dispatch(actions.removeTodo(props.id))
  };

  const editDoItem = () => {

    if(props.isEdit) {
      dispatch(actions.editTodo({ id:props.id, newDoText:editDo }));
    };

    dispatch(actions.setIsEdit(props.id));

    setTimeout(() => doRef.current?.focus(), 0);

  };

  const doneDoItem = () => {
    if (!props.isDone) {
      dispatch(actions.doneTodo({id:props.id, doTime:time}));
      dispatch(actions.removeTodo(props.id));
    }
  };

  const startDoItem = () => {
    if (!props.isStart) {
      dispatch(actions.startTodo(props.id));
    }
  };

  const pauseDoItem = () => {
    if (props.isStart) {
      dispatch(actions.pauseTodo({id:props.id, doTime:time}));
    } 
  };

  const resetDoItem = () => {
    if (props.isStart) {
      dispatch(actions.resetTodo(props.id));
      setTime(0);
    }
  };

  const updateTime = () => {
    dispatch(actions.updateTime({id:props.id,doTime:time}));
  };

  React.useEffect(()=>{
    let interval:any;
    
    if (props.isStart && !props.isPause) {
        interval = setInterval(()=>{
          setTime( previousTime => previousTime + 10);
        },10);
    };

    if (props.isPause) {
      clearInterval(interval);
    };

    return () => clearInterval(interval)

  },[props.isStart,props.isPause]);

  React.useEffect(()=>{
    updateTime();
  },[time])

  return (

    <div className={`doCard-container ${DoCardColor[props.color]} ${props.isDone ? "done" : "" }`}>
      <div className='doCard-doText'>
        {props.isEdit ? <input type='text' value={editDo} onChange={(event)=>setEditDo(event.target.value)} ref={doRef}/> : <h1>{props.do}</h1> }
      </div>
      <div className='doCard-button'>
        <div className="timer-button">
          <button onClick={startDoItem}>{ props.isStart ?  <Timer time={time} /> : 'StartDo' }</button>
          <button onClick={pauseDoItem}>PauseDo</button>
          <button onClick={resetDoItem}>ResetDo</button>
        </div>
        <div className="utility-button">
          <button onClick={editDoItem} className={ props.isEdit ? "edit" : "" }>Edit</button>
          <button onClick={doneDoItem}>Done</button>
          <button onClick={removeDoItem}>Remove</button>
        </div>
      </div>
    </div>

  );
}

export default DoCard;