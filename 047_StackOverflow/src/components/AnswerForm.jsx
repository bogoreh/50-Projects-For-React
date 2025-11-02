import React, { useState } from 'react';

const AnswerForm = ({ questionId, onAddAnswer, onCancel }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!content.trim()) return;

    const newAnswer = {
      id: Date.now(),
      content: content.trim(),
      author: "current_user",
      votes: 0
    };

    onAddAnswer(newAnswer);
    setContent('');
  };

  return (
    <div className="answer-form">
      <h4>Your Answer</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your answer here. Use backticks for code snippets."
            rows="8"
            required
          />
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Post Answer
          </button>
          <button 
            type="button" 
            className="btn btn-outline"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnswerForm;