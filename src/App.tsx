import { Counter } from "./Components/Counter/Counter";
import "./App.css";
import { Modal } from "./Components/Modal/Modal";

function App() {
  return (
    <>
      <div className="wrapper">
        <header></header>
        <main>
          <Counter />
        </main>
        <footer></footer>
      </div>
      <Modal />
    </>
  );
}

export default App;
