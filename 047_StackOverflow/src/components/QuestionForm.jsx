import React, { useState } from 'react';

const QuestionForm = ({ onAddQuestion }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) return;

    const newQuestion = {
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
      author: "current_user",
      votes: 0,
      answers: [],
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    };

    onAddQuestion(newQuestion);
    setTitle('');
    setContent('');
    setTags('');
  };

  return (
    <div className="question-form">
      <h2>Ask a Question</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. How to center a div with CSS?"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Describe your problem in detail. You can include code snippets using backticks."
            rows="6"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="css, html, javascript (comma separated)"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Post Your Question
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;