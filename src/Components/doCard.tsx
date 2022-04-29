import * as React from 'react';
import { doItem } from '../store';

enum DoCardColor {
  lightPink,
  lightBlue,
  lightOrange,
  lightYellow
}

const DoCard:React.FC<doItem> = (props) => {

  return (

    <div className={`doCard-container ${DoCardColor[props.color]}`}>
      <div className='doCard-doText'>
        <h1>{props.do}</h1>
        <h3>Deadline: 01/02/2022</h3>
      </div>
      <div className='doCard-button'>
        <button>StartDo</button>
        <button>PauseDo</button>
        <button>ResetDo</button>
        <button>Done</button>
        <button>Edit</button>
        <button>Remove</button>
      </div>
    </div>

  );
}

export default DoCard;