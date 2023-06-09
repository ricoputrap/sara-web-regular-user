import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import RequestFamilyDropdown from './RequestFamilyDropdown'
import ScheduledSwitch from './ScheduledSwitch'
import SearchBox from './SearchBox'

const Filters: React.FC = () => {
  const isPropertySchedulingActive = true;

  return (
    <Box id="filters" marginTop="40px">
      <Flex flexWrap="wrap" gap="20px" justifyContent="space-between">
        {/* Left Filters */}
        <Flex alignItems="center" columnGap="40px">
          <RequestFamilyDropdown />
          <SearchBox />
          {isPropertySchedulingActive && <ScheduledSwitch />}
        </Flex>

        {/* Right Filters */}
        <Flex alignItems="center" justifyContent="end" width={{
          base: "100%",
          xl: "fit-content"
        }}>

        </Flex>
      </Flex>
    </Box>
  )
}

export default Filters