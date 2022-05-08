import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import FooterComponent from './Components/footer';
import HomePage from './Pages/HomePage';
import TodoPage from './Pages/todoAppPage';


const App:React.FC = () => {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/todoApp' element={<TodoPage />}></Route>
    </Routes>
    <FooterComponent />
    </>
  );
}

export default App;