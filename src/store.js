import { createStore } from 'redux';
import reducer from './reducers';
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem('tasks', JSON.stringify(store.getState().tasks));
});

export default store;