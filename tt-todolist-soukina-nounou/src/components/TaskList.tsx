import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

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
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;