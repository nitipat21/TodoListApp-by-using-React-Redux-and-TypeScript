import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actions, RootState } from '../store';

const DeadlineInput = () => {

    const dispatch = useDispatch();

    const deadlineDate = useSelector((state:RootState) => state.todo.deadlineDate);

    const todayDate = useSelector((state:RootState) => state.todo.todayDate);

    const [deadline,setDeadline] = React.useState(deadlineDate);
    
    const handleChange = (event:any) => {
        setDeadline(event.target.value);
        dispatch(actions.fixDeadlineDate(event.target.value));
    }

    return (

        <div className="deadlineInput-container">
            <input className='deadlineInput' type='date' value={deadline} onChange={handleChange} min={todayDate}/>
        </div>

    )
}

export default DeadlineInput;