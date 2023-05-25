import { create } from "zustand";
import { KPIItem } from "./index.types";

type State = {
  data: KPIItem[];
}

type Actions = {
  setData: (data: KPIItem[]) => void;
}

const useKPIStore = create<State & Actions>(set => ({
  data: [],
  setData: (data: KPIItem[]) => set({ data })
}));

export default useKPIStore;