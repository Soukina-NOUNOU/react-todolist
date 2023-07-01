import React, { useState } from 'react';
import './CSS/TaskList.css'

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  const [completed, setCompleted] = useState(task.completed);

  const handleToggle = () => {
    setCompleted(!completed);
  };

  const buttonStyle = {
    backgroundColor: completed ? 'green' : '',
  };

  return (
    <div>
      <p className="title">{task.title}</p>
      <button className='button' style={buttonStyle} onClick={handleToggle}>
        {completed ? 'Terminée' : 'En cours'}
      </button>
    </div>
  );
}

export default TaskItem;