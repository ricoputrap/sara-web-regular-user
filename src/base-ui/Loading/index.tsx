import { Box } from "@chakra-ui/react";
import LoadingSpinner from "./LoadingSpinner";
import LoadingWithMessage from "./LoadingWithMessage";

interface Props {
  message?: string;
}

const Loading: React.FC<Props> = ({ message }) => {
  return (
    <Box zIndex={1000} position="fixed" top="0" left="0" width="100%" height="100%" background="rgba(0, 0, 0, 0.3)">
      <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
        {!!message ? (
          <LoadingWithMessage message={ message } />
        ) : (
          <Box
            id="loading"
            position="relative"
            width="40px"
            height="40px"
          >
            <LoadingSpinner />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Loading;