import React from "react";

const List = (props) => {
  const { getGenres, currentPage, onListChange} = props;


  return (
    <ul className="list-group">
      <li className="list-group-item">All Genres</li>
      {getGenres.map((element, index) => (
        <li
          className={
            index === currentPage
              ? "list-group-item active "
              : "list-group-item"
          }
          key={index}
        >
          <a onClick={() =>  onListChange(index, element)}>
            {element.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default List;
