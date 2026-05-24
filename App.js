import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './features/taskSlice';

function App() {
  const [task, setTask] = useState('');

  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.tasks);

  const handleAddTask = () => {
    // Prevent empty tasks
    if (task.trim() === '') {
      return;
    }

    dispatch(addTask(task));

    setTask('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Task Manager</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          padding: '10px',
          width: '250px',
          marginRight: '10px',
        }}
      />

      <button onClick={handleAddTask}>Add Task</button>

      <h2>Tasks</h2>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;