import * as React from 'react';

export interface ButtonInterface {
    text:string;
    onClick:React.MouseEventHandler<HTMLButtonElement>;
}

const Button:React.FC<ButtonInterface> = ({text,onClick}) => {

  return (

    <div className='Button-container'>
        <button type='button' onClick={onClick}>{text}</button>
    </div>

  );
}

export default Button;