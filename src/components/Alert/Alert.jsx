import "./alert.css";

export default function Alert(props) {
  const { message, cancel, confirm, onClickCancel, onClickConfirm, value } =
    props;
  return (
    <div className="alertBackground">
      <div className="alertWrap">
        <strong className="alertTxt">{message}</strong>
        <div className="alertBtnWrap">
          <button className="cancelBtn" onClick={onClickCancel}>
            {cancel}
          </button>
          <button className="deleteBtn" onClick={onClickConfirm} value={value}>
            {confirm}
          </button>
        </div>
      </div>
    </div>
  );
}
