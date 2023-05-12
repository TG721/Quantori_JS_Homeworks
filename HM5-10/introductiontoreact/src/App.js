import React, { useState } from 'react';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Weather from './components/Weather/Weather';
import ListOfTasks from './components/ListOfTasks/ListOfTasks'
import Modal from './components/Modal/Modal';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <div className="inLineWrapper">
      <Header title="To Do List" importance="h1"/>
      <Weather location="Tbilisi"/>
      </div>
      <div className='inLineWrapper'>
      <Input placeholder="Search Task" className="search input"/>
      <Button title="+ New Task" className="newTaskButton button" onClick={() => setShowModal(true)}/>
      </div >
      <ListOfTasks />
      <Modal showModal={showModal} setShowModal={setShowModal} className={`modal ${showModal ? 'shown' : 'hidden'}`} />
    </div>
  );
}

export default App;
