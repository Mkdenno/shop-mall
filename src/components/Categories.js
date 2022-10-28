import React from "react";
import Category from "./Category";
import './categories.css'


const Categories = ({filterItems}) => {
  return (
    <div className="container cardiii">
        <Category image="./images/cr.jpg" name="crocs" filterItems={filterItems} />
        <Category image="./images/two.jpg" name="sports" filterItems={filterItems} />
        <Category image="./images/one.jpg" name="men" filterItems={filterItems} />
        <Category image="./images/three.jpg" name="lady" filterItems={filterItems}/>
    </div>
  );
};

export default Categories;
