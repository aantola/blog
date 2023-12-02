import React from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
// import Card from '@mui/material/Card';
import AccountProvider from './context/accountContext'
import About from './routes/aboutme';
import BlogPost from './routes/blogpost';
import Topbar from './components/topbar';
import './App.css';

function App() {
  return (
    <BrowserRouter> 
      <AccountProvider>    
        <Topbar />
        <body className='mainContainer'> 
          <Routes>
            <Route path='/' element={<> Blog goes here </>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<BlogPost />} />
          </Routes>
        </body>
      </AccountProvider>
    </BrowserRouter>
    
  );
}

export default App;
