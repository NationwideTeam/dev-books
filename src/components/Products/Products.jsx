import React from "react";
import "./products.css";
import imageExample from "../../assets/product-img-example.png";

function Product(props) {
  return (
    <div className="product">
      <img src={imageExample} alt="" />
      <p className="productText">{props.text}</p>
      <p className="productPrice">{props.price}</p>
    </div>
  );
}

function Products() {
  return (
    <div className="Products">
      <h2 id="productsTitle">판매 중인 상품</h2>
      <div className="productsWrapper">
        <Product text="애월읍 노지 감귤" price="30,000원" />
        <Product text="애월읍 노지 감귤" price="30,000원" />
        <Product text="애월읍 노지 감귤" price="30,000원" />
      </div>
    </div>
  );
}

export default Products;
