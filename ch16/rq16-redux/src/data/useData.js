import { useSelector } from "react-redux";

function useData(selector) {
  return useSelector(selector);
}

export default useData;
