import React, {Component} from 'react';

class QuizComponent extends Component {
  constructor() {
    super()
    this.state = {
      currentQuestion:"",
      tousLesPays: "",
    }
  }
  
  componentDidMount() {
    fetch("http://localhost:3000/payspop.json")
    .then(response => response.json())
    .then(response => {
      let list = [];
      
      response.map(obj => {
        let pair = {
          country: obj.countryLabel,
          city: obj.cityLabel
        }
        list.push(pair)
        
        return true;
      });
      
      this.setState({
        currentQuestion: list[2].country,
        tousLesPays: list,
      });
    })
  }
  
  render() {
    return (
      <div className="questionContainer">
        <div className="questionBox">
          <p className="questionText">Quelle est la ville la plus peuplée de </p>
          <p>{this.state.currentQuestion ? this.state.currentQuestion : "Chargement en cours..."}</p>
        </div>
        <div className="answerBox">
        </div>
      </div>
    
    )
  }
}

export default QuizComponent;