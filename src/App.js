import React, {Component} from  'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import AntCardItem from './AntCardItem';

import {ReduceEvent} from './reducer'

import {createStore} from 'redux'

let eventReducer = createStore(ReduceEvent)


class App extends Component {
  state = {
  }

  componentDidMount(){
    this._getMovies();

    eventReducer.subscribe(() => {
      console.log("abcdefg")
    })
  }

  _getMovies = async () => {
    const movies = await this._callMovies();
    eventReducer.dispatch({type:"data_change", data:movies})
    this.setState({
      movies
    })
  }

  _callMovies = async () => {
    try {
      const patato = await fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating');
      const json = await patato.json();
      return json.data.movies;
    }
    catch (err) {
      return console.log(err);
    }
  }

  _renderMovie = () => {
    // let movies = this.state.movies.map(movie => {
    //   return <AntCardItem title={movie.title} 
    //   poster={movie.medium_cover_image} 
    //   alt={movie.title}
    //   synopsis={movie.synopsis}
    //   genres={movie.genres}
    //   er={eventReducer}
    //   key={movie.id}/>
    // });

    const movies = <AntCardItem er={eventReducer}/>

    return movies
  }

  render(){
    const movies = this.state;
    return (
      <div className={movies ? "App" : "App-loading"}>
        {movies ? this._renderMovie() : "Loading"}
      </div>
    );
  }
}

export default App;
