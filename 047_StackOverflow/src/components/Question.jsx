import React, { useState } from 'react';
import AnswerForm from './AnswerForm';
import CodeSnippet from './CodeSnippet';

const Question = ({ question, onAddAnswer }) => {
  const [showAnswerForm, setShowAnswerForm] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const renderContentWithCode = (content) => {
    const parts = content.split(/```([^`]+)```/g);
    
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        // This is a code block
        return <CodeSnippet key={index} code={part.trim()} />;
      } else {
        // This is regular text
        return part.split('\n').map((line, lineIndex) => (
          <p key={`${index}-${lineIndex}`}>{line}</p>
        ));
      }
    });
  };

  return (
    <div className="question">
      <div className="question-votes">
        <button className="vote-btn">▲</button>
        <span className="vote-count">{question.votes}</span>
        <button className="vote-btn">▼</button>
      </div>
      
      <div className="question-content">
        <h3 
          className="question-title"
          onClick={() => setExpanded(!expanded)}
          style={{ cursor: 'pointer', color: '#0a95ff' }}
        >
          {question.title}
        </h3>
        
        <div className="question-meta">
          <span>Asked by {question.author}</span>
          <div className="tags">
            {question.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {expanded && (
          <>
            <div className="question-body">
              {renderContentWithCode(question.content)}
            </div>
            
            <div className="answers-section">
              <h4>{question.answers.length} Answers</h4>
              
              {question.answers.map(answer => (
                <div key={answer.id} className="answer">
                  <div className="answer-votes">
                    <button className="vote-btn">▲</button>
                    <span className="vote-count">{answer.votes}</span>
                    <button className="vote-btn">▼</button>
                  </div>
                  <div className="answer-content">
                    {renderContentWithCode(answer.content)}
                    <div className="answer-meta">
                      Answered by {answer.author}
                    </div>
                  </div>
                </div>
              ))}
              
              {!showAnswerForm ? (
                <button 
                  className="btn btn-outline"
                  onClick={() => setShowAnswerForm(true)}
                >
                  Post Your Answer
                </button>
              ) : (
                <AnswerForm 
                  questionId={question.id}
                  onAddAnswer={(answer) => {
                    onAddAnswer(question.id, answer);
                    setShowAnswerForm(false);
                  }}
                  onCancel={() => setShowAnswerForm(false)}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Question;