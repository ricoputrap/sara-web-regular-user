import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, Spinner } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import useLoginForm from './useLoginForm'

const Login: React.FC = () => {
  const {
    email, password,
    handleEmailChange, handlePasswordChange,
    handleSubmit
  } = useLoginForm();

  return (
    <Box id="login" width="100%" height="100vh">
      <Stack alignItems="center" justifyContent="center" height="100%">
        <Stack alignItems="center">
          <Image
            src="/logo/sara-login-logo.png"
            alt="SARA Logo"
            width={192}
            height={160}
          />

          <Heading
            as="h3"
            textAlign="center"
            fontWeight={700}
            fontSize="18px"
            letterSpacing={1}
          >
            LOGIN
          </Heading>

          <form onSubmit={handleSubmit}>
            <Stack spacing={4} width="365px">
              <FormControl>
                <FormLabel
                  color="gray"
                  fontSize="16px"
                >
                  Email Address
                </FormLabel>
                <Input
                  type="email"
                  value={ email }
                  onChange={handleEmailChange}
                  width="100%"
                  fontSize="18px"
                  padding="10px 10px 10px 5px"
                  borderBottom="2px solid gray"
                  borderRadius={0}
                  outline="none"
                />
              </FormControl>

              <FormControl>
                <FormLabel
                  color="gray"
                  fontSize="16px"
                >
                  Password
                </FormLabel>
                <Input
                  type="password"
                  value={ password }
                  onChange={ handlePasswordChange }
                  width="100%"
                  fontSize="18px"
                  padding="10px 10px 10px 5px"
                  borderBottom="2px solid gray"
                  borderRadius={0}
                  outline="none"
                />
              </FormControl>

              <Button
                type="submit"
                padding="16px"
                border="none"
                borderRadius="8px"
                color="#EEE"
                background="#1878f0"
                fontSize="16px"
                fontWeight="bold"
                boxShadow="0 0 15px grey"
                cursor="pointer"
              >
                LOGIN
              </Button>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Login