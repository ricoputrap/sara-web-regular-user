import useFiltersStore from '@/components/dashboard/stores/useFiltersStore'
import { Button } from '@chakra-ui/react'
import React from 'react'

const ClearFilterButton: React.FC = () => {
  const reset = useFiltersStore(state => state.reset);
  return (
    <Button
      fontSize="16px"
      color="blue"
      paddingX="10px"
      onClick={ reset }
    >
      Clear Filter
    </Button>
  )
}

export default ClearFilterButton