import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { MdPerson, MdArrowDropDown } from "react-icons/md"
import { GrPowerShutdown } from "react-icons/gr"
import { IoSwapHorizontal } from "react-icons/io5"
import Link from 'next/link'
import NavLink from '../NavLink'

const Navbar: React.FC = () => {
  return (
    <Flex
      id="navbar"
      height="50px"
      paddingLeft="10px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex columnGap="40px">
        <Link href="/">
          <Text
            fontSize="25px"
            color="#333333"
          >
            DEMO Singapore Hotel 
          </Text>
        </Link>

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
      </Flex>

      <Flex columnGap="15px">
        <Button
          fontSize="16px"
          color="blue"
          paddingX="10px"
        >
          Clear Filter
        </Button>

        <Menu>
          <MenuButton
            as={Button}
            leftIcon={<MdPerson size="24px" />}
            fontSize="18px"
            color="black5"
          >
            <Flex alignItems="center">
              Adrian
              <MdArrowDropDown />
            </Flex>
          </MenuButton>

          <MenuList
            background="#FFFFFF"
            padding="5px"
            boxShadow="0px 4px 5px #bcbcbc"
          >
            <MenuItem
              fontSize="15px"
              color="black1"
              paddingX="15px"
              height="30px"
              columnGap="4px"
            >
              <Flex justifyContent="center" alignItems="center" width="20px">
                <GrPowerShutdown />
              </Flex>
              Logout
            </MenuItem>
            <MenuItem
              fontSize="15px"
              color="black1"
              paddingX="15px"
              height="30px"
              columnGap="4px"
            >
              <Flex justifyContent="center" alignItems="center" width="20px">
                <Box className="flag-icon flag-icon-gb"></Box>
              </Flex>
              English
            </MenuItem>
            <MenuItem
              fontSize="15px"
              color="black1"
              paddingX="15px"
              height="30px"
              columnGap="4px"
            >
              <Flex justifyContent="center" alignItems="center" width="20px">
                <IoSwapHorizontal />
              </Flex>
              Switch Property
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  )
}

export default Navbar 