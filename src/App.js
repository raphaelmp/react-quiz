import React from 'react';
import QuizComponent from './QuizComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ReactQuiz</h1>
        <p>Engin de quiz plutôt versatile</p>
      </header>
      <QuizComponent />
    </div>
  );
}

export default App;
