import { Box, Stack, Text } from "@chakra-ui/react";
import { Card, Value } from "./index.styled";

interface Props {
  name: string;
  value: number;
  isActive: boolean;
  isBlinking: boolean;
  onClick: () => void;
}

const KPIBox: React.FC<Props> = ({
  name,
  value,
  isActive,
  isBlinking,
  onClick
}) => {

  return (
    <div onClick={ onClick }>
      <Card
        isActive={ isActive }
        isBlinking={ isBlinking }
      >
        <Stack alignItems="center" rowGap="4px">
          <Value>{ value }</Value>
          
          <Box textAlign="center" marginTop="0 !important">
            <Text color="black3" fontSize="17px">
              Pending
            </Text>
            <Text color="blue">{ name }</Text>
          </Box>
        </Stack>
      </Card>
    </div>
  )
}

export default KPIBox;