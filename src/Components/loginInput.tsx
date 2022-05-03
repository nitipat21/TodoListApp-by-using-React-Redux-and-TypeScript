import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginInput:React.FC = () => {

    const navigate = useNavigate();

    const [username,setUsername] = React.useState<string>("");

    function saveUserName() {
        if (username) {
            localStorage.setItem('username', username);
            navigate('/todoApp');
        } else {
            alert('please type your name')
        }
    };

    return (

        <div className="loginInput-container">
            <div className='usernameText-container'>
                <input id='usernameText'type='text' onChange={(event)=> setUsername(event.target.value)} value={username} placeholder='Username'/>
            </div>
            <div className='login-btn'>
                <button type='button' onClick={saveUserName}>Login</button>
            </div>
        </div>

    );
}

export default LoginInput;