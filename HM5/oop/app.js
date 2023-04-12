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
    document.createElement('task-item')
]}).render());
