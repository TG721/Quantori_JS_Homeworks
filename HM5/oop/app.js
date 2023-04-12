const headerTop = new Header({text:"To Do List", importance:"h1"});
const search = new Search({
        placeholder:"Search Task", 
        style:"color:#838383; background-color:#F5F5F5;border-radius: 10px;border: 1px solid #D2D2D2; padding-left:10px"
    })
const newTaskButton = new Button({text:"+ New Task", color:"#0053CF", bgColor:"#3C86F426", width:"15%", class:"button",   onClick: function() {
    const text = getTask();
    const newTask = createTask({text: text});
    allTasks.setState({children: [...allTasks.props.children, newTask]});
  }}); 
const allTasksHeader = new Header({text:"All tasks", importance:"h3"});
const allTasks = new List({children: [
    createTask({text: "Task 1 title"}),
    createTask({text: "Task 2 title"}), 
    createTask({text: "Task 3 title"})]})
const completedTasksHeader = new Header({text:"Completed tasks", importance:"h3"});
const completedTasks = new List({children: []});
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
    completedTasks.render()

    
]}).render());


function createTask(props) { //{text}
const labelVar = document.createElement('label');
const inputVar = document.createElement('input');
inputVar.type = "checkbox";
inputVar.addEventListener("change", function(event) {
    if (this.checked) {
        console.log("Checkbox is checked");
        completedTasks.setState({children: [imgVar.parentElement]});
        // console.log(imgVar.parentElement);
        console.log("Checkbox is not checked");
      }
  });
const spanVar = document.createElement('span');
spanVar.innerText = props.text;
const imgVar = document.createElement('img');
imgVar.addEventListener("click", function(event) {
    imgVar.parentElement.remove();
  });
imgVar.src = "images/trash.svg";
imgVar.style.marginLeft = "100px";
labelVar.appendChild(inputVar);
labelVar.appendChild(spanVar);

return new Task({children: [labelVar,imgVar]}).render();
}

function getTask() {
    console.log("dfd")
    var text = prompt("Please enter some text:");
    return text;
  }
  