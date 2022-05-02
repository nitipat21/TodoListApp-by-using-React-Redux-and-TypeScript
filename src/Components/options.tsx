import * as React from 'react';

const Option:React.FC = () => {

    const [showOptions,setShowOptions] = React.useState(false);

    const [isCheckDeadline,setIsCheckDeadline] = React.useState(false);

    const [isFixColor,setIsFixColor] = React.useState(false);

    const toggleDeadlineCheck = () => {
        setIsCheckDeadline(!isCheckDeadline);
      };
    
      const toggleFixColorCheck = () => {
        setIsFixColor(!isFixColor);
      };

  return (
            <div className="options">
              <div className="options-text">
                <h6 onClick={()=>setShowOptions(!showOptions)}><span>{showOptions ? '-' : '+'}</span>more options</h6>
              </div>
              {showOptions && 
                <div className='options-container'>
                    <div className="deadline-container">
                      <div className="deadline-checkbox">
                        <input type='checkbox' name='deadline' checked={isCheckDeadline} onChange={toggleDeadlineCheck}/>
                        <label htmlFor='deadline'>Deadline</label>
                      </div>
                      { isCheckDeadline ? <input type='date' /> : "" }
                    </div>
                    <div className="fixColor-container">
                      <div className="fixColor-checkbox">
                        <input type='checkbox' name='fixColor' checked={isFixColor} onChange={toggleFixColorCheck}/>
                        <label htmlFor='deadline'>Fix Card Color</label>
                      </div>
                      { isFixColor ? "Drop down" : "" }
                    </div>      
                </div> 
              }
              
            </div>
  );
}

export default Option;