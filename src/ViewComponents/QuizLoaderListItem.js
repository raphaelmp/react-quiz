import React, {Component} from 'react';

class QuizLoaderListItem extends Component {
  render () {
    return (
        <div className="quizLoaderListItem" onClick={() => this.props.fetchSet(this.props.item.url)}>
          <h4>{this.props.item.name}</h4>
          <p className="description">{this.props.item.description}</p>
        </div>
    )
  }
}

export default QuizLoaderListItem;
