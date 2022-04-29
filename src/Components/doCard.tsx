import * as React from 'react';
import { useDispatch } from 'react-redux';
import { actions, doItem } from '../store';

enum DoCardColor {
  lightPink,
  lightBlue,
  lightOrange,
  lightYellow
}

const DoCard:React.FC<doItem> = (props) => {

  const dispatch = useDispatch();
  const doRef = React.useRef<HTMLInputElement | null>(null);

  const [editDo,setEditDo] = React.useState(props.do)

  const removeDoItem = () => {
    dispatch(actions.removeTodo(props.id))
  };

  const editDoItem = () => {
    if (!props.isEdit) {
      dispatch(actions.editTodo(props.id))
    }
  }

  return (

    <div className={`doCard-container ${DoCardColor[props.color]}`}>
      <div className='doCard-doText'>
        {props.isEdit ? <h1><input type='text' value={editDo} onChange={(event)=>setEditDo(event.target.value)} ref={doRef}/></h1> : <h1>{props.do}</h1> }
        <h3>{doRef.current?.value}</h3>
      </div>
      <div className='doCard-button'>
        <button>StartDo</button>
        <button>PauseDo</button>
        <button>ResetDo</button>
        <button>Done</button>
        <button onClick={editDoItem}>Edit</button>
        <button onClick={removeDoItem}>Remove</button>
      </div>
    </div>

  );
}

export default DoCard;