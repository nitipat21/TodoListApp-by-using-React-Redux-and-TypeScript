import * as React from 'react';

export interface ButtonComponentInterface {
    text:string;
    onClick:React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonComponent:React.FC<ButtonComponentInterface> = ({text,onClick}) => {

  return (

    <div className='Button-container'>
        <button type='button' onClick={onClick}>{text}</button>
    </div>

  );
}

export default ButtonComponent;