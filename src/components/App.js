import React, { Component } from 'react'
import MoviesList from './MoviesList'

class App extends Component {
  constructor () {
    super()
    this.state = {
      movies: ['forest gump', 'superbad', 'wizard of ahhs']
    }
  }

  render () {
    return <MoviesList movies={this.state.movies} />
  }
}

export default App
