import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginInput:React.FC = () => {

    const navigate = useNavigate();

    const [username,setUsername] = React.useState<string>("");

    const [isWarnUsername,setIsWarnUsername] = React.useState<boolean>(false);

    function saveUserName() {
        if (username) {
            localStorage.setItem('username', username);
            navigate('/todoApp');
        } else {
            if (!isWarnUsername) {
                setIsWarnUsername(true);

                setTimeout(()=>{
                setIsWarnUsername(false);
                },1500)
            };
        };
    };

    return (

        <div className="loginInput-container">
            <div className='usernameText-container'>
                <input  className={ isWarnUsername ? 'shaking' : '' } 
                        id='usernameText'
                        type='text' 
                        onChange={(event)=> setUsername(event.target.value)} 
                        value={username} 
                        placeholder='Username'
                        maxLength={12}/>
            </div>
            <div className='login-btn'>
                <button type='button' onClick={saveUserName}>Login</button>
            </div>
        </div>

    );
}

export default LoginInput;