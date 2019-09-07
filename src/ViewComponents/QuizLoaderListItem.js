import React from 'react';

function QuizLoaderListItem(props) {
  return (
      <div className="quizLoaderListItem" onClick={() => console.log(props.item.url)}>
        <h4>{props.item.name}</h4>
        <p className="description">{props.item.description}</p>
      </div>
  )
}

export default QuizLoaderListItem;
