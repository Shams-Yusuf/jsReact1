import refresh from "../assets/images/refresh.png";
function Buttons() {
  return (
    <div className="container">
      <div className="main-btn">
        <div className="btn-plus">
          <div className="btn">+</div>
        </div>
        <div className="btn-img">
          <img src={refresh} alt="" />
        </div>
        <div className="btn-minus">
          <div className="btn">-</div>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
