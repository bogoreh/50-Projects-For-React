import React from 'react';
import './CodeSnippet.css';

const CodeSnippet = ({ code, language = 'javascript' }) => {
  const renderCode = (codeString) => {
    return codeString.split('\n').map((line, index) => (
      <div key={index} className="code-line">
        <span className="line-number">{index + 1}</span>
        <code>{line}</code>
      </div>
    ));
  };

  return (
    <div className="code-snippet">
      <div className="code-header">
        <span className="language-tag">{language}</span>
        <button 
          className="copy-btn"
          onClick={() => navigator.clipboard.writeText(code)}
        >
          Copy
        </button>
      </div>
      <pre className="code-content">
        {renderCode(code)}
      </pre>
    </div>
  );
};

export default CodeSnippet;