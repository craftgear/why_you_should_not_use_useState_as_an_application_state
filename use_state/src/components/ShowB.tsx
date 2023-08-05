import { useAppState } from "../AppState";
import { HasProps } from "./HasProps";

export const ShowB = () => {
  const { appState, setAppState } = useAppState();

  return (
    <div>
      <h2> B is {appState.b}</h2>
      <button
        onClick={() => {
          setAppState({
            ...appState,
            b: appState.b + 1,
          });
        }}
      >
        increase B
      </button>
      <HasProps name="john" />
    </div>
  );
};
