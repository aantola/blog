import React from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';

import AccountProvider from './context/accountContext'
import Login from './routes/login';
import Topbar from './components/topbar';
import './App.css';

function App() {
  return (
    <BrowserRouter> 
      <AccountProvider>
        <Topbar />
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path='/' element={<> Blog goes here </>} />
              <Route path='/login' element={<Login/>}/>
            </Routes>
          </header>
        </div>
      </AccountProvider>
    </BrowserRouter>
    
  );
}

export default App;
