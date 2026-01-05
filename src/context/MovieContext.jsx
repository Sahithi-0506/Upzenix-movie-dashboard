import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: Date.now() }]);
    showNotification("Movie added successfully!", "success");
  };

  const updateMovie = (updatedMovie) => {
    setMovies(
      movies.map((m) => (m.id === updatedMovie.id ? updatedMovie : m))
    );
    showNotification("Movie updated successfully!", "success");
  };

  return (
    <MovieContext.Provider
      value={{ movies, addMovie, updateMovie, notification }}
    >
      {children}
    </MovieContext.Provider>
  );
};
