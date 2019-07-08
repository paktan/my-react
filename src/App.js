import React, {Component} from  'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {
  state = {
  }

  componentDidMount(){
    this._getMovies()
  }

  _getMovies = async () => {
    const movies = await this._callMovies()
    console.log(movies)
    this.setState({
      movies
    })
  }

  _callMovies = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
    .then(patato => patato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _renderMovie = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id}/>
    })

    return movies
  }

  render(){
    return (
      <div className="App">
        {
          this.state.movies ? this._renderMovie() : "Loading..."
        }
      </div>
    );
  }
}

export default App;
