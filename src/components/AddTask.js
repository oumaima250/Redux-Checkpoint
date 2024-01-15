import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';

const AddTask = () => {
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(description));
    setDescription('');
  };

  return (
    <div className="note">
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit" className="add-task-button">Add Task</button>
    </form>
    </div>
  );
};

export default AddTask;