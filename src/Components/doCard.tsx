import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, doItem, RootState } from '../store';
import Timer from './timer';

export enum DoCardColor {
  lightPink,
  lightBlue,
  lightOrange,
  lightYellow
}

const DoCard:React.FC<doItem> = (props) => {

  const dispatch = useDispatch();

  const doRef = React.useRef<HTMLInputElement>(null);

  const todayDate = useSelector((state:RootState) => state.todo.todayDate);

  const [editDo,setEditDo] = React.useState<string>(props.do);

  const [time,setTime] = React.useState<number>(props.doTime);

  const [doDeadline,setDoDeadline] = React.useState<string>(props.doDeadline);

  const [cardColor,setCardColor] = React.useState<any>(props.color);

  const removeDoItem = () => {
    dispatch(actions.removeTodo(props.id))
  };

  const editDoItem = () => {

    if(props.isEdit) {
      dispatch(actions.editTodo({ id:props.id, newDoText:editDo, newDoDeadline:doDeadline, newCardColor:cardColor }));
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

  const checkDeadline = () => {
    if (props.doDeadline) {
      const thisDoDeadline = parseInt(props.doDeadline.replace(/-/g, ''));
      const today = parseInt(todayDate.replace(/-/g, ''));

      if (thisDoDeadline - today > 0) {
        return ''
      } else if (thisDoDeadline - today === 0) {
        return 'todayDeadline'
      } else if (thisDoDeadline - today < 0) {
        return 'warnDeadline'
      }
    } else {
      return '';
    }
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
  },[time]);

  return (

    <div className={`doCard-container ${DoCardColor[props.color]} ${props.isDone ? 'done' : '' }`}>
      { props.isEdit ? 
        <div className='doCard-editContainer'>
          <input className='editDoText' type='text' value={editDo} onChange={(event)=>setEditDo(event.target.value)} ref={doRef}/>
          <input className='editDoDeadline' type='date' value={doDeadline} onChange={(event)=>setDoDeadline(event.target.value)} min={todayDate}/>
          <select className={`colorDropDown text-${DoCardColor[props.color]}`} value={cardColor} onChange={(event)=>setCardColor(event.target.value)}>
            <option className='text-lightPink' value='0'>Light Pink</option>
            <option className='text-lightBlue' value='1'>Light Blue</option>
            <option className='text-lightOrange' value='2'>Light Orange</option>
            <option className='text-lightYellow' value='3'>Light Yellow</option>
          </select>
        </div>
        :
        <div className='doCard-doText'>
        <h1 className={`${props.isDone ? 'done-text' : '' }`}>{props.do}</h1>
        <div className="doCard-deadlineText">
          <h6>Deadline:</h6>
          <h3 className={`${props.isDone ? 'done-text' : '' }${checkDeadline()}`}>{checkDeadline() === 'todayDeadline' ? 'today': props.doDeadline}</h3>
        </div>
        </div>
      }
      <div className='doCard-button'>
        <div className='timer-button'>
          <button className={props.isEdit ? 'disable' : ''} onClick={startDoItem}>{ props.isStart ?  <Timer time={time} /> : 'StartDo' }</button>
          <button className={props.isEdit ? 'disable' : ''} onClick={pauseDoItem}>PauseDo</button>
          <button className={props.isEdit ? 'disable' : ''} onClick={resetDoItem}>ResetDo</button>
        </div>
        <div className='utility-button'>
          <button className={props.isEdit ? 'edit' : ''} onClick={editDoItem}>Edit</button>
          <button className={`${props.isEdit ? 'disable' : ''}${props.isDone ? 'doneButton' : ''}`} onClick={doneDoItem}>Done</button>
          <button className={props.isEdit ? 'disable' : ''} onClick={removeDoItem}>Remove</button>
        </div>
      </div>
    </div>

  );
}

export default DoCard;