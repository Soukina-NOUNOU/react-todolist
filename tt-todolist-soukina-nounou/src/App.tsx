import React from 'react';
import TaskList from './components/TaskList';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <h1>Todo List</h1>
        < TaskList />
      </div>
    </div>
  );
}

export default App;
