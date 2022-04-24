import * as React from 'react';

export interface inputTextInterface {
  state:string;
  useState:React.Dispatch<React.SetStateAction<string>>;
  label:string
}

const InputText:React.FC<inputTextInterface> = ({state, useState,label}) => {

  return (

    <div className='inputText-container'>
      <label htmlFor='inputText'>{label}</label>
      <input id='inputText'type='text' onChange={(event)=> useState(event.target.value)} value={state}/>
    </div>

  );
}

export default InputText;