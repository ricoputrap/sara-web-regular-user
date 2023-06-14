import { Box } from '@chakra-ui/react';
import React from 'react'

interface Props {
  label: string;
  active: boolean;
  onClick: () => void;
}

const SwitchItem: React.FC<Props> = ({ label, active, onClick }) => {
  return (
    <Box
      fontSize="15px"
      paddingX="16px"
      paddingY="1px"
      cursor="pointer"
      color={active ? "blue" : "black4"}
      background={active ? "bgActive" : "inherit"}
      borderRadius={active ? "5px" : 0 }
      _hover={{ background: "bgActive" }}
      _first={{ borderLeftRadius: "5px" }}
      _last={{ borderRightRadius: "5px" }}
      onClick={ onClick }
    >
      { label }
    </Box>
  )
}

export default SwitchItem