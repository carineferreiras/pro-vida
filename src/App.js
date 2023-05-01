import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Vacinas from './components/pages/Vacinas';
import Medicina from './components/pages/Medicina';


function App() {
  return (
      <>
        <Router>
          <Navbar />
          <Routes>
          <Route path='/' exact element={<Home/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/vacinas' element={<Vacinas/>} />
            <Route path='/medicina' element={<Medicina/>} />
            
          </Routes>
        </Router>
      </>
       
  );
}

export default App;