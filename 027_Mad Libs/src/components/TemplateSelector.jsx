import React from 'react';

const TemplateSelector = ({ templates, selectedTemplate, onTemplateSelect }) => {
  return (
    <div className="template-selector">
      <h2 className="selector-title">Choose a Mad Libs Template</h2>
      <div className="template-grid">
        {templates.map(template => (
          <div
            key={template.id}
            className={`template-card ${selectedTemplate?.id === template.id ? 'selected' : ''}`}
            onClick={() => onTemplateSelect(template)}
          >
            <h3>{template.title}</h3>
            <p className="template-preview">
              {template.template.split(' ').slice(0, 10).join(' ')}...
            </p>
            <div className="field-count">
              {template.fields.length} words needed
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;