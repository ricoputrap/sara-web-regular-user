import React from 'react'
import { create } from 'zustand';

type State = {
  requestFamilies: number[];
}

type Actions = {
  setRequestFamilies: (requestFamilies: number[]) => void;
  reset: () => void;
}

const useFiltersStore = create<State & Actions>(set => ({
  requestFamilies: [],

  setRequestFamilies: (requestFamilies: number[]) => set({ requestFamilies }),
  reset: () => set({ requestFamilies: [] })
}));

export default useFiltersStore