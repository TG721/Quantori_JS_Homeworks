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
const allTasks = new List({children: [
    createTask({text: "Task 1 title"}),
    createTask({text: "Task 2 title"}), 
    createTask({text: "Task 3 title"})]})
const completedTasksHeader = new Header({text:"Completed tasks", importance:"h3"});
const completedTasks = new List({children: []});


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
    const newTask = createTask({text: text});
    allTasks.setState({children: [...allTasks.props.children, newTask]});
    modal.setState({display: "none"});
    overlay.setState({display: "none"});
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
inputVar.addEventListener("change", function(event) {
    if (this.checked) {
        console.log("Checkbox is checked");
        const parentElement = imgVar.parentElement; //li element
        // console.log(parentElement.firstChild.firstChild) // li > label > input
        parentElement.firstChild.firstChild.disabled = true;
        const index = Array.from(parentElement.parentElement.children).indexOf(imgVar);
        completedTasks.setState({children: [parentElement]});
        allTasks.removeItemAt(index);
      }
  });
const spanVar = document.createElement('span');
spanVar.innerText = props.text;
const imgVar = document.createElement('img');
imgVar.addEventListener("click", function(event) {
    const parentElement = imgVar.parentElement;
    const index = Array.from(parentElement.parentElement.children).indexOf(imgVar);
    allTasks.removeItemAt(index);
    parentElement.remove();
  });
imgVar.src = "images/trash.svg";
imgVar.className = "imgButton";
imgVar.style.marginLeft = "100px";
labelVar.style.display = "inline-block";
imgVar.style.display = "inline-block";
labelVar.style.width = "400px";
labelVar.appendChild(inputVar);
labelVar.appendChild(spanVar);

return new Task({children: [labelVar,imgVar]}).render();
}
