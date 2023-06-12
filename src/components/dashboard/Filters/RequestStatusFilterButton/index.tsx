import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useState } from 'react'

const Container = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 5px;
`;

interface Props {
  label: string;
  active: boolean;
  onClick: () => void;
}

const FilterButtonItem: React.FC<Props> = ({ label, active, onClick }) => {
  return (
    <Box
      fontSize="15px"
      paddingX="16px"
      paddingY="1px"
      cursor="pointer"
      color={active ? "blue" : "black4"}
      background={active ? "bgActive" : "inherit"}
      borderRadius={active ? "5px" : 0 }
      _hover={{ background: "bgActive" }}
      _first={{ borderLeftRadius: "5px" }}
      _last={{ borderRightRadius: "5px" }}
      onClick={ onClick }
    >
      { label }
    </Box>
  )
}

type TFilterStatus = "pending" | "closed" | "onhold" | "all";
type TOption = {
  id: TFilterStatus;
  label: string;
  active: boolean;
}

type TStatus = {
  id: TFilterStatus;
  label: string;
}

const ALL_STATUS: TStatus[] = [
  { id: "pending", label: "Pending" },
  { id: "closed", label: "Closed" },
  { id: "onhold", label: "On Hold" },
  { id: "all", label: "All" }
]

const RequestStatusFilterButton: React.FC = () => {
  const [status, setStatus] = useState<TFilterStatus>("pending");
  const options: TOption[] = ALL_STATUS.map(option => ({
    id: option.id,
    label: option.label,
    active: option.id == status
  }));

  const toggleStatus = (id: TFilterStatus) => {
    setStatus(id);
  }

  return (
    <div id="request-status-filter-button">
      <Container>
        {options.map(option => (
          <FilterButtonItem
            key={ option.id }
            label={ option.label }
            active={ option.active }
            onClick={() => toggleStatus(option.id)}
          />
        ))}
      </Container>
    </div>
  )
}

export default RequestStatusFilterButton