
import { create } from 'zustand'

export const useSWStore = create((set, get) => ({
  
  films: [],
  characters: [],
  selectedFilm: null,
  loading: false,
  error: null,

  
  fetchFilms: async () => {
    set({ loading: true, error: null })
    try {
      const response = await fetch('https://swapi.dev/api/films/')
      const data = await response.json()
      set({ films: data.results, loading: false })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },

  fetchCharacters: async (film) => {
    set({ loading: true, error: null, selectedFilm: film })
    try {
      
      const characterPromises = film.characters.map(url => 
        fetch(url).then(res => res.json())
      )
      const characters = await Promise.all(characterPromises)
      set({ characters, loading: false })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },

  clearSelection: () => {
    set({ selectedFilm: null, characters: [] })
  }
}))