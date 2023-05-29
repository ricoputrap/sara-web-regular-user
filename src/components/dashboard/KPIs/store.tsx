import { create } from "zustand";
import { KPIItem } from "./index.types";

type State = {
  data: KPIItem[];
  blinkingIDs: number[];
}

type Actions = {
  setData: (data: KPIItem[]) => void;
  setIsBlinking: (id: number, isBlinking: boolean) => void;
}

const useKPIStore = create<State & Actions>(set => ({
  data: [],
  blinkingIDs: [],

  setData: (data: KPIItem[]) => set({ data }),
  setIsBlinking: (id, isBlinking) => set(state => {
    let blinkingIDs = [...state.blinkingIDs];

    if (!isBlinking)
      blinkingIDs = blinkingIDs.filter(item => item !== id);
    else {
      if (!blinkingIDs.includes(id)) {
        blinkingIDs.push(id);
      }
    }

    return { blinkingIDs };
  })
}));

export default useKPIStore;