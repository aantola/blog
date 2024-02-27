import React from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
// import Card from '@mui/material/Card';
import AccountProvider from 'context/accountContext'
import About from 'routes/aboutme';
import BlogPost from 'routes/blogpost';
import Topbar from 'components/topbar';
import Tasks from 'routes/tasks';
import './App.css';

function App() {
  return (
    <SnackbarProvider maxSnack={3} >    
      <BrowserRouter> 
        <AccountProvider>    
          <Topbar />
          <div className='mainContainer'> 
            <Routes>
              <Route path='/' element={<> Blog goes here </>} />
              <Route path='/about' element={<About/>}/>
              <Route path='/blog' element={<BlogPost />} />
              <Route path='/tasks' element={<Tasks />} />
            </Routes>
          </div>
        </AccountProvider>
      </BrowserRouter>
    </SnackbarProvider>
    
  );
}

export default App;
