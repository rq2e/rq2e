import useSend from "./useSend";

function useAddThing() {
  const send = useSend();
  return (name) => send({ type: "ADD", name });
}

export default useAddThing;
