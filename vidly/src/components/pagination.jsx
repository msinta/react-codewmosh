import React, { Component } from "react";

class Pagination extends Component {




  handlePagination(){
  const itemsPerPage = 4;
  const pageLength = Math.ceil(this.props.movies.length/itemsPerPage)
  let html = [];
  for(let i = 1; i <= pageLength; i++)
    html.push(
        <a className="page-link" href="#">
          {i}
        </a>
    );
  return html;

  }

  render() {
    return (
          <nav aria-label="Page navigation example">
            <ul className="pagination">
            {this.handlePagination().map((element, index) => (
              <li key={index}>{element}</li>
              ))
              }
            </ul>
          </nav>
    );
  }
}

export default Pagination;
