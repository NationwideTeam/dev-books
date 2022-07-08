import { UploadNav } from '../../components/Navbar/Navbar';
import { TextInput } from '../../components/TextInput/TextInput';
import Topbar from "../../components/Topbar/Topbar";
import './productUpload.css';

export const ProductImgUpload = () => {
  return (
    <div className="productImgUpload">
      <span className="imgUploadText">이미지 등록</span>
      <label htmlFor="productImg" className="productImg">
        <img src="" alt="" />
      </label>
      <input type="file" id="productImg" name="productImg" accept="image/*" className="a11yHidden" />
    </div>
  )
}

export const ProductUpload = () => {
  return (
    <div className="productUpload">
      <Topbar/>
      <UploadNav title="저장" />
      <ProductImgUpload />
      <div className="textInput">
        <TextInput 
          label="상품명"
          type="text"
          placeholder="2~15자 이내여야 합니다."
          for={'productName'}
          id={'productName'}
        />
      </div>
      <div className="textInput">
        <TextInput 
          label="가격"
          type="number"
          placeholder="숫자만 입력 가능합니다."
          for={'price'}
          id={'price'}
        />
      </div>
      <div className="textInput">
        <TextInput 
          label="판매 링크"
          type="text"
          placeholder="URL을 입력해 주세요."
          for={'link'}
          id={'link'}

        />
      </div>
    </div>
  );
};

export default ProductUpload;