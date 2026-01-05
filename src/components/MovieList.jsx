import { useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

const MovieList = ({ movies, setEditingMovie }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 4;

  const indexOfLast = currentPage * moviesPerPage;
  const indexOfFirst = indexOfLast - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <div className="movie-list">
        {currentMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            setEditingMovie={setEditingMovie}
          />
        ))}
      </div>

      <Pagination
        total={movies.length}
        perPage={moviesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default MovieList;
