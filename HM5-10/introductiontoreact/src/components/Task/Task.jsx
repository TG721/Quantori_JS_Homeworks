import React, { useEffect, useState } from 'react';
import {ReactComponent as Logo} from './images/trash.svg';
import './Task.css';

export default function Task(props){
    const [visible, setVisible] = useState(true);
    
    const handleDelete = () => {
        setVisible(false);
        fetch('http://localhost:3001/tasks/' + props.id, {
      method: 'DELETE',
      })
      .then(response => response.json())
      .then(() => {
        setVisible(false);
      })
      .catch(error => console.error(error));
      }

    return (
        <>
        {visible && (
          <li className="task" id={props.id}>
            <label className="taskLabel" htmlFor="task">
                <input type="checkbox" />
                <span className="title">{props.title}</span>
            </label>
            <Logo className="trashButton" alt="icon of bin" onClick={handleDelete} />
          </li>
        )}
      </>
    )

}