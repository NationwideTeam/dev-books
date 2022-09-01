import {
  AlertBackground,
  AlertWrapper,
  AlertTxt,
  AlertBtnWrap,
  AlertBtn,
} from "./alert.style";

export default function Alert(props) {
  const { message, cancel, confirm, onClickCancel, onClickConfirm, value } =
    props;
  return (
    <AlertBackground>
      <AlertWrapper>
        <AlertTxt>{message}</AlertTxt>
        <AlertBtnWrap>
          <AlertBtn className="cancelBtn" onClick={onClickCancel}>
            {cancel}
          </AlertBtn>
          <AlertBtn
            className="deleteBtn"
            onClick={onClickConfirm}
            value={value}
          >
            {confirm}
          </AlertBtn>
        </AlertBtnWrap>
      </AlertWrapper>
    </AlertBackground>
  );
}
