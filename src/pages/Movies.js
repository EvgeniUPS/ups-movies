import React, { useState, useEffect } from 'react'
import Movies from '../components/Movies'
import Preloader from '../components/Preloader'
import Search from '../components/Search'

// const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  const searchMovies = str => {
    setLoading(true)

    fetch(`https://www.omdbapi.com/?apikey=1f1ef129&s=${str}`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.Search)
        setLoading(false)
      })
  }

  useEffect(() => {
    // fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
    fetch(`https://www.omdbapi.com/?apikey=1f1ef129&s=matrix`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.Search)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })

    return () => {}
  }, [])

  return (
    <>
      <Search searchMovies={searchMovies} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </>
  )
}

export default Main
