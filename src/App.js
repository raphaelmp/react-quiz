import React, {Component} from 'react';
import QuizComponent from './QuizComponent';
import WelcomeScreen from './WelcomeScreen';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      quizLoaded: 0,
    }
  }
  render() {
    let topText = null;

    if (this.state.quizLoaded) {
      topText = <p>Revenir au menu</p>
    }

    return (
      <div className="App">
        {topText}
        <header className="App-header">
          <h1>ReactQuiz</h1>
          <p>Engin de quiz plutôt versatile</p>
        </header>
        {this.state.quizLoaded ? <QuizComponent /> : <WelcomeScreen />}
      </div>
    )
  }

}

export default App;
