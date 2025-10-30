import React from 'react';

const MovieCard = ({ movie }) => {
  const getAcademyAwards = (movie) => {
    const awards = movie.academyAwardWins || 0;
    const nominations = movie.academyAwardNominations || 0;
    
    if (awards === 0 && nominations === 0) return null;
    
    return (
      <div className="awards">
        <span className="award-wins">🏆 {awards} Wins</span>
        {nominations > 0 && (
          <span className="award-nominations">⭐ {nominations} Nominations</span>
        )}
      </div>
    );
  };

  const formatRuntime = (minutes) => {
    if (!minutes) return 'Unknown';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatMoney = (amount) => {
    if (!amount) return 'Unknown';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount * 1000000);
  };

  return (
    <div className="movie-card">
      <div className="movie-header">
        <h3 className="movie-title">{movie.name}</h3>
        <span className="movie-runtime">{formatRuntime(movie.runtimeInMinutes)}</span>
      </div>
      
      <div className="movie-stats">
        <div className="stat">
          <span className="stat-label">Budget</span>
          <span className="stat-value">{formatMoney(movie.budgetInMillions)}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Box Office</span>
          <span className="stat-value">{formatMoney(movie.boxOfficeRevenueInMillions)}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Rotten Tomatoes</span>
          <span className="stat-value">{movie.rottenTomatoesScore || 'N/A'}%</span>
        </div>
      </div>

      {getAcademyAwards(movie)}
    </div>
  );
};

export default MovieCard;