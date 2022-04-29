import * as React from 'react';

export interface inputTextInterface {
  state:string;
  setState:React.Dispatch<React.SetStateAction<string>>;
  label:string;
}

const InputText:React.FC<inputTextInterface> = ({state, setState,label}) => {

  return (

    <div className='inputText-container'>
      <input id='inputText'type='text' onChange={(event)=> setState(event.target.value)} value={state} placeholder={label}/>
    </div>
  );
}

export default InputText;