// generate placeholder jsx

import { useParams } from "react-router-dom";

export default function About() {
  const params = useParams();
  console.log({ params });

  return <h1>About</h1>;
}
