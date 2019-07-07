import React from  'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "장원영",
    poster: "https://upload.wikimedia.org/wikipedia/commons/a/a0/181006_%EC%95%84%EC%9D%B4%EC%A6%88%EC%9B%90_%EC%9E%A5%EC%9B%90%EC%98%81_%EB%AF%B8%EC%95%BC%EC%99%80%ED%82%A4_%EC%82%AC%EC%BF%A0%EB%9D%BC_%EC%9E%A0%EC%8B%A4_%EC%8B%9C%EA%B5%AC%EC%8B%9C%ED%83%80_03.jpg"
  },
  {
    title: "미야와키 사쿠라",
    poster: "https://upload.wikimedia.org/wikipedia/commons/5/53/181018_%EC%82%AC%EC%BF%A0%EB%9D%BC_02.png"
  },
  {
    title: "조유리",
    poster: "https://upload.wikimedia.org/wikipedia/commons/9/90/181029_IZ%2AONE_Yuri_02.png",
  },
  {
    title: "안유진",
    poster: "https://upload.wikimedia.org/wikipedia/commons/6/65/181029_IZ%2AONE_Yujin_02.png"
  }

]

function App() {
  return (
    <div className="App">
      {
        movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })
      }
    </div>
  );
}

export default App;
