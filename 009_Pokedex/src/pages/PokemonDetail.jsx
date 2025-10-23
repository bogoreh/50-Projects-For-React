import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import PokemonDetails from '../components/PokemonDetails'
import { getPokemonDetails } from '../services/pokemonAPI'

function PokemonDetail() {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        setLoading(true)
        const data = await getPokemonDetails(id)
        setPokemon(data)
      } catch (err) {
        setError('Failed to fetch Pokémon details')
      } finally {
        setLoading(false)
      }
    }

    fetchPokemonDetails()
  }, [id])

  if (loading) return <div className="loading">Loading Pokémon details...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className="pokemon-detail-page">
      <div className="container">
        <Link to="/" className="back-button">← Back to Pokédex</Link>
        {pokemon && <PokemonDetails pokemon={pokemon} />}
      </div>
    </div>
  )
}

export default PokemonDetail