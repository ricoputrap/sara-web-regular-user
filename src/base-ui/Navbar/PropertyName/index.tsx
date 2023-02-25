import { Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const PropertyName: React.FC = () => {
  return (
    <Link href="/">
      <Text
        fontSize="25px"
        color="#333333"
      >
        DEMO Singapore Hotel 
      </Text>
    </Link>
  )
}

export default PropertyName