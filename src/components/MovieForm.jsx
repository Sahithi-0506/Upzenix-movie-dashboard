import { useState, useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";

const MovieForm = ({ editingMovie, setEditingMovie }) => {
  const { addMovie, updateMovie } = useContext(MovieContext);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingMovie) {
      setTitle(editingMovie.title);
      setGenre(editingMovie.genre);
    }
  }, [editingMovie]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !genre) {
      setError("All fields are required");
      return;
    }

    if (editingMovie) {
      updateMovie({ ...editingMovie, title, genre });
      setEditingMovie(null);
    } else {
      addMovie({ title, genre });
    }

    setTitle("");
    setGenre("");
    setError("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>{editingMovie ? "Edit Movie" : "Add Movie"}</h2>

      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <button type="submit">
        {editingMovie ? "Update Movie" : "Add Movie"}
      </button>
    </form>
  );
};

export default MovieForm;
