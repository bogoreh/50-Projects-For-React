import React, { useState } from 'react'
import Header from './components/Header'
import CharacterCard from './components/CharacterCard'
import SearchBar from './components/SearchBar'
import { characters } from './data/characters'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecies, setSelectedSpecies] = useState('All')

  const filteredCharacters = characters.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         character.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecies = selectedSpecies === 'All' || character.species === selectedSpecies
    return matchesSearch && matchesSpecies
  })

  const species = ['All', ...new Set(characters.map(char => char.species))]

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedSpecies={selectedSpecies}
            onSpeciesChange={setSelectedSpecies}
            species={species}
          />
          
          <div className="characters-grid">
            {filteredCharacters.map(character => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
          
          {filteredCharacters.length === 0 && (
            <div className="no-results">
              <h3>No characters found</h3>
              <p>Try adjusting your search or filter</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App