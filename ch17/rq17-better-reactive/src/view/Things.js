import { useHasCurrent } from "../data";
import AllThings from "./AllThings";
import SingleThing from "./SingleThing";

function Things() {
  const hasCurrent = useHasCurrent();
  if (hasCurrent) {
    return <SingleThing />;
  }
  return <AllThings />;
}

export default Things;
