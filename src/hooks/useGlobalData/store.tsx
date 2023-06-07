import { create } from "zustand";

type State = {
  hasDashboardInitialized: boolean;
}

type Actions = {
  setHasDashboardInitialized: (value: boolean) => void;
}

const useGlobalData = create<State & Actions>(set => ({
  hasDashboardInitialized: false,
  setHasDashboardInitialized(value) {
      set({ hasDashboardInitialized: value });
  },
}));

export default useGlobalData;