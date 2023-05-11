import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Weather from './components/Weather/Weather';
import Task from './components/Task/Task';
import ListOfTasks from './components/ListOfTasks/ListOfTasks'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="inLineWrapper">
      <Header title="To Do List" importance="h1"/>
      <Weather location="Tbilisi"/>
      </div>
      <div className='inLineWrapper'>
      <Input placeholder="Search Task" className="search input"/>
      <Button title="+ New Task" className="newTaskButton button"/>
      </div >
      <ListOfTasks />
    </div>
  );
}

export default App;
