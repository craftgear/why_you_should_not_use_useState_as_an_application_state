import { useAppState } from "../AppState";
import { HasProps } from "./HasProps";
import { shallow } from "zustand/shallow";

export const ShowB = () => {
  const [b, increaseB] = useAppState(
    (state) => [state.b, state.increaseB],
    shallow
  );

  return (
    <div>
      <h2> B is {b}</h2>
      <button onClick={increaseB}>increase B</button>
      <HasProps name="john" />
    </div>
  );
};
