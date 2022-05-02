import React from 'react'

const DeadlineInput = () => {

    const [deadline,setDeadline] = React.useState("");

    const handleChange = (event:any) => {
        setDeadline(event.target.value);
    }

    return (

        <div className="deadlineInput-container">
            <input className='deadlineInput' type='date' value={deadline} onChange={handleChange}/>
        </div>

    )
}

export default DeadlineInput