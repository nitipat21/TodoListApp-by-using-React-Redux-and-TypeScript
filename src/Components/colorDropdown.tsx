import { useDispatch, useSelector } from 'react-redux';
import { actions, RootState } from '../store';
import { DoCardColor } from './doCard';


const ColorDropdown = () => {

    const dispatch = useDispatch();

    const colorIndexState = useSelector((state:RootState) => state.todo.doCardColorIndex)

    const handleChange = (event:any) => {
        dispatch(actions.fixCardColor(event.target.value));
    }

    return (

        <div className='colorDropdown-container'>
            <select className={`text-${DoCardColor[colorIndexState]} colorDropDown`} name='fixColor' id='fixColor' value={colorIndexState} onChange={handleChange}>
                <option className='text-lightPink' value='0'>Light Pink</option>
                <option className='text-lightBlue' value='1'>Light Blue</option>
                <option className='text-lightOrange' value='2'>Light Orange</option>
                <option className='text-lightYellow' value='3'>Light Yellow</option>
            </select>
        </div>
        
    )
}

export default ColorDropdown;