import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Modal from './components/Modal/Modal';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/tasks" element={<Home />} />
    <Route path="/Tasks/new" element={<Modal />} />
  </Routes>
  )
}

export default App;
