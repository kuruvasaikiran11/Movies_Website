// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       movies: [],
//       query: '',
//     };

//     this.onInput = this.onInput.bind(this);
//   }

//   onInput(query) {
//     this.setState({ query });
//     this.searchMovie(query);
//   }

//   getPopularMovies() {
//     const url = 'https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716';

//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           movies: data.results,
//         });
//       });
//   }

//   searchMovie(query) {
//     const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`;

//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           movies: data.results,
//         });
//       });
//   }

//   componentDidMount() {
//     this.getPopularMovies();
//   }

//   render() {
//     const { movies, query } = this.state;

//     return (
//       <div className="app">
//         <form className="search" onInput={event => this.onInput(event.target.value)}>
//           <input type="search" value={query} placeholder="Search for Movie Title …" />
//         </form>
//         <ul className="movies">
//           {movies.map(movie => (
//             <li
//               key={movie.id}
//               className="movie"
//               onMouseEnter={() => this.handleMouseEnter(movie.id)}
//               onMouseLeave={() => this.handleMouseLeave(movie.id)}
//             >
//               <figure>
//                 <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt={movie.title} />
//                 <figcaption className={movie.isHovered ? 'visible' : 'hidden'}>
//                   <h2 className="movie__title">{movie.title}</h2>
//                 </figcaption>
//               </figure>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }

//   handleMouseEnter(id) {
//     this.updateMovieHoverState(id, true);
//   }

//   handleMouseLeave(id) {
//     this.updateMovieHoverState(id, false);
//   }

//   updateMovieHoverState(id, isHovered) {
//     this.setState(prevState => ({
//       movies: prevState.movies.map(movie =>
//         movie.id === id ? { ...movie, isHovered } : movie
//       ),
//     }));
//   }
// }

// export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      query: '',
    };

    this.onInput = this.onInput.bind(this);
  }

  onInput(query) {
    this.setState({ query });
    this.searchMovie(query);
  }

  getPopularMovies() {
    const url = 'https://www.omdbapi.com/?apikey=45f0782a&s=war';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.Search) {
          this.setState({
            movies: data.Search,
          });
        }
      });
  }

  searchMovie(query) {
    const url = `https://www.omdbapi.com/?apikey=45f0782a&s=${query}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.Search) {
          this.setState({
            movies: data.Search,
          });
        }
      });
  }

  componentDidMount() {
    this.getPopularMovies();
  }

  render() {
    const { movies, query } = this.state;

    return (
      <div className="app">
        <form className="search" onInput={event => this.onInput(event.target.value)}>
          <input type="search" value={query} placeholder="Search for Movie Title …" />
        </form>
        <ul className="movies">
          {movies.map(movie => (
            <li key={movie.imdbID} className="movie">
              <figure>
                <img src={movie.Poster} alt={movie.Title} />
                <figcaption className="movie-title-container">
                  <h2 className="movie__title">{movie.Title}</h2>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  handleMouseEnter(id) {
    // this.updateMovieHoverState(id, true);
  }

  handleMouseLeave(id) {
    // this.updateMovieHoverState(id, false);
  }

  updateMovieHoverState(id, isHovered) {
    this.setState(prevState => ({
      movies: prevState.movies.map(movie =>
        movie.imdbID === id ? { ...movie, isHovered } : movie
      ),
    }));
  }
}

export default App;
