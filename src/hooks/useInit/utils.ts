import { KPIItem, KPIResponseItem } from "@/components/dashboard/stores/useKPIStore/index.types";

export const prepareDataDashboardKPI = (data: KPIResponseItem[]) => {
  const result: KPIItem[] = data.map(item => ({
    id: parseInt(item.af_id + ""),
    name: item.af_name,
    value: item.total,
    isActive: false,
    isBlinking: false
  }));

  return result;
}