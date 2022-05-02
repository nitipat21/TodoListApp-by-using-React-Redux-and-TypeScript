import { useState } from 'react';
import { DoCardColor } from './doCard';


const ColorDropdown = () => {

    const [color,setColor] = useState(0);

    const handleChange = (event:any) => {
        setColor(event.target.value)
    }

    return (

        <div className='colorDropdown-container'>
            <select className={`text-${DoCardColor[color]} colorDropDown`} name='fixColor' id='fixColor' value={color} onChange={handleChange}>
                <option className='text-lightPink' value='0'>Light Pink</option>
                <option className='text-lightBlue' value='1'>Light Blue</option>
                <option className='text-lightOrange' value='2'>Light Orange</option>
                <option className='text-lightYellow' value='3'>Light Yellow</option>
            </select>
        </div>
        
    )
}

export default ColorDropdown;