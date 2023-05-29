import { Flex } from '@chakra-ui/react';
import React from 'react'
import useKPI from './hooks/useKPI'
import { KPIItem } from './index.types'
import KPIBox from './KPIBox';

const KPIs: React.FC = () => {
  const { data, toggleActive } = useKPI();

  return (
    <div id="kpis">
      <Flex gap="20px" flexWrap="wrap" width="100%">
        {data.map((item: KPIItem) => (
          <KPIBox
            key={item.id}
            name={item.name}
            value={item.value}
            isActive={item.isActive}
            isBlinking={item.isBlinking}
            onClick={() => toggleActive(item.id)}
          />
        ))}
      </Flex>
    </div>
  )
}

export default KPIs