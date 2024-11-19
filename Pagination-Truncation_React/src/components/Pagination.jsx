/* eslint-disable react/prop-types */
const Pagination = ({ products, page, setPage, maxVisiblePage = 10 }) => {
  const totalPages = Math.ceil(products.length / 10);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  const renderPageNumbers = () => {
    let pageNumbers = [];

    if (totalPages <= maxVisiblePage) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(renderPageKey(i));
      }
    } else {
      const startPage = Math.max(1, page - Math.floor(maxVisiblePage / 2));
      const endPage = Math.min(totalPages, startPage + maxVisiblePage - 1);

      if (startPage > 1) {
        if (startPage > 2) pageNumbers.push(renderPageKey("1"));
        pageNumbers.push(renderPageKey("...", "ellipsis-start"));
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(renderPageKey(i));
      }

      if (endPage < totalPages) {
        pageNumbers.push(renderPageKey("...", "ellipsis-end"));
        if (endPage < totalPages + 1) pageNumbers.push(totalPages - 1);
      }
    }

    return pageNumbers;
  };

  const renderPageKey = (currPage, key) => {
    return (
      <span
        key={key}
        className={page === currPage ? "pagination__selected" : ""}
      >
        {currPage}
      </span>
    );
  };

  return (
    <div className="pagination">
      <span
        className={page <= 1 ? "pagination__disabled" : ""}
        onClick={() => selectPageHandler(page - 1)}
      >
        ⏮️
      </span>
      {renderPageNumbers()}
      <span
        className={page >= products.length / 10 ? "pagination__disabled" : ""}
        onClick={() => selectPageHandler(page + 1)}
      >
        ⏭️
      </span>
    </div>
  );
};

export default Pagination;
