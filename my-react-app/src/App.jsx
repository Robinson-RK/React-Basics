import React from 'react';
import './App.css';
import StudentList from './StudentList.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>STUDENTS INFORMATION</h1>
      </header>
      <main>
        <StudentList />
      </main>
    </div>
  );
}

export default App;

