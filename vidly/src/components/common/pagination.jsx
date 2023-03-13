import React from "react";
import _ from "lodash";
import PropTypes from 'prop-types';

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageLength =  Math.ceil(itemsCount/ pageSize);
  if (pageLength === 1) return null;
  const pages = _.range(1, pageLength + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((element) => (
          <li className={element === currentPage ? 'page-item active': 'page-item'} key={element}>
            <a className="page-link" onClick={() => onPageChange(element)}>
              {element}{element}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {

  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired

}

export default Pagination;
