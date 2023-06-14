/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

import { KPIItem } from '@/components/dashboard/KPIs/index.types';
import useKPIStore from '@/components/dashboard/KPIs/store';
import { DEFAULT_NUM } from '@/constants/defaults';
import ROUTES from '@/constants/routes';
import { TPropertyData } from '../useGlobalData/property.types';
import useGlobalData from '../useGlobalData/store'
import useLoading from '../useLoading';
import API, { TDashboardInitialData } from './API';
import { prepareDataDashboardKPI } from './utils';

const { DASHBOARD, ROOMS, REPORT, SCHEDULES } = ROUTES;

const useInit = () => {
  const {
    propertyData,
    hasDataInitialized,
    setPropertyData,
    setHasDataInitialized,
  } = useGlobalData();

  const setDashboardKPIData = useKPIStore(state => state.setData);
  const { setLoading } = useLoading();
  const { pathname } = useRouter();
  
  useEffect(() => {
    const fetchData = async () => {
      // retrieve property data in initial web app rendering
      if (!propertyData?.p_id || propertyData.p_id == DEFAULT_NUM) {
        setLoading(true);
        const data: TPropertyData = await API.initialize();
        setPropertyData(data);
        setLoading(false);
        return;
      }

      switch (pathname) {
        case DASHBOARD:
          // init data dashboard
          if (!hasDataInitialized.dashboard) {
            setLoading(true);
            const {
              kpi,
              pendingRequests,
              supportingData: { requestFamilies, locations }
            }: TDashboardInitialData = await API.initDashboard();
            const kpiData: KPIItem[] = prepareDataDashboardKPI(kpi);

            /** @todo prepare data pending requests */
            /** @todo compute lookup request families */
            /** @todo compute lookup locations */

            setDashboardKPIData(kpiData);
            setHasDataInitialized("dashboard", true); 
            setLoading(false);
          }
          break;
        case ROOMS:
          // init data rooms
          if (!hasDataInitialized.rooms) {
            /** @todo call API to retrieve ROOMS initial data */
            setHasDataInitialized("rooms", true); 
          }
          break;
        case REPORT:
          // init data report
          if (!hasDataInitialized.report) {
            /** @todo call API to retrieve REPORT initial data */
            setHasDataInitialized("report", true); 
          }
          break;
        case SCHEDULES:
          // init data schedules
          if (!hasDataInitialized.schedules) {
            /** @todo call API to retrieve SCHEDULES initial data */
            setHasDataInitialized("schedules", true); 
          }
          break;
        default:
          break;
      }
    }

    fetchData();
  }, [pathname, propertyData]);
}

export default useInit