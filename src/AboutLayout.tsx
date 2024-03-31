// generate placeholder jsx

import { Outlet } from "react-router-dom";

export default function About(props: any) {
  console.log(props);

  return (
    <>
      <h1>About Layout</h1>
      <Outlet></Outlet>
    </>
  );
}
