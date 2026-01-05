const Pagination = ({ total, perPage, currentPage, setCurrentPage }) => {
  const pages = Math.ceil(total / perPage);

  return (
    <div className="pagination">
      {[...Array(pages)].map((_, i) => (
        <button
          key={i}
          className={currentPage === i + 1 ? "active" : ""}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
