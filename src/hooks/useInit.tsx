/* eslint-disable react-hooks/exhaustive-deps */
import { DEFAULT_NUM } from '@/constants/defaults';
import callFetch from '@/utils/callFetch';
import React, { useEffect } from 'react'
import { TPropertyData } from './useGlobalData/property.types';
import useGlobalData from './useGlobalData/store'

const HOST: string = process.env.NEXT_PUBLIC_API || "http://localhost/index.php/api/v2";

const API = {
  initialize: async (): Promise<any> => {
    const URL = `${HOST}/property`;

    const response = await callFetch(URL, {
      method: "GET",
      credentials: "include"
    });

    const data: TPropertyData = response?.data;
    return data;
  }
}

const useInit = () => {
  const propertyData = useGlobalData(state => state.propertyData);
  const setPropertyData = useGlobalData(state => state.setPropertyData);

  useEffect(() => {
    // data has been loaded
    if (propertyData?.p_id != DEFAULT_NUM)
      return;

    const fetchData = async () => {
      const data: TPropertyData = await API.initialize();
      setPropertyData(data);
    }
    fetchData();
  }, []);
}

export default useInit