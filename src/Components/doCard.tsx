import * as React from 'react';
import { doItem } from '../store';

 const DoCard:React.FC<doItem> = (props) => {

  return (

    <div className='doCard-container'>
        {<h1>{props.do}</h1>}
    </div>

  );
}

export default DoCard;