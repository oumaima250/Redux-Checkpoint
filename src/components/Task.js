import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, removeTask } from '../actions';

const Task = ({ task }) => {
  const [description, setDescription] = useState(task.description);
  const [isDone, setIsDone] = useState(task.isDone);
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(task.description);
    setIsDone(task.isDone);
  }, [task]);

  const onClickRemove = () => {
    dispatch(removeTask(task.id));
  };

  const onClickEdit = () => {
    setIsEditing(true);
  };

  const onSave = () => {
    dispatch(editTask({ ...task, description, isDone }));
    setIsEditing(false);
  };

  const onCancel = () => {
    setIsEditing(false);
    setDescription(task.description);
    setIsDone(task.isDone);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={isDone}
        onChange={(e) => setIsDone(e.target.checked)}
      />
      {isEditing ? (
        <div>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            autoFocus
          />
          <button className="save-button" onClick={onSave}>Save</button>
          <button className="cancel-button" onClick={onCancel}>Cancel</button>
        </div>
      ) : (
        <div className="task-description" onClick={onClickEdit}>{description}</div>
      )}
      <button className="remove-button" onClick={onClickRemove}>Remove</button>
    </li>
  );
};

export default Task;