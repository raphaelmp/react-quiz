import React, {Component} from 'react';

class QuizComponent extends React.Component {
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
          <p>{this.state.currentQuestion}</p>
        </div>
        <div className="answerBox">
        </div>
      </div>
    
    )
  }
}

export default QuizComponent;