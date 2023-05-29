import React from 'react'
import KPIs from './KPIs'
import useFiltersStore from './stores/useFiltersStore'

const Dashboard: React.FC = () => {
  const requestFamilies = useFiltersStore(state => state.requestFamilies);

  return (
    <div id="page-dashboard">
      <KPIs />

      <strong>Request Families:</strong>
      {requestFamilies.map(item => (
        <p key={ item }>{ item }</p>
      ))}
    </div>
  )
}

export default Dashboard