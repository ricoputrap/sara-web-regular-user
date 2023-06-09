import React from 'react'
import useFiltersStore from '../../stores/useFiltersStore';

interface ReturnValue {
  value: string;
  setValue: (value: string) => void;
}

const useSearch = (): ReturnValue => {
  const searchValue = useFiltersStore(state => state.searchValue);
  const setSearchValue = useFiltersStore(state => state.setSearchValue);

  return {
    value: searchValue,
    setValue: setSearchValue
  }
}

export default useSearch