import * as React from 'react';
import { doItem } from '../store';

 const DoCard:React.FC<doItem> = (props) => {

  return (

    <div className='doCard-container'>
      <div className="doCard-doText">
        <h1>{props.do}</h1>
      </div>
      <div className="doCard-button">
        <button>StartDo</button>
        <button>Done</button>
        <button>Edit</button>
        <button>Remove</button>
      </div>
    </div>

  );
}

export default DoCard;