import React, { useState } from 'react'

const Search = props => {
  const { searchMovies = Function.prototype } = props

  const [search, setSearch] = useState('')
  const [type, setType] = useState('all')

  const handleKey = e => {
    if (e.key === 'Enter') {
      searchMovies(search)
    }
  }

  const handleFilter = e => {
    setType(() => e.target.dataset.type)
  }
  return (
    <div className='row'>
      <div className='col s12'>
        <div className='input-field '>
          <input
            value={search}
            className='validate'
            placeholder='Search'
            type='search'
            onChange={e => setSearch(e.target.value)}
            onKeyDown={handleKey}
          />
          <a
            onClick={() => searchMovies(search)}
            href='#!'
            className='waves-effect waves-light btn search-btn'
          >
            <i className='material-icons right'>search</i>search
          </a>

          <div className='filter'>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                data-type='all'
                onChange={handleFilter}
                checked={type === ''}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                data-type='movie'
                onChange={handleFilter}
                checked={type === 'movie'}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                data-type='series'
                onChange={handleFilter}
                checked={type === 'series'}
              />
              <span>Series only</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
