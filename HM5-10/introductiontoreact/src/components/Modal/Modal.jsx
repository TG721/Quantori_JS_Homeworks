import React, { useState, useEffect } from 'react';
import Button from "../Button/Button";
import Header from "../Header/Header";
import Input from "../Input/Input";
import './Modal.css';
import Overlay from '../Overlay/Overlay';

export default function Modal(props){
    const [text, setText] = useState('');
    const [isTextEntered, setIsTextEntered] = useState(true);
    const [showOverlay, setOverlay] = useState(props.showModal);

    useEffect(() => {
        // console.log(text);
        if (text.trim() !== "") {
          setIsTextEntered(true);
        } else {
          setIsTextEntered(false);
        }
      }, [text]);

      useEffect(() => {
        setOverlay(props.showModal);
      }, [props.showModal]);

    const handleInputChange = (event) => {
      setText(event.target.value); //  an asynchronous function
    };

    const handleTaskAddition = () => {
        if(isTextEntered===true) 
        {
            const taskData = {title: text, isCompleted: false}
            //add on local server
            fetch('http://localhost:3001/tasks',{
            method : "POST",
            headers : {
            'Content-Type' : 'application/json',
            },
            body : JSON.stringify(taskData),
            })
            .then(response => response.json())
            .then(() =>
            {
                console.log("success");
                props.setShowModal(false);
        
                setText(''); // Clear the input text
                setIsTextEntered(false); // Reset the state of isTextEntered
            })
        .catch(error => console.log(error))
        }
            
    }
    

    return (
        <>
        <Overlay className={`overlay ${showOverlay ? 'shown' : 'hidden'}`} />
        <div className={props.className}>
            <Header className="modalHeader" title="Add New Task" importance="h3" />
            <Input placeholder="Task Title" className="modalInput" text={text} onChange={handleInputChange} />
            <div className="buttonsWrapper">
            <Button className="button cancel" title="Cancel" onClick={() => props.setShowModal(false)} />
            <Button className={`button addTask ${isTextEntered ? 'active' : 'notActive'}`} title="Add Task" onClick={handleTaskAddition} />
            </div>
        </div>
        </>
    )
}