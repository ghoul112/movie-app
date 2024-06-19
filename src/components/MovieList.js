import React from 'react'
import MovieCard from './MovieCard'
import AddMovie from './AddMovie'
function MovieList({movies,setmovies,text,rate}) {
  return (
    <>
    <div className='add'>
      <AddMovie movies={movies} setmovies={setmovies}/>
    </div>
    <div className="container"> 
        {movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase())&& el.rating>=rate).map((el)=>(
        <MovieCard movie={el}/>
        )).reverse()}
    </div>
    </>
  )
}

export default MovieList