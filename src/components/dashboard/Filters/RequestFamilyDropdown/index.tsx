import IconArrowDown from '@/assets/icon/custom/IconArrowDown';
import { Box, Flex, Popover, PopoverBody, PopoverContent, PopoverTrigger, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useMemo, useRef } from 'react'
import { IoClose } from "react-icons/io5";
import useFiltersStore from '../../stores/useFiltersStore'

interface Props {
  label: string;
  isSelected: boolean;
  reset: () => void;
}

const SelectedOption: React.FC<Props> = ({ label, isSelected, reset }) => (
  <Box
    background={isSelected ? "bgActive" : "white"}
    cursor="pointer"
    fontSize="14px"
    borderRadius="4px"
    lineHeight="18px"
    boxShadow="rgb(170 170 170) 2px 1px 3px"
    padding="3px"
    height="26px"
    width="200px"
  >
    <Flex justifyContent="space-between" color={isSelected ? "blue" : "black"}>
      <Text paddingLeft="8px">
        { label }
      </Text>
      <Flex
        width="26px"
        borderLeft="1px solid rgb(193, 194, 193)"
        justifyContent="center"
        alignItems="center"
      >
        {isSelected
          ? <IoClose fontSize="18px" onClick={reset} />
          : <IconArrowDown />
        }
      </Flex>
    </Flex>
  </Box>
);

interface OptionItemProps {
  isSelected?: boolean;
  label: string;
  value: number;
  onSelect: (value: number) => void;
}

const OptionItem: React.FC<OptionItemProps> = ({ label, value, isSelected, onSelect }) => (
  <Box
    padding="10px"
    fontSize="13px"
    color={isSelected ? "blue" : "black2"}
    background={isSelected ? "bgActive2" : "transparent"}
    cursor="pointer"
    _hover={{
      background: "bgActive"
    }}
    onClick={() => onSelect(value)}
  >
    { label }
  </Box>
)

type TOptionItem = {
  label: string;
  value: number;
}

interface OptionProps {
  defaultLabel: string;
  options: TOptionItem[];
  selectedValues: number[];
  onSelect: (value: number) => void;
}

const Options: React.FC<OptionProps> = ({
  defaultLabel,
  options,
  selectedValues,
  onSelect
}) => {
  return (
    <Box
      paddingY="5px"
      maxH="300px"
      overflowY="scroll"
      background="white"
      width="200px"
      borderRadius="6px"
      boxShadow="0 5px 10px rgba(0, 0, 0, 0.35)"
    >
      <OptionItem
          value={ -1 }
          label={ defaultLabel }
          isSelected={ selectedValues.length == 0 }
          onSelect={ onSelect }
        />
      {options.map(item => (
        <OptionItem
          key={ item.value }
          value={ item.value }
          label={ item.label }
          isSelected={ selectedValues.includes(item.value) }
          onSelect={ onSelect }
        />
      ))}
    </Box>
  )
}

const RequestFamilyDropdown: React.FC = () => {
  const requestFamilies = useFiltersStore(state => state.requestFamilies);
  const setRequestFamilies = useFiltersStore(state => state.setRequestFamilies);
  const reset = useFiltersStore(state => state.reset);

  const OPTIONS: TOptionItem[] = [
    { label: "Housekeeping", value: 10 },
    { label: "Maintenance", value: 11 },
    { label: "Concierge", value: 12 },
    { label: "Room Service", value: 16 },
    { label: "FIRE", value: 52 },
    { label: "Lost & Found", value: 331 },
    { label: "Laundry", value: 453 },
    { label: "Coffee", value: 732 },
    { label: "NCA", value: 734 },
    { label: "TEST 2", value: 735 },
    { label: "IT", value: 746 },
    { label: "PPM", value: 748 },
    { label: "Energy", value: 749 },
  ]

  type TLookupLabelByValue = {
    [value: number]: string;
  }

  const lookupLabelByValue: TLookupLabelByValue = OPTIONS.reduce((acc: TLookupLabelByValue, option) => {
    acc[option.value] = option.label;
    return acc;
  }, {});  

  const isSelected = requestFamilies.length > 0;
  const selectedLabels: string = useMemo(() => {
    if (requestFamilies.length == 0) return "All Requests";
    if (requestFamilies.length == 1) {
      return lookupLabelByValue[requestFamilies[0]] || "";
    }
    return `${requestFamilies.length} request families`;
  }, [requestFamilies, lookupLabelByValue]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toggle = () => {
    if (isOpen) onClose();
    else onOpen();
  }

  const onSelect = (value: number) => {
    if (value == -1) reset();
    else setRequestFamilies([value])
    onClose();
  }

  const popoverRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div id="filter-request-family">
      <Box ref={popoverRef} position="relative" width="fit-content">
        <Popover isOpen={isOpen}>
          <PopoverTrigger>
            <Box width="fit-content" onClick={ toggle }>
              <SelectedOption
                label={ selectedLabels }
                isSelected={ isSelected }
                reset={ reset }
              />
            </Box>
          </PopoverTrigger>
          <PopoverContent _focus={{ boxShadow: "none" }}>
            <PopoverBody>
              <Options
                defaultLabel="All Requests"
                onSelect={ onSelect }
                options={ OPTIONS }
                selectedValues={ requestFamilies }
              />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </div>
  )
}

export default RequestFamilyDropdown