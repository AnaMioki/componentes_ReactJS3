import React, { useState } from 'react';

function ListaChave() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'ovo' },
    { id: 2, text: 'salada' },
    { id: 3, text: 'oregano' },
  ])

  const handleRemoveTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => handleRemoveTask(task.id)}>Remover</button>
        </li>
      ))}
    </ul>
  )
}

export default ListaChave;