import React from 'react'
import { create } from 'zustand';

type State = {
  requestFamilies: number[];
  searchValue: string;
  isScheduled: boolean;
}

type Actions = {
  setRequestFamilies: (requestFamilies: number[]) => void;
  setSearchValue: (searchValue: string) => void;
  toggleScheduled: () => void;
  reset: () => void;
}

const initialState: State = {
  requestFamilies: [],
  searchValue: "",
  isScheduled: false,
}

const useFiltersStore = create<State & Actions>(set => ({
  ...initialState,

  setRequestFamilies: (requestFamilies: number[]) => set({ requestFamilies }),
  setSearchValue: (searchValue) => set({ searchValue }),
  toggleScheduled: () => set(prev => ({
    isScheduled: !prev.isScheduled
  })),
  reset: () => set({ ...initialState })
}));

export default useFiltersStore