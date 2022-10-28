import React from "react";

const Category = ({ filterItems, image, name }) => {
  return (
      <div className=" container categories">
        <div className="card" onClick={() => filterItems(name)}>
          <img src={image} alt="" />
          <div>
            <h6>{name}</h6>
          </div>
      </div>
    </div>
  );
};

export default Category;
