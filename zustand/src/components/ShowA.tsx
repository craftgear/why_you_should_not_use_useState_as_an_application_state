import { useAppState } from "../AppState";
import { NoProps } from "./NoProps";
import { shallow } from "zustand/shallow";

export const ShowA = () => {
  const [a, increaseA] = useAppState(
    (state) => [state.a, state.increaseA],
    shallow
  );

  return (
    <div>
      <h2> A is {a}</h2>
      <button onClick={increaseA}>increase A</button>
      <NoProps />
    </div>
  );
};
