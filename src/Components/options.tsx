import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, RootState } from '../store';
import { FaWrench } from "react-icons/fa";
import ColorDropdown from './colorDropdown';
import DeadlineInput from './deadlineInput';

const Option:React.FC = () => {

    const dispatch = useDispatch();

    const alertText = useSelector((state:RootState) => state.todo.alertText);

    const checkedDeadlineState = useSelector((state:RootState) => state.todo.setDeadline);

    const checkedFixColorState = useSelector ((state:RootState) => state.todo.setfixColor);

    const showOptionsState = useSelector ((state:RootState) => state.todo.showOptions);

    const toggleDeadlineCheck = () => {
      dispatch(actions.toggleSetDeadline(!checkedDeadlineState));
    };
    
    const toggleFixColorCheck = () => {
      dispatch(actions.toggleSetFixColor(!checkedFixColorState));
    };

    const toggleShowOptions = () => {
      dispatch(actions.toggleShowOptions(!showOptionsState));
    };

  return (
            <div className="options">
              <div className="options-text">
                <h6 onClick={toggleShowOptions}><FaWrench className={showOptionsState ? 'wrench showOption' : 'wrench closeOption'}/></h6>
                <h6 className={alertText ? '' : 'hide'}>{alertText}</h6>
              </div>
              {showOptionsState && 
                <div className='options-container'>
                    <div className="deadline-container">
                      <div className="deadline-checkbox">
                        <input type='checkbox' name='deadline' checked={checkedDeadlineState} onChange={toggleDeadlineCheck}/>
                        <label htmlFor='deadline'>Deadline</label>
                      </div>
                      { checkedDeadlineState ? <DeadlineInput /> : "" }
                    </div>
                    <div className="fixColor-container">
                      <div className="fixColor-checkbox">
                        <input type='checkbox' name='fixColor' checked={checkedFixColorState} onChange={toggleFixColorCheck}/>
                        <label htmlFor='deadline'>Fix Card Color</label>
                      </div>
                      { checkedFixColorState ? <ColorDropdown /> : "" }
                    </div>      
                </div> 
              }
              
            </div>
  );
}

export default Option;