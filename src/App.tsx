import { Route, Routes, useRoutes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Other from "./Other";
import AboutLayout from "./AboutLayout";
import "./App.css";
import { Suspense, lazy } from "react";
import delay from "delay";

import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

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
      <GoogleOAuthProvider clientId="177736600735-rg6gn26be2p7950igvforgqhmf0nntuh.apps.googleusercontent.com">
        <Routes>
          <Route path="/login" Component={Login}></Route>
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
      </GoogleOAuthProvider>
    </>
  );
}

const Loader = () => <p>Loading</p>;

export default App;
