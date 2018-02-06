import React, { Component } from 'react';
import $ from 'jquery'
import './App.css';
import {Movies} from './components/Movies'

class App extends Component {
  constructor(){
    super();
    this.state= {
      movies:[]
    }

  }

  getMovies(){
      $.ajax({
        url:'http://www.omdbapi.com/?s=batman&apikey=48f53faf',
        dataType:'json',
        cache:false,
        success: function(data){
          this.setState({movies:data},function(){
            console.log(this.state.movies.Search)
          })
        }.bind(this)
      })
  }

  componentWillMount(){
    this.getMovies();
  }

  render() {
    return (
      <div className="App">
        <h2>Movies</h2>
        <Movies movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
