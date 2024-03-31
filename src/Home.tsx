// generate placeholder jsx

import { useGoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";

export default function About() {
  const auth = useGoogleLogin({
    onSuccess: (data) => {
      console.log({ data });
    },
    onError: (data) => {
      console.log({ data });
    },
  });

  return (
    <h1>
      <Link to="/about">About</Link>
      Home
    </h1>
  );
}
