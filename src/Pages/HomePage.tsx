import * as React from 'react';
import ButtonComponent from '../Components/buttonComponent';
import InputText from '../Components/InputText';
import { useNavigate } from 'react-router-dom'

const HomePage:React.FC = () => {

    const [username,setUsername] = React.useState<string>("");
    const navigate = useNavigate();

    function saveUserName() {
        if (username) {
            localStorage.setItem("username", username);
            navigate('/todoApp');
        } else {
            alert("please type your name")
        }
    };
    
    return (
        
        <main className='homePage'>
            <div className="homePage-containter">
                <div className='header'>
                    <h1>To Do App</h1>
                </div>
                <div className='paragraph'>
                    <p>This App made by using React + TypeScript + Pure CSS</p>
                </div>
                <InputText state={username} useState={setUsername} label="Username:"/>
                <ButtonComponent text="Enter" onClick={saveUserName}/>
            </div>
        </main>
    );
}

export default HomePage;