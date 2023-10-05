import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Lean startup</p>
        <p className="product__price">
          <small>Rs.</small>
          <strong>599</strong>
        </p>
        <div className="product__rating">
          <p>🌟</p>
        </div>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/81-QB7nDh4L._SY425_.jpg"
        alt=""
      ></img>

      <button> Add to Cart</button>
    </div>
  );
}

export default Product;
