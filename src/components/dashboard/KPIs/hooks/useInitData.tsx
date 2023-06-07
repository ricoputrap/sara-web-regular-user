/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import useGlobalData from '@/hooks/useGlobalData/store';
import useLoading from '@/hooks/useLoading';
import API from '../API';
import { KPIItem, KPIResponseItem } from '../index.types';
import useKPIStore from '../store';

const useInitData = () => {
  const hasDashboardInitialized = useGlobalData(state => state.hasDashboardInitialized);
  const setHasDashboardInitialized = useGlobalData(state => state.setHasDashboardInitialized);
  const setData = useKPIStore(state => state.setData);
  const { setLoading } = useLoading();
  
   // initialize data
   useEffect(() => {
    // no need to retrieve data from API everytime the page is opened
    if (!!hasDashboardInitialized) return;

    const fetchData = async () => {
      setLoading(true);
      
      try {
        const response: KPIResponseItem[] = await API.initialize();

        const data: KPIItem[] = response.map((item: KPIResponseItem) => ({
          id: item.af_id,
          name: item.af_name,
          value: item.total,
          isActive: false,
          isBlinking: false
        }));
        setData(data);
        setHasDashboardInitialized(true);
      }
      catch (error: any) {
        console.error("Dashboard KPI init error: ", error.message);
        alert("Failed to fetch data");
      }

      setLoading(false);
    };

    fetchData();
  }, [hasDashboardInitialized]);
}

export default useInitData