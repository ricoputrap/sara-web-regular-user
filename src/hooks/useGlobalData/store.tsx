import { create } from "zustand";
import { TPropertyData } from "./property.types";
import propertyInitialData from "./propertyInitialData";

type State = {
  hasDashboardInitialized: boolean;
  propertyData: TPropertyData;
}

type Actions = {
  setHasDashboardInitialized: (value: boolean) => void;
  setPropertyData: (propertyData: TPropertyData) => void;
}

const useGlobalData = create<State & Actions>(set => ({
  hasDashboardInitialized: false,
  propertyData: propertyInitialData,
  setHasDashboardInitialized(value) {
      set({ hasDashboardInitialized: value });
  },
  setPropertyData: (propertyData) => set({ propertyData })
}));

export default useGlobalData;