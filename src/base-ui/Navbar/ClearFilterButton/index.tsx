import { Button } from '@chakra-ui/react'
import React from 'react'

const ClearFilterButton: React.FC = () => {
  return (
    <Button
      fontSize="16px"
      color="blue"
      paddingX="10px"
    >
      Clear Filter
    </Button>
  )
}

export default ClearFilterButton