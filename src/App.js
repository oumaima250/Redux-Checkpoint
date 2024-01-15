import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const App = () => {
  const [showDone, setShowDone] = useState('all');

  const handleFilter = (option) => {
    setShowDone(option);
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <h1 className="app-title">ToDo App</h1>
          <Routes>
            <Route
              path="/"
              element={<><AddTask /><ListTask showDone={showDone} onFilter={handleFilter} /></>}
            />
            <Route path="/done" element={<ListTask showDone="done" />} />
            <Route path="/not-done" element={<ListTask showDone="not-done" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;