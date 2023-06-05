import { getCookie } from "@/utils/cookie";
import { KPIResponseItem } from "./index.types";
import axios from "axios";
const HOST: string = process.env.NEXT_PUBLIC_API || "http://localhost/index.php/api/v2";

const API = {
  initialize: async (): Promise<KPIResponseItem[]> => {
    const URL = `${HOST}/dashboard/getDashboardKPI`;
    const token: string = getCookie("token") || "";
    const headers = { 'Authorization': `Bearer ${token}` }; 
    const response = await axios.get(URL, { headers });
    const data: KPIResponseItem[] = response?.data?.data?.data || [];

    return data;
  }
}

export default API;