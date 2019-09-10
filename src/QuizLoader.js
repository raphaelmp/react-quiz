import React, {Component} from 'react';
import QuizLoaderListItem from './ViewComponents/QuizLoaderListItem';

class QuizLoader extends Component {
  constructor() {
    super()
    this.state = {
      quizArray: "",
    }

    this.fetchSet = this.fetchSet.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3000/getAllDataSets.json")
    .then(response => response.json())
    .then(response => {
      let data = response;
      this.setState({quizArray : data })
    })
  }

  fetchSet(t) {

    let exData = {
      'pee':'wee',
    }

    this.props.dataLoader(exData);
  }

  render() {
    let dataPoints = (
      this.state.quizArray ?
       this.state.quizArray.map(
         item => <QuizLoaderListItem key={item.id} item={item} fetchSet={this.fetchSet}/>
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
