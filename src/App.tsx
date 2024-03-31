import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Other from "./Other";
import AboutLayout from "./AboutLayout";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<p>Parent</p>}></Route>
      </Routes>
      <p>App</p>
      <Routes>
        <Route path="/" Component={Home} />
        <Route Component={AboutLayout} path="/about">
          <Route index Component={About} />
          <Route path="other" Component={Other} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
