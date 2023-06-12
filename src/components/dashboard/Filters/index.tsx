import useGlobalData from '@/hooks/useGlobalData/store'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import RequestFamilyDropdown from './RequestFamilyDropdown'
import RequestStatusFilterButton from './RequestStatusFilterButton'
import ScheduledSwitch from './ScheduledSwitch'
import SearchBox from './SearchBox'

const Filters: React.FC = () => {
  const propertyData = useGlobalData(state => state.propertyData);
  const isPropertySchedulingActive = !!propertyData.scheduling;

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
          <RequestStatusFilterButton />
        </Flex>
      </Flex>
    </Box>
  )
}

export default Filters