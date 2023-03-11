import React from "react";

const List = ({ getGenres, selectedItem, onItemSelect, textProperty, valueProperty}) => {

  return (
    <ul className="list-group">
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
