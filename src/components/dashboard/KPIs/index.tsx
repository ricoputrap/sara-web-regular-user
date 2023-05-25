import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import useData from './hooks/useData'
import { KPIItem } from './index.types'

const KPIs: React.FC = () => {
  const data: KPIItem[] = useData();

  return (
    <div id="kpis">
      <Flex gap="20px" flexWrap="wrap" width="100%">
        {data.map((item: KPIItem) => (
          <Box
            key={item.id}
            cursor="pointer"
            backgroundColor="#FFF"
            width="18%"
            minWidth="160px"
            maxW="180px"
            boxShadow="1px 2px 3px #aaa"
            padding="8px"
            borderRadius="10px"
          >
            <Stack alignItems="center" rowGap="4px">
              <Text
                color="black1"
                fontSize="40px"
                margin="0"
                lineHeight="44px"
              >
                { item.value }
              </Text>
              
              <Box textAlign="center" marginTop="0 !important">
                <Text color="black3" fontSize="17px">Pending</Text>
                <Text color="blue">{item.name}</Text>
              </Box>
            </Stack>
          </Box>
        ))}
      </Flex>
    </div>
  )
}

export default KPIs