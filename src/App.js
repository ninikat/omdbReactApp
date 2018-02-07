import React, { Component } from 'react';
import $ from 'jquery'
import './App.css';
import {Movies} from './components/Movies'
import {MovieDeets} from './components/MovieDeets'
let apiKey = "48f53faf"

let url = "http://www.omdbapi.com/?i=insertSelectedimdbIDhere&apikey=insertyourkeyhere"

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      movies:[]
    }
    this.viewMovieInfo=this.viewMovieInfo.bind(this)
  }

  getMovies(){
      $.ajax({
        url:'http://www.omdbapi.com/?s=batman&apikey=48f53faf',
        dataType:'json',
        cache:false,
        success: function(data){
          this.setState({movies:data.Search},function(){
            console.log(this.state.movies)
          })
        }.bind(this),
        error: function(xhr,status,err){
          console.log(err)
        }
      })
  }

  viewMovieInfo(index){
    let imdbID = this.state.movies[index].imdbID
    let url = `http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`
    console.log(url)
    console.log(imdbID)
  }
  componentWillMount(){
    this.getMovies();
  }

  render() {
    return (
      <div className="App">
        <h2>Batman Movies</h2>
        <Movies movies={this.state.movies} viewMovieInfo={this.viewMovieInfo} />
        <hr/>
        <MovieDeets  />
      </div>
    );
  }
}

export default App;
