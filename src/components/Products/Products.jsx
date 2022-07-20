import React, { useState, useEffect } from "react";
import "./products.css";
import { Link } from "react-router-dom";

function Product(props) {
  const { text, price, image } = props;
  return (
    // !!링크 추후 변경!!
    <Link to="/myProfile" className="product">
      <img src={image} alt="" />
      <p className="productText">{text}</p>
      <p className="productPrice">{price} 원</p>
    </Link>
  );
}

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    async function getUserProduct() {
      const url = "https://mandarin.api.weniv.co.kr";
      const accountName = localStorage.getItem("accountname");
      const token = localStorage.getItem("token");
      const init = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      };

      try {
        // userProduct
        console.log(accountName);
        const resUserProduct = await fetch(
          `${url}/product/${accountName}`,
          init
        );
        const resUserProductJson = await resUserProduct.json();
        const userProduct = resUserProductJson.product;
        setProducts(userProduct);
      } catch (err) {
        console.error("err", err);
      }
    }
    getUserProduct();
  }, []);

  return (
    <div className="Products">
      <h2 id="productsTitle">판매 중인 상품</h2>
      <div className="productsWrapper">
        {products.map(function (item, index) {
          return (
            <Product
              key={item.id}
              image={item.itemImage}
              text={item.itemName}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
