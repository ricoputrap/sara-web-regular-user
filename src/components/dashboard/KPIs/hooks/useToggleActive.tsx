import React from 'react'
import useFiltersStore from '../../stores/useFiltersStore';

const useToggleActive = () => {
  const requestFamilies: number[] = useFiltersStore(state => state.requestFamilies);
  const setRequestFamilies = useFiltersStore(state => state.setRequestFamilies);

  /**
   * Register or unregister a family from the list of active families
   * @param id 
   */
  const toggleActive = (id: number) => {
    if (requestFamilies.includes(id)) {
      setRequestFamilies(requestFamilies.filter(item => item !== id));
    } else {
      setRequestFamilies([...requestFamilies, id]);
    }
  }

  return toggleActive;
}

export default useToggleActive