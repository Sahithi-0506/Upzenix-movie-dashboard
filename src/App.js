import { useState, useContext } from "react";
import { MovieContext } from "./context/MovieContext";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import Filters from "./components/Filters";
import Notification from "./components/Notification";

function App() {
  const { movies, notification } = useContext(MovieContext);
  const [editingMovie, setEditingMovie] = useState(null);
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>🎬 Movie Dashboard</h1>

      <Notification notification={notification} />

      <MovieForm editingMovie={editingMovie} setEditingMovie={setEditingMovie} />

      <Filters setSearch={setSearch} />

      <MovieList
        movies={filteredMovies}
        setEditingMovie={setEditingMovie}
      />
    </div>
  );
}

export default App;
