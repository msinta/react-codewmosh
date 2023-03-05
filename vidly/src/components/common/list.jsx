import React from "react";

const List = (props) => {
  const { getGenres, selectedItem, onItemSelect, textProperty, valueProperty} = props;

  return (
    <ul className="list-group">
      <li className="list-group-item">All Genres</li>
      {getGenres.map((element) => (
        <li
          onClick={() => onItemSelect(element)}
          key={element[valueProperty]}
          className={
            element === selectedItem
              ? "list-group-item active "
              : "list-group-item"
          }
        >
            {element[textProperty]}
        </li>
      ))}
    </ul>
  );
};


List.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default List;
