import { Spinner } from "@chakra-ui/react";

const LoadingSpinner: React.FC = () => (
  <Spinner
    position="absolute"
    top="0"
    left="0"
    width="100%"
    height="100%"
    color="blue"
    emptyColor="gray.400"
    thickness="4px"
    size="xl"
    speed="0.65s"
  />
)

export default LoadingSpinner;