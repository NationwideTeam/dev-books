import "./topbar.css";
import statusBar from "../../assets/status_bar.svg";

function Topbar() {
  return (
    <div className="topbar">
      <img src={statusBar} alt="데브북스" />
    </div>
  );
}

export default Topbar;
