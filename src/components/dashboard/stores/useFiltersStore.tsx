import React from 'react'
import { create } from 'zustand';

export type TFilterStatus = "pending" | "closed" | "onhold" | "all";

type State = {
  requestFamilies: number[];
  searchValue: string;
  isScheduled: boolean;
  status: TFilterStatus;
}

type Actions = {
  setRequestFamilies: (requestFamilies: number[]) => void;
  setSearchValue: (searchValue: string) => void;
  toggleScheduled: () => void;
  toggleStatus: (status: string) => void;
  reset: () => void;
}

const initialState: State = {
  requestFamilies: [],
  searchValue: "",
  isScheduled: false,
  status: "pending"
}

const useFiltersStore = create<State & Actions>(set => ({
  ...initialState,

  setRequestFamilies: (requestFamilies: number[]) => set({ requestFamilies }),
  setSearchValue: (searchValue) => set({ searchValue }),
  toggleScheduled: () => set(prev => ({
    isScheduled: !prev.isScheduled
  })),
  toggleStatus: (status) => set({ status: status as TFilterStatus }),
  reset: () => set({ ...initialState })
}));

export default useFiltersStore