import React from "react";

export const Cart = ({ cart }) => {
  const { id, image, title, color, price } = cart;
  return (
    <div key={id} className="mycart">
      <img src={image} alt="" />
      <div className="cartDescription">
        <h3>{title}</h3>
        <p>{color}</p>
      </div>
      <div className="pricebutton">
        <h2>{price}</h2>
        <button>Add Cart</button>
      </div>
    </div>
  );
};
