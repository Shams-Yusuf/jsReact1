import Number from "../cmponents/Number";
import Buttons from "../cmponents/Buttons";
import refresh from "../assets/images/refresh.png";
import { useState } from "react";

function MainContent() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <div className="main">
        <Number counter={counter} />
        <Buttons counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
}

export default MainContent;
