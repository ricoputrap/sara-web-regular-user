import { Box } from '@chakra-ui/react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useMemo } from 'react'

interface Props {
  href: string;
  children: React.ReactNode
}

const NavLink: React.FC<Props> = ({ href, children }) => {
  const { pathname } = useRouter();
  const isActive = useMemo(() => href == pathname, [href, pathname]);
  
  return (
    <Link href={href}>
      <Box
         paddingX="15px"
         fontSize="18px"
         fontWeight={isActive ? 500 : 400}
         color={isActive ? "blue" : "black4"}
         borderBottom={isActive ? "2px solid blue" : "none"}
      >
        { children }
      </Box>
    </Link>
  )
}

export default NavLink