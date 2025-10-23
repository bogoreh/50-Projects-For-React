import React from 'react'
import { Link } from 'react-router-dom'

function PokemonCard({ pokemon }) {
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
  const cardStyle = {
    backgroundColor: typeColors[mainType] + '40',
    borderColor: typeColors[mainType]
  }

  return (
    <Link to={`/pokemon/${pokemon.id}`} className="pokemon-card-link">
      <div className="pokemon-card" style={cardStyle}>
        <div className="pokemon-image">
          <img 
            src={pokemon.sprites.other['official-artwork'].front_default} 
            alt={pokemon.name}
            onError={(e) => {
              e.target.src = pokemon.sprites.front_default
            }}
          />
        </div>
        <div className="pokemon-info">
          <span className="pokemon-id">#{pokemon.id.toString().padStart(3, '0')}</span>
          <h3 className="pokemon-name">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
          <div className="pokemon-types">
            {pokemon.types.map(typeInfo => (
              <span 
                key={typeInfo.type.name}
                className="type-badge"
                style={{ backgroundColor: typeColors[typeInfo.type.name] }}
              >
                {typeInfo.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PokemonCard