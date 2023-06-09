import { Flex, IconButton, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { ChangeEvent, useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5';
import { MdSearch } from 'react-icons/md'


const SearchBox: React.FC = () => {
  const [value, setValue] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value || "");

  const hasValue = value.length > 0;
  const reset = () => setValue("");

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