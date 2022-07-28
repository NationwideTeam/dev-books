import React, { useState, useEffect } from "react";
import "./products.css";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import ModalContent from "../ModalContent/ModalContent";
import Alert from "../Alert/Alert";

function Product(props) {
  const { value, text, price, image, link, onClick } = props;

  const [prodModal, setProdModal] = useState(false);
  const [prodAlert, setProdAlert] = useState(false);

  let navigate = useNavigate();

  const prodUpdate = () => {
    navigate(`/ProductEdit?productId=${value}`, {
      state: {
        productId: value,
        productTxt: text,
        productPrice: price,
        productImg: image,
        productLink: link,
      },
    });
  };

  const prodLink = () => {
    window.open(link);
  };

  return (
    <>
      {/* // !!링크 추후 변경!! */}
      <Link
        to="/myProfile"
        className="product"
        onClick={() => setProdModal(true)}
      >
        <img src={image} alt="" />
        <p className="productText">{text}</p>
        <p className="productPrice">{price} 원</p>
      </Link>
      <div
        className={prodModal ? "prodModal" : "disabledProdPopup"}
        onClick={() => {
          setProdModal(false);
        }}
      >
        <Modal>
          <ModalContent
            txt="삭제"
            onClick={() => {
              setProdAlert(true);
              setProdModal(false);
            }}
          />
          <ModalContent txt="수정" onClick={prodUpdate} />
          <ModalContent txt="웹사이트에서 상품 보기" onClick={prodLink} />
        </Modal>
      </div>
      <div className={prodAlert ? "prodModal" : "disabledProdPopup"}>
        <Alert
          message="상품을 삭제할까요?"
          cancel="취소"
          confirm="삭제"
          value={value}
          onClickConfirm={onClick}
          onClickCancel={() => setProdAlert(false)}
        />
      </div>
    </>
  );
}

function Products(props) {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    async function getUserProduct() {
      const url = "https://mandarin.api.weniv.co.kr";
      const accountName = props.accountName;
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
    <div className={props.className}>
      <h2 id="productsTitle">판매 중인 상품</h2>
      <div className="productsWrapper">
        {products.map(function (item, index) {
          return (
            <Product
              key={item.id}
              value={item.id}
              image={item.itemImage}
              text={item.itemName}
              price={item.price}
              link={item.link}
              onClick={props.onClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
