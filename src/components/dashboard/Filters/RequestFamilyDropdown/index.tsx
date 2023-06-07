import IconArrowDown from '@/assets/icon/custom/IconArrowDown';
import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import { IoClose } from "react-icons/io5";
import useFiltersStore from '../../stores/useFiltersStore'

const RequestFamilyDropdown: React.FC = () => {
  const requestFamilies = useFiltersStore(state => state.requestFamilies);
  const reset = useFiltersStore(state => state.reset);

  const isSelected = requestFamilies.length > 0;
  const selectedLabels = useMemo(() => {
    if (requestFamilies.length == 0) return "All Requests";
    if (requestFamilies.length == 1) return requestFamilies[0];
    return `${requestFamilies.length} request families`;
  }, [requestFamilies]);
  
  return (
    <div id="filter-request-family">
      <Box
        background={isSelected ? "bgActive" : "white"}
        cursor="pointer"
        fontSize="14px"
        borderRadius="4px"
        lineHeight="18px"
        boxShadow="rgb(170 170 170) 2px 1px 3px"
        padding="3px"
        height="26px"
        width="200px"
      >
        <Flex justifyContent="space-between" color={isSelected ? "blue" : "black"}>
          <Text paddingLeft="8px">
            { selectedLabels }
          </Text>
          <Flex
            width="26px"
            borderLeft="1px solid rgb(193, 194, 193)"
            justifyContent="center"
            alignItems="center"
          >
            {isSelected
              ? <IoClose fontSize="18px" onClick={reset} />
              : <IconArrowDown />
            }
          </Flex>
        </Flex>
      </Box>
    </div>
  )
}

export default RequestFamilyDropdown