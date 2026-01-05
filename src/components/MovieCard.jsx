const MovieCard = ({ movie, setEditingMovie }) => {
  return (
    <div className="card">
      <h3>{movie.title}</h3>
      <p>{movie.genre}</p>
      <button onClick={() => setEditingMovie(movie)}>Edit</button>
    </div>
  );
};

export default MovieCard;
