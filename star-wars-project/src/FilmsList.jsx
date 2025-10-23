
import React from 'react'
import { useSWStore } from './store'

const FilmsList = () => {
  const { films, selectedFilm, fetchFilms, fetchCharacters, loading } = useSWStore()

  React.useEffect(() => {
    fetchFilms()
  }, [fetchFilms])

  if (loading && films.length === 0) return <div className="loading">Загрузка фильмов...</div>

  return (
    <div className="films-section">
      <h2>Фильмы Звездных Войн</h2>
      <div className="films-grid">
        {films.map(film => (
          <div
            key={film.episode_id}
            className={`film-card ${selectedFilm?.episode_id === film.episode_id ? 'selected' : ''}`}
            onClick={() => fetchCharacters(film)}
          >
            <h3>{film.title}</h3>
            <p>Эпизод {film.episode_id}</p>
            <p>Режиссер: {film.director}</p>
            <p>Дата выхода: {film.release_date}</p>
            <small>Персонажей: {film.characters.length}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilmsList