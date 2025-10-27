import React, { useState } from 'react';
import TemplateSelector from './components/TemplateSelector';
import MadLibsForm from './components/MadLibsForm';
import MadLibsStory from './components/MadLibsStory';
import { madLibsTemplates } from './data/templates';
import './index.css';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [words, setWords] = useState({});
  const [showStory, setShowStory] = useState(false);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setWords({});
    setShowStory(false);
  };

  const handleWordChange = (field, value) => {
    setWords(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    if (selectedTemplate.fields.every(field => words[field]?.trim())) {
      setShowStory(true);
    }
  };

  const handleReset = () => {
    setSelectedTemplate(null);
    setWords({});
    setShowStory(false);
  };

  const handlePlayAgain = () => {
    setSelectedTemplate(null);
    setWords({});
    setShowStory(false);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎭 Mad Libs Fun! 🎭</h1>
        <p>Fill in the blanks and create hilarious stories!</p>
      </header>

      <main className="app-main">
        {!selectedTemplate && (
          <TemplateSelector
            templates={madLibsTemplates}
            selectedTemplate={selectedTemplate}
            onTemplateSelect={handleTemplateSelect}
          />
        )}

        {selectedTemplate && !showStory && (
          <MadLibsForm
            template={selectedTemplate}
            words={words}
            onWordChange={handleWordChange}
            onSubmit={handleSubmit}
            onReset={handleReset}
          />
        )}

        {showStory && (
          <MadLibsStory
            template={selectedTemplate}
            words={words}
            onPlayAgain={handlePlayAgain}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>Made with ❤️ using React & Vite</p>
      </footer>
    </div>
  );
}

export default App;