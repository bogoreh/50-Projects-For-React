import React from 'react'

function PokemonDetails({ pokemon }) {
  const typeColors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC'
  }

  const mainType = pokemon.types[0].type.name
  const detailStyle = {
    backgroundColor: typeColors[mainType] + '20'
  }

  const statColors = {
    hp: '#FF5959',
    attack: '#F5AC78',
    defense: '#FAE078',
    'special-attack': '#9DB7F5',
    'special-defense': '#A7DB8D',
    speed: '#FA92B2'
  }

  return (
    <div className="pokemon-details" style={detailStyle}>
      <div className="details-header">
        <div className="details-image">
          <img 
            src={pokemon.sprites.other['official-artwork'].front_default} 
            alt={pokemon.name}
          />
        </div>
        <div className="details-info">
          <span className="pokemon-id">#{pokemon.id.toString().padStart(3, '0')}</span>
          <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
          <div className="pokemon-types">
            {pokemon.types.map(typeInfo => (
              <span 
                key={typeInfo.type.name}
                className="type-badge large"
                style={{ backgroundColor: typeColors[typeInfo.type.name] }}
              >
                {typeInfo.type.name}
              </span>
            ))}
          </div>
          <div className="physical-stats">
            <div className="stat">
              <strong>Height:</strong> {(pokemon.height / 10).toFixed(1)} m
            </div>
            <div className="stat">
              <strong>Weight:</strong> {(pokemon.weight / 10).toFixed(1)} kg
            </div>
          </div>
        </div>
      </div>

      <div className="details-content">
        <div className="stats-section">
          <h3>Base Stats</h3>
          <div className="stats-grid">
            {pokemon.stats.map(stat => (
              <div key={stat.stat.name} className="stat-item">
                <div className="stat-header">
                  <span className="stat-name">
                    {stat.stat.name.replace('-', ' ').toUpperCase()}
                  </span>
                  <span className="stat-value">{stat.base_stat}</span>
                </div>
                <div className="stat-bar">
                  <div 
                    className="stat-bar-fill"
                    style={{
                      width: `${(stat.base_stat / 255) * 100}%`,
                      backgroundColor: statColors[stat.stat.name] || '#A8A878'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="abilities-section">
          <h3>Abilities</h3>
          <div className="abilities-list">
            {pokemon.abilities.map(ability => (
              <span key={ability.ability.name} className="ability-badge">
                {ability.ability.name.replace('-', ' ')}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails