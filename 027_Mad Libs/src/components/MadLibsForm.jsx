import React from 'react';

const MadLibsForm = ({ template, words, onWordChange, onSubmit, onReset }) => {
  if (!template) return null;

  return (
    <div className="madlibs-form">
      <div className="form-header">
        <h2>Fill in the Blanks</h2>
        <p className="template-title">{template.title}</p>
      </div>
      
      <div className="words-grid">
        {template.fields.map((field, index) => (
          <div key={index} className="input-group">
            <label htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>
            <input
              type="text"
              id={field}
              value={words[field] || ''}
              onChange={(e) => onWordChange(field, e.target.value)}
              placeholder={`Enter a ${field}`}
              className="word-input"
            />
          </div>
        ))}
      </div>
      
      <div className="form-actions">
        <button 
          onClick={onSubmit}
          disabled={!template.fields.every(field => words[field]?.trim())}
          className="generate-btn"
        >
          Generate Story
        </button>
        <button onClick={onReset} className="reset-btn">
          Choose Different Template
        </button>
      </div>
    </div>
  );
};

export default MadLibsForm;