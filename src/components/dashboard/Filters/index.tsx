import { Box } from '@chakra-ui/react'
import React from 'react'
import RequestFamilyDropdown from './RequestFamilyDropdown'

const Filters: React.FC = () => {
  return (
    <Box id="filters" marginTop="40px">
      <RequestFamilyDropdown />
    </Box>
  )
}

export default Filters