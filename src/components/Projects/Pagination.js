import React from "react";

const Pagination = ({
  projectPerPage,
  totalProjects,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);

  return (
    <nav>
      <ul className="pagination pagination-lg projects-page">
        {pageNumbers.map((number) => (
          <li
            className={
              currentPage === number
                ? "page-item active"
                : "page-item"
            }
            key={number}
          >
            <a onClick={() => paginate(number)} className="page-link projects-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;