import React from "react";
import _ from "lodash";

const Pagination = props => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pageLength =  Math.ceil(itemsCount/ pageSize);
  if (pageLength === 1) return null;
  const pages = _.range(1, pageLength + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((element) => (
          <li className={element === currentPage ? 'page-item active': 'page-item'} key={element}>
            <a className="page-link" onClick={()=>onPageChange(element)}>
              {element}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
