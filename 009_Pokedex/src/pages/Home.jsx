import React, { useState, useEffect } from 'react'
import PokemonList from '../components/PokemonList'
import { getPokemonList } from '../services/pokemonAPI'

function Home() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true)
        const data = await getPokemonList(151) // First generation Pokémon
        setPokemon(data)
      } catch (err) {
        setError('Failed to fetch Pokémon data')
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [])

  if (loading) return <div className="loading">Loading Pokémon...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className="home">
      <div className="container">
        <PokemonList pokemon={pokemon} />
      </div>
    </div>
  )
}

export default Home