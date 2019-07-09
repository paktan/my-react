import React, {Component} from  'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {
  state = {
  }

  componentDidMount(){
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callMovies();
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
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.title} 
      poster={movie.medium_cover_image} 
      genres={movie.genres}
      synopsis={movie.synopsis}
      key={movie.id}/>
    });

    return movies
  }

  render(){
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App-loading"}>
        {movies ? this._renderMovie() : "Loading"}
      </div>
    );
  }
}

export default App;
