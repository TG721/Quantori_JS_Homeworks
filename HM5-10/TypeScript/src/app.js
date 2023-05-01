import {Component} from "./base_classes.js";
import {Header} from "./components/Header/Header.js";
import {Button} from "./components/Button/Button.js";
import {List} from "./components/List/List.js";
import {Input} from "./components/Input/Input.js";
import {Task} from "./components/Task/Task.js";
import {Modal} from "./components/Modal/Modal.js";
import {Overlay} from "./components/Overlay/Overlay.js";

import style from './main.css';
import trash from './images/trash.svg';

const headerTop = new Header({text:"To Do List", importance:"h1"});
const search = new Input({
        placeholder:"Search Task", 
        width: "60%",     
    })
search.element.addEventListener("input", function(event) {
    const inputText = search.element.value;
    for (let i = 0; i < allTasks.element.children.length; i++){
      const currentTask = allTasks.element.children[i];
      const taskTitle = currentTask.firstChild.children[1].innerText;
      console.log("input text: ", inputText, " taskTitle: ", taskTitle)
      if((taskTitle.toLowerCase()).includes((inputText).toLowerCase())) currentTask.style.display = "block"
      else currentTask.style.display = "none"
    }

  });
const newTaskButton = new Button({text:"+ New Task", color:"#0053CF", bgColor:"#3C86F426", width:"15%", class:"button",   onClick: function() {
    addTaskButton.setState({bgColor: "#D3D3D3"}); //make button color grey 
    modalInput.setState({isEmpty: true});         //empty input field 
    modal.setState({display: "block"});           //show modal
    overlay.setState({display: "block"});         //show overlay
  }}); 
const allTasksHeader = new Header({text:"All tasks", importance:"h3"});
const allTasks = new List({children: []})
const completedTasksHeader = new Header({text:"Completed tasks", importance:"h3"});
const completedTasks = new List({children: []});


let responseArray = [];
let listSize = 0;

loadTasks();

const modalHeader = new Header({text:"Add New Task", importance:"h3", style:"text-align: center"});
const modalInput = new Input({placeholder:"Task Title", width: "90%", marginLeft: "20px"});
const cancelButton = new Button({text:"Cancel", color:"#0053CF", bgColor:"white", width:"30%", class:"button", onClick: function() {
    modal.setState({display: "none"});
    overlay.element.style.display = "none"
  }}); 
const addTaskButton = new Button({text:"Add Task", color:"white", bgColor:"#D3D3D3", width:"30%", class:"button", onClick: function() {
    modal.setState({display: "block"});
    overlay.setState({display: "block"});
    const inputResult = modalInput.element.value;
    if(inputResult != null && inputResult.trim(' ')!=""){
    const text = inputResult;
    const newTask = createTask({text: text, id: listSize+1});
    allTasks.setState({children: [...allTasks.props.children, newTask]});
    const taskData = {id : null, title : text, isCompleted : false}
    // console.log(taskData);
    //add on local server
      fetch('http://localhost:3000/tasks',{
        method : "POST",
        headers : {
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify(taskData),
      })
      .then(response => response.json())
      .then(() =>
      {console.log("success");
      modal.setState({display: "none"})
      overlay.setState({display: "none"});
      listSize++;
    })
    .catch(error => console.log(error))
    }
  }}); 
const buttonsWrapper = new Component({children: [cancelButton.render(), addTaskButton.render()], style:"text-align: center; margin: 150px 0px 0px -40px"});
modalInput.element.addEventListener("input", function(event) {
    if(modalInput.element.value.trim(' ') != "") addTaskButton.setState({bgColor: "#3C86F4"})
    else addTaskButton.setState({bgColor: "#D3D3D3"});
});

const overlay = new Overlay();
const modal = new Modal({children: [modalHeader.render(), modalInput.render(), buttonsWrapper.render()]});
class App extends Component {
    constructor(props) {
        super(props);
    }
    
}
var a = new createTask({text: "Task 1 title"});
// console.log(header1.render()) //was only for debugging purposes
document.getElementById('root').appendChild(new App({children: [
    headerTop.render(),
    search.render(),
    newTaskButton.render(),
    allTasksHeader.render(),
    allTasks.render(),
    completedTasksHeader.render(),
    completedTasks.render(),
    overlay.render(),
    modal.render()

    
]}).render());


function createTask(props) { //{text}
const labelVar = document.createElement('label');
const inputVar = document.createElement('input');
inputVar.type = "checkbox";
if(props.isCompleted) {
  inputVar.checked = true;
  inputVar.disabled = true;
}
else {
  inputVar.checked = false;
}
inputVar.addEventListener("change", function(event) {
    if (this.checked) {
        //modify element in json server
        const taskData = {id : props.id, title : props.text, isCompleted : true}
        fetch('http://localhost:3000/tasks/' + props.id, {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData),
        })
      .then(response => response.json())
      .then(() => {
        console.log("data was successfuly modified");
        console.log("Checkbox is checked");
        const parentElement = imgVar.parentElement;
        parentElement.firstChild.firstChild.disabled = true;
        const index = Array.from(parentElement.parentElement.children).indexOf(imgVar);
        completedTasks.setState({children: [parentElement]});
        allTasks.removeItemAt(index);
      })
      .catch(error => console.error(error))
      }
  });
const spanVar = document.createElement('span');
spanVar.innerText = props.text;
const imgVar = document.createElement('img');
imgVar.addEventListener("click", function(event) {
    const parentElement = imgVar.parentElement;
    const index = Array.from(parentElement.parentElement.children).indexOf(imgVar);
    fetch('http://localhost:3000/tasks/' + parentElement.id, {
    method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => {
      allTasks.removeItemAt(index);
      parentElement.remove();
    })
    .catch(error => console.error(error))
  });
imgVar.src = trash;
imgVar.className = "imgButton";
imgVar.style.marginLeft = "100px";
labelVar.style.display = "inline-block";
imgVar.style.display = "inline-block";
labelVar.style.width = "400px";
labelVar.appendChild(inputVar);
labelVar.appendChild(spanVar);

return new Task({children: [labelVar,imgVar], id: props.id}).render();
}


//seperate functions

function loadTasks(){
  //make a request
const request = new XMLHttpRequest();
//getting Tasks
request.open("GET","http://localhost:3000/tasks");
request.send()
request.onload = ()=>{
    // console.log(request);
    if(request.status===200){
        responseArray = JSON.parse(request.response)
        listSize = responseArray.length;
        let allTasksArray = [];
        let completedTasksArray = [];
        for(let i =0; i<responseArray.length; i++){
          if(responseArray[i].isCompleted==false)  {
            const task = createTask({text: responseArray[i].title, id: responseArray[i].id, isCompleted: false });
            allTasksArray.push(task)
          }
          else {
            const task = createTask({text: responseArray[i].title, id: responseArray[i].id, isCompleted: true });
            completedTasksArray.push(task)
          }
        }
        allTasks.setState({children: allTasksArray});
        completedTasks.setState({children: completedTasksArray});
    }
    else {
        console.log(`error ${request.status}`);

    }

}
}