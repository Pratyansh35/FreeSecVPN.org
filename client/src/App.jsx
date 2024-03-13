import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import SignUp from './pages/signup';
import Login from './pages/loginpage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
