import "./alert.css";

export default function Alert(props) {
  const { message, cancel, confirm } = props;
  return (
    <div className="alertBackground">
      <div className="alertWrap">
        <strong className="alertTxt">{message}</strong>
        <div className="alertBtnWrap">
          <button className="cancelBtn">{cancel}</button>
          <button className="deleteBtn">{confirm}</button>
        </div>
      </div>
    </div>
  )
}
