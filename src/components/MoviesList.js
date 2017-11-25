import React from 'react'

const MoviesList = props => {
  return (
    <ul>
      {
        props.movies.map (
          (movie, i) => {
            return <li key={movie}>{movie}</li>;
          }
        )
      }
    </ul>
  )
}

export default MoviesList
