import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";

function MovieCard({movie}) {
  return (
    <div>
            <Card style={{ width: '18rem' ,margin:"10px" } }>
      <Card.Img variant="top" src={movie.posterurl} />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>
            <p>{movie.description}</p>
        </Card.Text>
        
        
        <ReactStars
        count={5}
        size={24}
        activeColor="#ffd700"
        value={movie.rating}
    />,
        <Button variant="primary">Trailer</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard