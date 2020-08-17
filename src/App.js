import React from 'react';

import Events from './components/events/Events';
import ListOfBooks from './components/books/ListOfBooks';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Events />
        <ListOfBooks />
      </header>
    </div>
  );
}

export default App;
