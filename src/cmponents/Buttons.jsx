import refresh from "../assets/images/refresh.png";
function Buttons({ counter, setCounter }) {
  function plus() {
    setCounter(counter + 1);
  }

  function minus() {
    setCounter(counter - 1);
  }

  function reset() {
    setCounter(0);
  }
  return (
    <div className="container">
      <div className="main-btn">
        <div className="btn">
          <button className="btn-plus" onClick={plus}>
            +
          </button>
        </div>
        <button onClick={reset} className="btn-img">
          <img src={refresh} alt="" />
        </button>

        <div className="btn">
          <button className="btn-minus" onClick={minus}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
