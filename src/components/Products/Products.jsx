import React, { useState, useEffect } from "react";
import "./products.css";
import imageExample from "../../assets/product-img-example.png";
import { Link } from "react-router-dom";
import axios from "axios";

//!!임시 API 사용중!!
function Product(props) {
  const { text, price, image } = props;
  return (
    // !!링크 추후 변경!!
    <Link to="/myProfile" className="product">
      <img src={image} alt="" />
      <p className="productText">{text}</p>
      <p className="productPrice">{price}</p>
    </Link>
  );
}

function Products() {
  const [products, setProducts] = useState([]);
  // console.log("products : ", products);
  useEffect(function () {
    axios
      .get(`http://localhost:8080/products`)
      .then((result) => {
        const items = result.data.products;
        console.log(items);
        setProducts(items);
      })
      .catch((error) => {
        console.error("에러 발생: ", error);
      });
  }, []);

  return (
    <div className="Products">
      <h2 id="productsTitle">판매 중인 상품</h2>
      {/* //상품 목록 _ !!이미지 기본 이미지 사용 중, API연동 후 URL 변경해야 함!!*/}
      <div className="productsWrapper">
        {products.map(function (item, index) {
          return (
            <Product
              key={item.id}
              text={item.name}
              price={item.price}
              image={imageExample}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
