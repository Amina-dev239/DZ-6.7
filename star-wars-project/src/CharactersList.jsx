
import React from 'react'
import { useSWStore } from './store'

const CharactersList = () => {
  const { characters, selectedFilm, clearSelection, loading } = useSWStore()

  if (!selectedFilm) return null

  return (
    <div className="characters-section">
      <div className="section-header">
        <h2>Персонажи: {selectedFilm.title}</h2>
        <button onClick={clearSelection} className="close-btn">×</button>
      </div>

      {loading ? (
        <div className="loading">Загрузка...</div>
      ) : (
        <div className="characters-grid">
          {characters.map(character => (
            <div key={character.url} className="character-card">
              <h3>{character.name}</h3>
              <div className="character-info">
                <p>Рост: {character.height} см</p>
                <p>Вес: {character.mass} кг</p>
                <p>Пол: {character.gender}</p>
                <p>Год рождения: {character.birth_year}</p>
                <p>Цвет волос: {character.hair_color}</p>
                <p>Цвет глаз: {character.eye_color}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CharactersList