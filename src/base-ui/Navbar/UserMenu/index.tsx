import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { GrPowerShutdown } from 'react-icons/gr'
import { IoSwapHorizontal } from 'react-icons/io5'
import { MdArrowDropDown, MdPerson } from 'react-icons/md'

const UserMenu: React.FC = () => {
  return (
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
  )
}

export default UserMenu