import * as React from 'react';
import LoginInput from '../Components/loginInput';

const HomePage:React.FC = () => {
    
    return (
        
        <main className='homePage'>
            <div className='homePage-containter'>
                <div className='header'>
                    <h1>To Do App</h1>
                </div>
                <div className='paragraph'>
                    <p>This App made by using React + TypeScript + Pure CSS</p>
                </div>
                <LoginInput />
            </div>
        </main>
    );
}

export default HomePage;