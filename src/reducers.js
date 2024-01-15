const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const DELETE_TASK = 'DELETE_TASK';
const SET_SHOW_DONE = 'SET_SHOW_DONE';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  showDone: 'all',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        }),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
      case SET_SHOW_DONE:
        localStorage.setItem('showDone', action.payload);
        return {
          ...state,
          showDone: action.payload,
        };
      
    default:
      return state;
  }
};

export default reducer;