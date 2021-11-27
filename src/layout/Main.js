import React from 'react'
import Movies from '../components/Movies'
import Preloader from '../components/Preloader'
import Search from '../components/Search'

// const apikey = '1f1ef129'
// const state = [
//   { imdbID: '1', Title: 'test1', Year: '1999', Type: 'movie' },
//   { imdbID: '2', Title: 'test2', Year: '2014', Type: 'movie' },
//   { imdbID: '3', Title: 'test3', Year: '2015', Type: 'movie' },
// ]
class Main extends React.Component {
  state = {
    movies: [
      // { imdbID: '1', Title: 'test1', Year: '1999', Type: 'movie' },
      // { imdbID: '2', Title: 'test2', Year: '2014', Type: 'movie' },
      // { imdbID: '3', Title: 'test3', Year: '2015', Type: 'movie' },
    ],
    loading: true,
  }

  componentDidMount() {
    console.log('componentDidMount')

    fetch('https://www.omdbapi.com/?apikey=1f1ef129&s=matrix')
      .then(res => res.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
  }

  searchMovies = str => {
    fetch(`https://www.omdbapi.com/?apikey=1f1ef129&s=${str}`)
      .then(res => res.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
  }

  render() {
    const { movies } = this.state
    return (
      <main className='content container'>
        <Search searchMovies={this.searchMovies} />
        {movies.length ? <Movies movies={movies} /> : <Preloader />}
      </main>
    )
  }
}

export default Main
