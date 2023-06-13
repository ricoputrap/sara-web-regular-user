import { useMemo } from "react";
import useFiltersStore from "../../stores/useFiltersStore";
import { KPIItem } from "../index.types";
import useKPIStore from "../store";
import useToggleActive from "./useToggleActive";

interface ReturnType {
  data: KPIItem[];
  toggleActive: (id: number) => void;
  setIsBlinking: (id: number, isBlinking: boolean) => void;
}

const useKPI = (): ReturnType => {
  const toggleActive = useToggleActive();

  const data: KPIItem[] = useKPIStore(state => state.data);
  const blinkingIDs: number[] = useKPIStore(state => state.blinkingIDs);
  const setIsBlinking = useKPIStore(state => state.setIsBlinking);
  const requestFamilies: number[] = useFiltersStore(state => state.requestFamilies);
  const computedData: KPIItem[] = useMemo(() => data.map(item => ({
    ...item,
    isActive: requestFamilies.includes(item.id),
    isBlinking: blinkingIDs.includes(item.id)
  })), [data, requestFamilies, blinkingIDs]);

  return {
    data: computedData,
    toggleActive,
    setIsBlinking
  };
}

export default useKPI;