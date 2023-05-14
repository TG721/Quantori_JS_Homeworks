import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Weather from '../../components/Weather/Weather';
import ListOfTasks from '../../components/ListOfTasks/ListOfTasks'
import Modal from '../../components/Modal/Modal';
import './Home.css'


function Home() {
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');

  return (
    <div className="home">
      <div className="inLineWrapper">
      <Header title="To Do List" importance="h1"/>
      <Weather location="Tbilisi"/>
      </div>
      <div className='inLineWrapper'>
      <Input placeholder="Search Task" className="search input"  text={searchText} onChange={(event) => setSearchText(event.target.value)}/> 
      <Button title="+ New Task" className="newTaskButton button" onClick={() => setShowModal(true)}/>
      </div >
      <ListOfTasks searchText={searchText} />
      <Modal showModal={showModal} setShowModal={setShowModal} className={`modal ${showModal ? 'shown' : 'hidden'}`} />
    </div>
  );
}

export default Home;
