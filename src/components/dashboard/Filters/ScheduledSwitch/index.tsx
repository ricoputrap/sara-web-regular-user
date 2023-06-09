/* eslint-disable react-hooks/exhaustive-deps */
import Switch from '@/base-ui/Switch';
import { Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import useFiltersStore from '../../stores/useFiltersStore';

const ScheduledSwitch: React.FC = () => {
  const isScheduled = useFiltersStore(state => state.isScheduled);
  const toggleScheduled = useFiltersStore(state => state.toggleScheduled);
  
  return (
    <div id="dashboard-scheduled-switch">
      <Flex>
        <Text>Scheduled</Text>
        <Switch
          isActive={ isScheduled }
          toggle={ toggleScheduled }
        />
      </Flex>
    </div>
  )
}

export default ScheduledSwitch