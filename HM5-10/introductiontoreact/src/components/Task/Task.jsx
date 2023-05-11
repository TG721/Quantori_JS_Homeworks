import {ReactComponent as Logo} from './images/trash.svg';
import './Task.css';

export default function Task(props){
    return (
        <li className="task" id={props.id}>
        <label className="taskLabel" htmlFor="task">
            <input type="checkbox" />
            <span className="title">{props.title}</span>
        </label>
        <Logo className="trashButton" alt="icon of bin" />
        </li>
    )
}