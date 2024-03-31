import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./App.css";

function App() {
  return (
    <>
      <p>App</p>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
      </Routes>
    </>
  );
}

export default App;
