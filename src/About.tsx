// generate placeholder jsx

import { useOutletContext, useParams } from "react-router-dom";

export default function About() {
  const outlet = useOutletContext();
  const params = useParams();
  console.log({ outlet });

  return <h1>{(outlet as any)?.hey}</h1>;
}
