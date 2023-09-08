import "./App.css";

function App() {
  let a = 54545;
  function handler() {
    console.log("sadss");
  }
  return (
    <div className="App">
      <header className="App-header">
        hello world {a}
        <button onClick={handler}>click</button>
      </header>
    </div>
  );
}

export default App;
