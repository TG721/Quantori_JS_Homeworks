import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Task from "../Task/Task";

export default function ListOfTasks(){
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchTasks() {
            try {
                const response = await fetch(`http://localhost:3001/tasks`);
                if (!response.ok) {
                  throw new Error('Failed to fetch tasks');
                }
                const tasks = await response.json();
                setTasks(tasks);
              } catch (error) {
                setError(error.message);
              }
        }
    
        fetchTasks();
      }, [tasks]);

      if (error) {
        return <div>Error: {error}</div>;
      }
      else {
        return (
            <>
            <Header className="listHeader" title="All tasks" importance="h3" />
            <ul>
            {tasks.filter(task => !task.isCompleted).map(task => (
                <Task key={task.id} id={task.id} title={task.title} />
            ))}
            </ul>
            <Header className="listHeader" title="Completed tasks" importance="h3"/>
            <ul>
            {tasks.filter(task => task.isCompleted).map(task => (
                <Task key={task.id} id={task.id} title={task.title} />
            ))}
            </ul>
            </>
        )
      }

}