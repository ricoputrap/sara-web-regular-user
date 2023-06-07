import callFetch from "@/utils/callFetch";
import { KPIResponseItem } from "./index.types";
const HOST: string = process.env.NEXT_PUBLIC_API || "http://localhost/index.php/api/v2";

const API = {
  initialize: async (): Promise<KPIResponseItem[]> => {
    const URL = `${HOST}/dashboard/getDashboardKPI`;

    const response = await callFetch(URL, {
      method: "GET",
      credentials: "include"
    });

    const data: KPIResponseItem[] = response?.data?.data || [];
    return data;
  }
}

export default API;