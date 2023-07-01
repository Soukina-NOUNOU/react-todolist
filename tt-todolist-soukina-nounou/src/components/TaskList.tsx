import React, { useEffect, useState } from 'react';


function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/groupevaleco/tt-fake-todolist/tasks')
      .then(response => response.json())
      .then(data => {
        setTasks(data);
      })
  }, []);

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default TaskList;