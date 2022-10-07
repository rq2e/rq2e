import { useUser } from "../data";
import Things from "./Things";
import LoginSignup from "./LoginSignup";

function View() {
  const user = useUser();
  if (user) {
    return <Things />;
  }
  return <LoginSignup />;
}

export default View;
