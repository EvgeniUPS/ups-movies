import React from 'react'
import Movies from '../components/Movies'
import Preloader from '../components/Preloader'
import Search from '../components/Search'

// const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  }

  componentDidMount() {
    console.log(process.env)

    // fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
    fetch(`https://www.omdbapi.com/?apikey=1f1ef129&s=matrix`)
      .then(res => res.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
  }

  searchMovies = str => {
    this.setState({ loading: true })

    fetch(`https://www.omdbapi.com/?apikey=1f1ef129&s=${str}`)
      .then(res => res.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
  }

  render() {
    const { movies, loading } = this.state
    return (
      <main className='content container'>
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    )
  }
}

export default Main
