import React, {Component} from 'react';

class QuizLoader extends Component {
  constructor() {
    super()
    this.state = {
      quizArray: "",
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/getAllDataSets.json")
    .then(response => response.json())
    .then(response => {
      let data = response;
      this.setState({quizArray : data })
    })
  }

  render() {
    let dataPoints = (
      this.state.quizArray ?
       this.state.quizArray.map(
         item => <p>{item.name}</p>
       )
       : 'niet')

    return (
      <div className="quizLoader">
        <p>Veuillez choisir un quiz parmi les suivants:</p>
        {dataPoints}
      </div>
    )
  }
}

export default QuizLoader;
