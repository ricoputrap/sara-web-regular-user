import { Flex } from '@chakra-ui/react'
import React from 'react'
import NavMenu from './NavMenu'
import PropertyName from './PropertyName'
import ClearFilterButton from './ClearFilterButton'
import UserMenu from './UserMenu'

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
        <PropertyName />
        <NavMenu />
      </Flex>

      <Flex columnGap="15px">
        <ClearFilterButton />
        <UserMenu />
      </Flex>
    </Flex>
  )
}

export default Navbar 