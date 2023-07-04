import React from 'react';
import Moviecard from './Moviecard';
import Navbar from './Navbar';
import MovieList from './MovieList';
class App extends React.Component {
  render() {
    return( 
    <>
      <Navbar />
      <MovieList />
    </>
    )
  }
    
}

export default App;
