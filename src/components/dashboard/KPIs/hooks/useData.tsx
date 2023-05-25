/* eslint-disable react-hooks/exhaustive-deps */
import useLoading from "@/hooks/useLoading";
import { useEffect } from "react";
import API from "../API";
import useKPIStore from "../store";

const useData = () => {
  const data = useKPIStore(state => state.data);
  const setData = useKPIStore(state => state.setData);
  const { setLoading } = useLoading();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      try {
        const data = await API.initialize();
        setData(data);
      }
      catch (error: any) {
        console.error("Dashboard KPI init error: ", error.message);
        alert("Failed to fetch data");
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return data;
}

export default useData;