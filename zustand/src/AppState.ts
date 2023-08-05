import { create } from "zustand";

type State = {
  a: number;
  b: number;
};

export const useAppState = create((set) => ({
  a: 9,
  b: 100,
  increaseA: () => set((state: State) => ({ a: state.a + 1 })),
  increaseB: () => set((state: State) => ({ b: state.b + 1 })),
}));
