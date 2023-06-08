import { Flex, Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

const KPISkeleton = () => {
  const indexes = Array.from({ length: 8 }, (_, index) => index);

  return (
    <Flex gap="20px" flexWrap="wrap">
      {indexes.map(idx => (
        <Skeleton
          key={ idx }
          height="113px"
          width="156px"
          startColor="skeleton"
          borderRadius="10px"
        />
      ))}
    </Flex>
  )
}

const FiltersSkeleton = () => (
  <Flex flexWrap="wrap" gap="20px" justifyContent="space-between">
    {/* Left Filters */}
    <Flex alignItems="center">
      {/* Request Family Dropdown */}
      <Skeleton
        width="200px"
        height="20px"
        borderRadius="4px"
        startColor="skeleton"
      />
      {/* Search Box */}
      <Skeleton
        width="190px"
        height="20px"
        borderRadius="4px"
        startColor="skeleton"
        marginLeft="50px"
      />
      {/* Scheduled Switch */}
      <Skeleton
        width="110px"
        height="20px"
        borderRadius="4px"
        startColor="skeleton"
        marginLeft="20px"
      />
    </Flex>

    {/* Right Filters */}
    <Flex alignItems="center" justifyContent="end" width={{
      base: "100%",
      xl: "fit-content"
    }}>
      {/* New Request Button */}
      <Skeleton
        width="168px"
        height="20px"
        borderRadius="4px"
        startColor="skeleton"
      />
      {/* Status Multi Switches */}
      <Skeleton
        width="300px"
        height="20px"
        borderRadius="4px"
        startColor="skeleton"
        marginLeft="80px"
      />
      {/* Dates */}
      <Skeleton
        width="72px"
        height="20px"
        borderRadius="4px"
        startColor="skeleton"
        marginLeft="50px"
      />
      {/* Export Button */}
      <Skeleton
        width="42px"
        height="20px"
        borderRadius="4px"
        startColor="skeleton"
        marginLeft="12px"
      />
    </Flex>
  </Flex>
)

const DashboardSkeleton = () => (
  <Stack rowGap="40px">
    <KPISkeleton />
    <FiltersSkeleton />
  </Stack>
)

export default DashboardSkeleton