import React from 'react'
import {
  Link, Flex,
  Box, Input,
  FormControl, FormLabel,
  Button, Heading,
  InputGroup, InputRightAddon
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const Register = () => {
  const [showHidePassword, setShowHidePassword] = useState(false)

  const onShowHidePassword = () => {
    setShowHidePassword(!showHidePassword)
  }

  return (
    <Flex minHeight='90vh' width='full' align='center' justifyContent='center'>
      <Box
        borderWidth={1}
        px={4}
        width='full'
        maxWidth='500px'
        borderRadius={4}
        textAlign='center'
        boxShadow='lg'
      >
        <Box textAlign='center' p={4}>
          <Heading size="lg" color="gray.600">Register new account</Heading>
        </Box>
        <Box my={8} textAlign='left'>
          <form>
            <FormControl>
              <FormLabel color="gray.600">Fullname</FormLabel>
              <Input type='text' placeholder='Enter your fullname' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel color="gray.600">Email address</FormLabel>
              <Input type='email' placeholder='Enter your email address' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel color="gray.600">Password</FormLabel>
              <InputGroup>
                <Input type={showHidePassword ? 'password' : 'text'} placeholder='Enter your password' />
                <button type='button' onClick={onShowHidePassword}>
                  <InputRightAddon
                    children={showHidePassword ? <ViewIcon /> : <ViewOffIcon />}
                    cursor="pointer"
                  />
                </button>
              </InputGroup>
            </FormControl>
            <Box pt={4}>
              <Link color="teal.500">Forgot your password?</Link>
            </Box>
            <Button backgroundColor="teal" color="white" width='full' mt={4}>Register</Button>
          </form>
        </Box>
      </Box>
    </Flex>
  )
}

export default Register