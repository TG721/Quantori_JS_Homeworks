const header1 = new Header({text:"To Do List", importance:"h1"});
const search1 = new Search({
        placeholder:"Search Task", 
        style:"color:#838383; background-color:#F5F5F5;border-radius: 10px;border: 1px solid #D2D2D2; padding-left:10px"
    })
const newTaskButton = new Button({text:"+ New Task", color:"#0053CF", bgColor:"#3C86F426", width:"10%", class:"button"}); 

class App extends Component {
    constructor(props) {
        super(props);
    }
    
}

// console.log(header1.render()) //was only for debuuging purposes
document.getElementById('root').appendChild(new App({children: [
    header1.render(),
    search1.render(),
    newTaskButton.render(),
    createTask({text: "Task 1 title"})
]}).render());


function createTask(props) { //{text}
const labelVar = document.createElement('label');
const inputVar = document.createElement('input');
inputVar.type = "checkbox";
const spanVar = document.createElement('span');
spanVar.innerText = props.text;
const imgVar = document.createElement('img');
imgVar.src = "images/trash.svg";
imgVar.style.marginLeft = "100px";
labelVar.appendChild(inputVar);
labelVar.appendChild(spanVar);
return new Task({children: [labelVar,imgVar]}).render();
}