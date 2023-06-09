/* eslint-disable react-hooks/exhaustive-deps */
import Switch from '@/base-ui/Switch';
import { Flex, Text } from '@chakra-ui/react';
import React from 'react'
import useFiltersStore from '../../stores/useFiltersStore';

const ScheduledSwitch: React.FC = () => {
  const isScheduled = useFiltersStore(state => state.isScheduled);
  const toggleScheduled = useFiltersStore(state => state.toggleScheduled);
  
  return (
    <div id="dashboard-scheduled-switch">
      <Flex
        alignItems="center"
        columnGap="5px"
        height="26px"
      >
        <Text
          fontSize="14px"
          color="black2"
          cursor="pointer"
          onClick={ toggleScheduled }
        >
          Scheduled
        </Text>
        <Switch
          isActive={ isScheduled }
          toggle={ toggleScheduled }
        />
      </Flex>
    </div>
  )
}

export default ScheduledSwitch