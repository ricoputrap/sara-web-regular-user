/* eslint-disable react-hooks/exhaustive-deps */
import useDebounceSync from '@/hooks/useDebounceSync';
import { Flex, IconButton, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { ChangeEvent, useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5';
import { MdSearch } from 'react-icons/md'
import useFiltersStore from '../../stores/useFiltersStore';

const SearchBox: React.FC = () => {
  const setSearchValue = useFiltersStore(state => state.setSearchValue);
  const [value, setValue] = useState("");

  // update the search value in the
  // global Filters Store after 300 ms
  useDebounceSync(() => {
    setSearchValue(value);
  }, 300, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value || "");
  const reset = () => {
    setSearchValue("")
    setValue("");
  }
  const hasValue = value.length > 0;

  return (
    <div id="dashboard-search-box">
      <Flex columnGap="4px">
        <InputGroup color={hasValue ? "blue" : "black2"}>
          <InputLeftElement pointerEvents='none' paddingLeft="4px" paddingY="2px">
            <MdSearch fontSize="20px" />
          </InputLeftElement>

          <Input
            height="26px"
            background={hasValue ? "bgActive" : "white"}
            variant="unstyled"
            _focus={{ outline: "none" }}
            value={ value }
            onChange={ handleChange }
            fontStyle={ hasValue ? "normal" : "italic" }
            fontWeight={ hasValue ? "bold" : "normal" }
            type='text'
            placeholder='Search...'
            fontSize="14px"
            borderRadius="5px"
            paddingLeft="28px"
            paddingRight="12px"
            paddingY="2px"
            width="180px"
          />
        </InputGroup>

        {!!hasValue && (
          <IconButton
            colorScheme="transparent"
            aria-label='reset-searchbox'
            icon={<IoCloseSharp />}
            onClick={ reset }
            fontSize="20px"
            color="blue"
          />
        )}
      </Flex>
    </div>
  )
}

export default SearchBox