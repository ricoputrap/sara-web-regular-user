import useLoading from '@/hooks/useLoading';
import React from 'react'
import DashboardSkeleton from './DashboardSkeleton';
import Filters from './Filters';
import KPIs from './KPIs'

const Dashboard: React.FC = () => {
  const { isLoading } = useLoading();

  return (
    <div id="page-dashboard">
      {isLoading ? (
        <DashboardSkeleton />
      ) : (
        <>
          <KPIs />
          <Filters />
        </>
      )}
    </div>
  )
}

export default Dashboard