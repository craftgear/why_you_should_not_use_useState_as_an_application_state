import { useAppState } from "../AppState";
import { NoProps } from "./NoProps";

export const ShowA = () => {
  const { appState, setAppState } = useAppState();

  return (
    <div>
      <h2> A is {appState.a}</h2>
      <button
        onClick={() => {
          setAppState({
            ...appState,
            a: appState.a + 1,
          });
        }}
      >
        increase A
      </button>
      <NoProps />
    </div>
  );
};
