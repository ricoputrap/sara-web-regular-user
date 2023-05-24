import { Box, Spinner, Text } from '@chakra-ui/react';
import React from 'react'

interface Props {
  message: string;
}

const LoadingWithMessage: React.FC<Props> = ({ message }) => {
  return (
    <Box
      id="loading-with-message"
      backgroundColor="#FFFFFF"
      padding="20px"
      border="1px solid #616262"
      borderRadius="10px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      rowGap="20px"
      width="fit-content"
    >
      <Spinner
        width="40px"
        height="40px"
        color="blue"
        thickness="4px"
        emptyColor="gray.400"
        size="xl"
        speed="0.65s"
      />
      <Text color="black" fontSize="18px">
        { message }
      </Text>
    </Box>
  )
}

export default LoadingWithMessage