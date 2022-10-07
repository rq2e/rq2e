import { useUser } from "../data";
import Things from "./Things";
import LoginSignup from "./LoginSignup";

function View() {
  const hasUser = useUser();
  if (hasUser) {
    return <Things />;
  }
  return <LoginSignup />;
}

export default View;
