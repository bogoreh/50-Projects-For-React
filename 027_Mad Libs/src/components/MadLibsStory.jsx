import React from 'react';

const MadLibsStory = ({ template, words, onPlayAgain }) => {
  if (!template || !words) return null;

  const generateStory = () => {
    let story = template.template;
    Object.keys(words).forEach(key => {
      const placeholder = `{${key}}`;
      story = story.replace(new RegExp(placeholder, 'g'), 
        `<span class="user-word">${words[key]}</span>`);
    });
    return { __html: story };
  };

  return (
    <div className="madlibs-story">
      <div className="story-header">
        <h2>Your Mad Libs Story</h2>
        <p className="story-title">{template.title}</p>
      </div>
      
      <div 
        className="story-content"
        dangerouslySetInnerHTML={generateStory()}
      />
      
      <div className="story-actions">
        <button onClick={onPlayAgain} className="play-again-btn">
          Create Another Story
        </button>
      </div>
    </div>
  );
};

export default MadLibsStory;