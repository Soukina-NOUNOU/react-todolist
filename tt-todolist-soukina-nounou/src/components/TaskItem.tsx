import React, { useState } from 'react';

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

  return (
    <div>
      <p>{task.title}</p>
      <button onClick={handleToggle}>
        {completed ? 'Terminée' : 'En cours'}
      </button>
    </div>
  );
}

export default TaskItem;