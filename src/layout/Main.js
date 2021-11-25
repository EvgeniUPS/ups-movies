import React from 'react'
import Movies from '../components/Movies'

const apikey = '1f1ef129'
const state = [
  { imdbID: '1', Title: 'test1', Year: '1999', Type: 'movie' },
  { imdbID: '2', Title: 'test2', Year: '2014', Type: 'movie' },
  { imdbID: '3', Title: 'test3', Year: '2015', Type: 'movie' },
]

function Main() {
  return (
    <main className='content container'>
      <Movies movies={state} />
    </main>
  )
}

export default Main
