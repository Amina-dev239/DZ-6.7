





import React from 'react'
import FilmsList from './FilmsList'
import CharactersList from './CharactersList'
import { useSWStore } from './store'
import './App.css'

function App() {
  const { error, clearSelection } = useSWStore()

  return (
    <div className="app">
      <header className="app-header">
        <h1>🌌 Энциклопедия Звездных Войн</h1>
        <p>Выберите фильм чтобы увидеть его персонажей</p>
      </header>

      {error && (
        <div className="error">
          {error}
          <button onClick={clearSelection}>Попробовать снова</button>
        </div>
      )}

      <main className="app-main">
        <FilmsList />
        <CharactersList />
      </main>
    </div>
  )
}

export default App