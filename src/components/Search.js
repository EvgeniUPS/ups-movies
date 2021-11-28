import React, { Component } from 'react'

export class Search extends Component {
  state = {
    search: '',
    type: 'all',
  }

  handleKey = e => {
    if (e.key === 'Enter') {
      this.props.searchMovies(this.state.search)
    }
  }

  handleFilter = e => {
    this.setState({ type: e.target.dataset.type })
  }

  componentDidMount() {
    console.log('mouunt search')
  }

  render() {
    return (
      <div className='row'>
        <div className='col s12'>
          <div className='input-field '>
            <input
              value={this.state.search}
              className='validate'
              placeholder='Search'
              type='search'
              onChange={e => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />
            <a
              onClick={() => this.props.searchMovies(this.state.search)}
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
                  onChange={this.handleFilter}
                  checked={this.state.type === ''}
                />
                <span>All</span>
              </label>
              <label>
                <input
                  className='with-gap'
                  name='type'
                  type='radio'
                  data-type='movie'
                  onChange={this.handleFilter}
                  checked={this.state.type === 'movie'}
                />
                <span>Movies only</span>
              </label>
              <label>
                <input
                  className='with-gap'
                  name='type'
                  type='radio'
                  data-type='series'
                  onChange={this.handleFilter}
                  checked={this.state.type === 'series'}
                />
                <span>Series only</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search
