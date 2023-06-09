import React from 'react'
import { create } from 'zustand';

type State = {
  requestFamilies: number[];
  searchValue: string;
}

type Actions = {
  setRequestFamilies: (requestFamilies: number[]) => void;
  setSearchValue: (searchValue: string) => void;
  reset: () => void;
}

const initialState: State = {
  requestFamilies: [],
  searchValue: "",
}

const useFiltersStore = create<State & Actions>(set => ({
  ...initialState,

  setRequestFamilies: (requestFamilies: number[]) => set({ requestFamilies }),
  setSearchValue: (searchValue) => set({ searchValue }),
  reset: () => set({ ...initialState })
}));

export default useFiltersStore