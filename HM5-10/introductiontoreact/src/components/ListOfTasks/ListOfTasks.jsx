import React, { useEffect, useState } from 'react';
import Task from "../Task/Task";

export default function ListOfTasks(){
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchTasks() {
            try {
                const response = await fetch(`http://localhost:30031/tasks`);
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
            <ul>
                {tasks.map(item => <Task key={item.id} id={item.id} title={item.title}/>)}
            </ul>
        )
      }

}