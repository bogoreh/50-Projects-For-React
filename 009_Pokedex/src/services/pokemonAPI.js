const API_BASE = 'https://pokeapi.co/api/v2'

export const getPokemonList = async (limit = 151) => {
  try {
    // First, get the list of Pokémon with basic info
    const response = await fetch(`${API_BASE}/pokemon?limit=${limit}`)
    const data = await response.json()
    
    // Then get detailed info for each Pokémon
    const detailedPokemon = await Promise.all(
      data.results.map(async (pokemon, index) => {
        const details = await getPokemonDetails(index + 1)
        return details
      })
    )
    
    return detailedPokemon
  } catch (error) {
    throw new Error('Failed to fetch Pokémon list')
  }
}

export const getPokemonDetails = async (id) => {
  try {
    const response = await fetch(`${API_BASE}/pokemon/${id}`)
    if (!response.ok) throw new Error('Pokémon not found')
    return await response.json()
  } catch (error) {
    throw new Error('Failed to fetch Pokémon details')
  }
}