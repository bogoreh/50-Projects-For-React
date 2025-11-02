import React, { useState } from 'react';
import QuestionForm from './components/QuestionForm';
import QuestionList from './components/QuestionList';
import { mockQuestions } from './data/mockData';
import './styles/App.css';

function App() {
  const [questions, setQuestions] = useState(mockQuestions);
  const [activeTab, setActiveTab] = useState('questions');

  const handleAddQuestion = (newQuestion) => {
    setQuestions([newQuestion, ...questions]);
    setActiveTab('questions');
  };

  const handleAddAnswer = (questionId, newAnswer) => {
    setQuestions(questions.map(question => 
      question.id === questionId 
        ? { ...question, answers: [...question.answers, newAnswer] }
        : question
    ));
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="container">
          <h1>StackOverflow Clone</h1>
          <nav className="nav-tabs">
            <button 
              className={`tab ${activeTab === 'questions' ? 'active' : ''}`}
              onClick={() => setActiveTab('questions')}
            >
              Questions
            </button>
            <button 
              className={`tab ${activeTab === 'ask' ? 'active' : ''}`}
              onClick={() => setActiveTab('ask')}
            >
              Ask Question
            </button>
          </nav>
        </div>
      </header>

      <main className="container">
        {activeTab === 'questions' && (
          <QuestionList 
            questions={questions} 
            onAddAnswer={handleAddAnswer}
          />
        )}
        
        {activeTab === 'ask' && (
          <QuestionForm onAddQuestion={handleAddQuestion} />
        )}
      </main>
    </div>
  );
}

export default App;