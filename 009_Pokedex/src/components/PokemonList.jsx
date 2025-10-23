import React from 'react'
import PokemonCard from './PokemonCard'

function PokemonList({ pokemon }) {
  return (
    <div className="pokemon-list">
      <h2>First Generation Pokémon</h2>
      <div className="pokemon-grid">
        {pokemon.map(poke => (
          <PokemonCard key={poke.id} pokemon={poke} />
        ))}
      </div>
    </div>
  )
}

export default PokemonList