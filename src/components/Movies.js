import React, { Component } from 'react';

export class Movies extends Component {

  render() {
    let movies = this.props.movies.map((movie,index)=> <div className="card"><li className="list_of_movies"><p><a href="#" onClick={()=>this.props.viewMovieInfo(index)}>{movie.Title}</a></p><img className="pictures_sizing" src={movie.Poster}/>
</li></div>)


  return (
    <div className="container">
      <div className="row main offset-1">
        {movies}
      </div>
    </div>
    );
}
}
