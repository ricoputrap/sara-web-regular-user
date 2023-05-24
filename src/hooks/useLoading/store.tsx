import { create } from "zustand";

type State = {
  isLoading: boolean;
}
type Action = {
  setLoading: (isLoading: boolean) => void;
}

const useLoadingStore = create<State & Action>(set => ({
  isLoading: false,
  setLoading: (isLoading: boolean) => set({ isLoading })
}));

export default useLoadingStore;