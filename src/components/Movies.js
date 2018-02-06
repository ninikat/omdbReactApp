import React, { Component } from 'react';

export class Movies extends Component {
  render() {
    let movies = this.props.movies.map(function(movie){
      return (<div><li>{movie.Title}</li></div>)
    })

  return (
<div>
    {movies}
</div>
  );
}
}
