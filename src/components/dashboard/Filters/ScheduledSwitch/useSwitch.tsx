import React from 'react'
import useFiltersStore from '../../stores/useFiltersStore';

const useSwitch = () => {
  const isScheduled = useFiltersStore(state => state.isScheduled);
  const toggleScheduled = useFiltersStore(state => state.toggleScheduled);

  return { isScheduled, toggleScheduled }
}

export default useSwitch