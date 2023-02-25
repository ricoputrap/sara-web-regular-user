import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import NavLink from '../NavLink'

const NavMenu: React.FC = () => {
  return (
    <Flex alignItems="center">
      <NavLink href="/">Dashboard</NavLink>
      <NavLink href="/rooms">Rooms</NavLink>
      <NavLink href="/schedule">Schedule</NavLink>
      <NavLink href="/report">Report</NavLink>
      
      <Box
        paddingX="15px"
        fontSize="18px"
        fontWeight={400}
        color="black4"
      >
        Settings
      </Box>
    </Flex>
  )
}

export default NavMenu