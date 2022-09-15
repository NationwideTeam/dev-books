import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UploadNav } from "../../components/Navbar/Navbar";
import { TextInput } from "../../components/TextInput/TextInput";
import Topbar from "../../components/Topbar/Topbar";
import {
  ProductUploadWrap,
  ProductImgUploadWrap,
  ImgUploadText,
  ProductImg,
  TextInputWrap,
  ErrorMessage,
} from "./productUpload.style";

// 1. 상품등록 이미지 컴포넌트
export const ProductImgUpload = (props) => {
  return (
    <ProductImgUploadWrap>
      <ImgUploadText>이미지 등록</ImgUploadText>
      <ProductImg htmlFor="productImg">
        <img src={props.src} alt="" />
      </ProductImg>
      <input
        type="file"
        id="productImg"
        name="productImg"
        accept="image/*"
        className="a11yHidden"
        onChange={props.onChange}
      />
    </ProductImgUploadWrap>
  );
};

// 2. 상품 등록 페이지
const ProductUpload = () => {
  // 2.1 초기 설정
  // 2.1.1 변수 초기 설정
  const [productImg, setProductImg] = useState(null);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productUrl, setProductUrl] = useState("");

  // 2.1.2 에러 초기 설정
  const [productImgErr, setProductImgErr] = useState("");
  const [productNameErr, setProductNameErr] = useState("");
  const [productPriceErr, setProductPriceErr] = useState("");
  const [productUrlErr, setProductUrlErr] = useState("");

  // 2.2 프로필 이미지 업로드
  // 2.2.1 프로필 이미지 POST API 통신
  const imgUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const url = "https://mandarin.api.weniv.co.kr";
    const imgUploadReqPath = "/image/uploadfile";

    try {
      const res = await fetch(url + imgUploadReqPath, {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      return url + "/" + json.filename;
    } catch (err) {
      console.error(err);
    }
  };

  // 2.2.2 예외처리 함수: 이미지 용량 초과
  const handleGetImg = async (e) => {
    const file = e.target.files[0];
    const imgSize = e.target.files[0].size;
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (imgSize > maxSize) {
      setProductImgErr("이미지 용량은 10MB 이내로 등록 가능합니다.");
    } else {
      setProductImgErr("");
      const imgSrc = await imgUpload(file);
      setProductImg(imgSrc);
    }
  };

  // 2.2.3 예외처리: 상품명, 가격, 판매링크
  const checkUploadError = () => {
    if (productImg === "") {
      setProductImgErr("상품 이미지를 등록해 주세요.");
    } else if (productName.length < 1) {
      setProductNameErr("상품명을 입력해 주세요.");
    } else if (productName.length > 15 || productName.length < 2) {
      setProductNameErr("상품명은 2~15자 이내여야 합니다.");
    } else if (productPrice === "") {
      setProductPriceErr("가격을 입력해주세요.");
    } else if (productUrl === "") {
      setProductUrlErr("판매 링크를 입력해 주세요.");
    } else {
      setProductImgErr("");
      setProductNameErr("");
      setProductPriceErr("");
      setProductUrlErr("");
    }
  };

  // 3. 상품 업로드 최종 데이터 전송
  const upload = async () => {
    const url = "https://mandarin.api.weniv.co.kr";
    const productPath = "/product";
    const token = localStorage.getItem("token");
    const originNum = parseInt(productPrice);

    const uploadData = {
      product: {
        itemName: productName,
        price: originNum,
        link: productUrl,
        itemImage: productImg,
      },
    };
    const init = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(uploadData),
    };

    try {
      const res = await fetch(url + productPath, init);
      const json = await res.json();
      //=== 3개로 하면 안된다. string으로 바뀌는 문제가 있는듯.
      if (json.status == 422 || json.status == 401) {
        errorPage();
      } else {
        next();
      }
    } catch (err) {
      console.error(err);
    }
  };

  //3.1 다음 페이지 이동
  let navigate = useNavigate();
  const next = () => {
    navigate("/myProfile");
  };
  const errorPage = () => {
    navigate("/NotFound");
  };

  return (
    <ProductUploadWrap>
      <Topbar />
      <UploadNav
        title="업로드"
        onClick={upload}
        className={
          !productNameErr &&
          !productPriceErr &&
          !productImgErr &&
          !productUrlErr &&
          productName !== "" &&
          productPrice !== ""
            ? "button uploadButton ms"
            : "button uploadButton ms disabled"
        }
      />

      <ProductImgUpload src={productImg} onChange={handleGetImg} />
      <ErrorMessage>
        <span>{productImgErr}</span>
      </ErrorMessage>
      <TextInputWrap>
        <TextInput
          label="상품명"
          type="text"
          placeholder="2~15자 이내여야 합니다."
          for={"productName"}
          id={"productName"}
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
            setProductNameErr("");
          }}
          onBlur={checkUploadError}
        />
        <ErrorMessage>{productNameErr}</ErrorMessage>
      </TextInputWrap>
      <TextInputWrap>
        <TextInput
          label="가격"
          type="number"
          placeholder="숫자만 입력 가능합니다."
          for={"price"}
          id={"price"}
          value={productPrice}
          onChange={(e) => {
            setProductPrice(e.target.value);
            setProductPriceErr("");
          }}
          onBlur={checkUploadError}
        />
        <ErrorMessage>{productPriceErr}</ErrorMessage>
      </TextInputWrap>
      <TextInputWrap>
        <TextInput
          label="판매 링크"
          type="text"
          placeholder="URL을 입력해 주세요."
          for={"link"}
          id={"link"}
          value={productUrl}
          onChange={(e) => {
            setProductUrl(e.target.value);
            setProductUrlErr("");
          }}
          onBlur={checkUploadError}
        />
        <ErrorMessage>{productUrlErr}</ErrorMessage>
      </TextInputWrap>
    </ProductUploadWrap>
  );
};

export default ProductUpload;
