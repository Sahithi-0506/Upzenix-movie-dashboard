const Filters = ({ setSearch }) => {
  return (
    <input
      className="search"
      placeholder="Search movies..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Filters;
