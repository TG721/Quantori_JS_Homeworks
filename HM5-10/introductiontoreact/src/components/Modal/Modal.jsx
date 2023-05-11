import Button from "../Button/Button";
import Header from "../Header/Header";
import Input from "../Input/Input";
import './Modal.css';

export default function Modal(){
    return (
        <div className="modal">
            <Header className="modalHeader" title="Add New Task" importance="h3" />
            <Input placeholder="Task Title" className="modalInput" />
            <div className="buttonsWrapper">
            <Button className="button cancel" title="Cancel"/>
            <Button className="button addTask" title="Add Task"/>
            </div>
        </div>
    )
}