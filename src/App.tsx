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
              <Route path='/' element={
                <> 
                  Welcome to my small website. Here i will be uploading some cibersecurity blogs and some cibersecurity ctf like excersices, some based in my own malware investigations.
                  You can check some of this tasks on the top left corner of the site. In order to access the task you will need to login using a google account.
                </>} 
              />
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
