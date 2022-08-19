import { useCurrentThing } from "../data";
import AllThings from "./AllThings";
import SingleThing from "./SingleThing";

function Things() {
  const currentThing = useCurrentThing();
  if (currentThing) {
    return <SingleThing />;
  }
  return <AllThings />;
}

export default Things;
