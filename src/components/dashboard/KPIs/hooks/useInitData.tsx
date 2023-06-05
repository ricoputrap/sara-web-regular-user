/* eslint-disable react-hooks/exhaustive-deps */
import useLoading from '@/hooks/useLoading';
import React, { useEffect } from 'react'
import API from '../API';
import { KPIItem, KPIResponseItem } from '../index.types';
import useKPIStore from '../store';

const useInitData = () => {
  const setData = useKPIStore(state => state.setData);
  const { setLoading } = useLoading();
  
   // initialize data
   useEffect(() => {
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
      }
      catch (error: any) {
        console.error("Dashboard KPI init error: ", error.message);
        alert("Failed to fetch data");
      }

      setLoading(false);
    };

    fetchData();
  }, []);
}

export default useInitData