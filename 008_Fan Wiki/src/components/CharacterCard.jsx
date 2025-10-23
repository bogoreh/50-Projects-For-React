import React from 'react'

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <div className="character-image">
        <img src={character.image} alt={character.name} />
      </div>
      
      <div className="character-info">
        <h3 className="character-name">{character.name}</h3>
        <div className="character-meta">
          <span className="species">{character.species}</span>
          <span className="occupation">{character.occupation}</span>
        </div>
        <p className="character-description">{character.description}</p>
        
        <div className="character-details">
          <div className="detail-item">
            <strong>Planet:</strong> {character.planet}
          </div>
          <div className="detail-item">
            <strong>Status:</strong> {character.status}
          </div>
          {character.voiceActor && (
            <div className="detail-item">
              <strong>Voice:</strong> {character.voiceActor}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CharacterCard