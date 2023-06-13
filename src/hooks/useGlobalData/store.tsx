import { create } from "zustand";
import { TPropertyData } from "./property.types";
import propertyInitialData from "./propertyInitialData";

type TPage = "dashboard" | "rooms" | "report" | "schedules";
type THasDataInit = {
  dashboard: boolean;
  rooms: boolean;
  report: boolean;
  schedules: boolean;
}

type State = {
  hasDataInitialized: THasDataInit;
  propertyData: TPropertyData;
}

type Actions = {
  setHasDataInitialized: (page: TPage, value: boolean) => void;
  setPropertyData: (propertyData: TPropertyData) => void;
}

const useGlobalData = create<State & Actions>(set => ({
  hasDataInitialized: {
    dashboard: false,
    rooms: false,
    report: false,
    schedules: false
  },
  propertyData: propertyInitialData,
  setHasDataInitialized: (page, value) => set(prev => ({
    hasDataInitialized: {
      ...prev.hasDataInitialized,
      [page]: value
    }
  })),
  setPropertyData: (propertyData) => set({ propertyData })
}));

export default useGlobalData;