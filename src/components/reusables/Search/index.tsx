
import useDebounceSync from '@/hooks/useDebounceSync';
import { Flex, IconButton, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5';
import { MdSearch } from 'react-icons/md';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

const Search: React.FC<Props> = ({ value, setValue }) => {
  const [searchValue, setSearchValue] = useState("");
  const hasValue = searchValue.length > 0;

  // update the search searchValue in the
  // global Filters Store after 300 ms
  useDebounceSync(() => {
    setValue(searchValue);
  }, 300, [searchValue, setValue]);

  useEffect(() => {
    if (value != "") return;
    setSearchValue("");
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value || "");
  }

  const reset = () => {
    setValue("")
    setSearchValue("");
  }

  return (
    <div className="sara-search">
      <Flex columnGap="4px">
        <InputGroup color={hasValue ? "blue" : "black2"}>
          <InputLeftElement
            pointerEvents='none'
            paddingLeft="4px"
            paddingY="2px"
          >
            <MdSearch fontSize="20px" />
          </InputLeftElement>

          <Input
            variant="unstyled"
            type='text'
            placeholder='Search...'
            value={ searchValue }
            onChange={ handleChange }
            background={hasValue ? "bgActive" : "white"}
            fontStyle={ hasValue ? "normal" : "italic" }
            fontWeight={ hasValue ? "bold" : "normal" }
            height="26px"
            width="180px"
            fontSize="14px"
            borderRadius="5px"
            paddingLeft="28px"
            paddingRight="12px"
            paddingY="2px"
            
            _focus={{ outline: "none" }}
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

export default Search