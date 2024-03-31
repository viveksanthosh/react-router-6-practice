import { Route, Routes, useRoutes } from "react-router-dom";
import Home from "./Home";
import Other from "./Other";
import AboutLayout from "./AboutLayout";
import "./App.css";
import { Suspense, lazy } from "react";
import delay from "delay";

const About = lazy(() => {
  return delay(1000).then(() => import("./About"));
});

function App() {
  const element = useRoutes([
    {
      path: "/other",
      element: <Other />,
    },
  ]);
  return (
    <>
      <Routes>
        <Route path="/about" element={<p>Parent</p>}></Route>
      </Routes>
      <p>App</p>
      {element}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" Component={Home} />
          <Route Component={AboutLayout} path="/about">
            <Route index Component={About} />
            <Route path="other" Component={Other} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

const Loader = () => <p>Loading</p>;

export default App;
