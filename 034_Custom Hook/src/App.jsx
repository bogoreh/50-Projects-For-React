import React from 'react';
import { useLotrMovies } from './hooks/useLotrMovies';
import MovieCard from './components/MovieCard';
import './App.css';

function App() {
  const { movies, loading, error } = useLotrMovies();

  if (loading) {
    return (
      <div className="app">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Fetching movies from Middle-earth...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <div className="error-container">
          <h2>⚠️ One Does Not Simply Fetch Movies</h2>
          <p>{error}</p>
          <p className="error-note">
            Note: You need to get a free API key from{' '}
            <a href="https://the-one-api.dev/" target="_blank" rel="noopener noreferrer">
              the-one-api.dev
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>🎬 Lord of the Rings Movies</h1>
          <p className="subtitle">Journey through Middle-earth's cinematic legacy</p>
        </div>
      </header>

      <main className="main-content">
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </main>

      <footer className="app-footer">
        <p>Data provided by The One API</p>
      </footer>
    </div>
  );
}

export default App;