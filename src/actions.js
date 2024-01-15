const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const DELETE_TASK = 'DELETE_TASK';
const SET_SHOW_DONE = 'SET_SHOW_DONE';

export const addTask = (description) => {
  return {
    type: ADD_TASK,
    payload: {
      id: Math.floor(Math.random() * 10000),
      description,
      isDone: false,
    },
  };
};

export const editTask = (task) => {
  return {
    type: EDIT_TASK,
    payload: task,
  };
};

export const removeTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const setShowDone = (showDone) => {
  return {
    type: SET_SHOW_DONE,
    payload: showDone,
  };
};