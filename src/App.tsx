import React from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
// import Card from '@mui/material/Card';
import AccountProvider from './context/accountContext'
import About from './routes/aboutme';
import Topbar from './components/topbar';
import './App.css';

function App() {
  return (
    <BrowserRouter> 
      <AccountProvider>    
        
        <Topbar />
        <div style={{marginBottom: "5rem"}} />
        <Routes>
          <Route path='/' element={<> Blog goes here </>} />
          <Route path='/about' element={<About/>}/>
        </Routes>
        
      </AccountProvider>
    </BrowserRouter>
    
  );
}

export default App;
