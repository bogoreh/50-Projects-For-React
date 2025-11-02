import React from 'react';
import Question from './Question';

const QuestionList = ({ questions, onAddAnswer }) => {
  return (
    <div className="question-list">
      <div className="questions-header">
        <h2>All Questions</h2>
        <div className="questions-count">{questions.length} questions</div>
      </div>
      
      {questions.map(question => (
        <Question 
          key={question.id} 
          question={question} 
          onAddAnswer={onAddAnswer}
        />
      ))}
    </div>
  );
};

export default QuestionList;