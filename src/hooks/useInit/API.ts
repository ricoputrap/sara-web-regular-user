import { KPIResponseItem } from "@/components/dashboard/KPIs/index.types";
import callFetch from "@/utils/callFetch";
import { TPropertyData } from "../useGlobalData/property.types";

const HOST: string = process.env.NEXT_PUBLIC_API || "http://localhost/index.php/api/v2";

export type TDashboardInitialData = {
  kpi: KPIResponseItem[];
  pendingRequests: any[];
  supportingData: any;
}

const defaultDashboardInitialData: TDashboardInitialData = {
  kpi: [],
  pendingRequests: [],
  supportingData: {}
}

const API = {
  initialize: async (): Promise<TPropertyData> => {
    const URL = `${HOST}/property`;

    const response = await callFetch(URL, {
      method: "GET",
      credentials: "include"
    });

    const data: TPropertyData = response?.data;
    return data;
  },
  initDashboard: async (): Promise<TDashboardInitialData> => {
    const URL = `${HOST}/dashboard`;

    const response = await callFetch(URL, {
      method: "GET",
      credentials: "include"
    });

    const data: TDashboardInitialData = response?.data || defaultDashboardInitialData;
    return data;
  }
}

export default API;