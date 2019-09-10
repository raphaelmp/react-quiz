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
    fetch(t)
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

      this.props.dataLoader(list)
    })
    .catch(function(error) {
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
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
