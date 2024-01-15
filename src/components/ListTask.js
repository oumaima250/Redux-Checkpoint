import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = ({ showDone, onFilter }) => {
  const tasks = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (showDone === 'all') {
      return true;
    } else if (showDone === 'done') {
      return task.isDone;
    } else {
      return !task.isDone;
    }
  });

  return (
    <div className="list">
      <div>
        <button onClick={() => onFilter('all')}>All</button>
        <button onClick={() => onFilter('done')}>Done</button>
        <button onClick={() => onFilter('not-done')}>Not Done</button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;