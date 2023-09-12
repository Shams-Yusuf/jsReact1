import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
  // <div>
  //   <Text>
  //     lorem12312453 <button>click</button>
  //   </Text>
  //   <Text>frontend</Text>
  //   <Text>expo</Text>
  //   <Test />
  // </div>
);
// function Text(props) {
//   console.log(props);
//   return;
//   <p>{props.children}</p>;
// }
// function Text({ children }) {
//   console.log(children);
//   return <p>{children}</p>;
// }
// function Test() {
//   let counter = 12;
//   return <p>{counter + 4}</p>;
// }
