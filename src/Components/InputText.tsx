import * as React from 'react';

export interface inputTextInterface {
  state:string;
  useState:React.Dispatch<React.SetStateAction<string>>;
  label:string;
}

const InputText:React.FC<inputTextInterface> = ({state, useState,label}) => {

  return (

    <div className='inputText-container'>
      <input id='inputText'type='text' onChange={(event)=> useState(event.target.value)} value={state} placeholder={label}/>
    </div>

  );
}

export default InputText;