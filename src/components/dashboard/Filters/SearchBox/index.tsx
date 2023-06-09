import Search from '@/components/reusables/Search';
import React from 'react'
import useSearch from './useSearch';

const SearchBox: React.FC = () => {
  const { value, setValue } = useSearch();

  return (
    <div id="dashboard-search-box">
      <Search
        value={ value }
        setValue={ setValue }
      />
    </div>
  )
}

export default SearchBox