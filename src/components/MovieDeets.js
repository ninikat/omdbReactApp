import React, { Component } from 'react';

export class MovieDeets extends Component {
  render() {
  return (
    <div>
      <h2>{this.props.info.Title} </h2>
      <img src={this.props.picture}/><br/>
      <p>Released: {this.props.info.Released}</p>
      <p>Rated: {this.props.info.Rated}</p>
      <p>Runtime: {this.props.info.Runtime}</p>
    </div>
    );
}
}
