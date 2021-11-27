import React, { Component } from 'react'

export class Search extends Component {
  state = {
    search: '',
  }

  handleKey = e => {
    if (e.key === 'Enter') {
      this.props.searchMovies(this.state.search)
    }
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
              <i class='material-icons right'>search</i>search
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Search
