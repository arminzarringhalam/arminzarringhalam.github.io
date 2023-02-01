import React from 'react';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Navbar from './Navbar';
// import Header from './Header';
import Home from './pages/Home';

function App() {
  return (
    <Router forceRefresh={true}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App;
