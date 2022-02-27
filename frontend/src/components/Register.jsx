import React from 'react'
import {
  Link, Flex,
  Box, Input,
  FormControl, FormLabel,
  Button, Heading,
  InputGroup, InputRightAddon
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import useShowPassword from '../hooks/useShowPassword'
import useForm from '../hooks/useForm'

const Register = () => {
  const [isShowPasswordActive, onChangeIsShowPasswordActive] = useShowPassword()
  const [values, handleChange] = useForm()

  const handleRegister = (e) => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <Flex minHeight='90vh' width='full' align='center' justifyContent='center'>
      <Box
        borderWidth={1} px={4}
        width='full' maxWidth='500px'
        borderRadius={4} textAlign='center'
        boxShadow='lg'
      >
        <Box textAlign='center' p={4}>
          <Heading size="lg" color="gray.600">Register new account</Heading>
        </Box>
        <Box my={8} textAlign='left'>
          <form onSubmit={(e) => handleRegister(e)}>
            <FormControl>
              <FormLabel color="gray.600">Fullname</FormLabel>
              <Input
                type='text'
                placeholder='Enter your fullname'
                name='fullname'
                value={values.fullname || ""}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel color="gray.600">Email address</FormLabel>
              <Input
                type='email'
                placeholder='Enter your email address'
                name='email'
                value={values.email || ""}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel color="gray.600">Password</FormLabel>
              <InputGroup>
                <Input
                  type={isShowPasswordActive ? 'text' : 'password'}
                  placeholder='Enter your password'
                  name='password'
                  value={values.password || ""}
                  onChange={handleChange}
                />
                <button type='button' onClick={onChangeIsShowPasswordActive}>
                  <InputRightAddon
                    children={isShowPasswordActive ? <ViewIcon /> : <ViewOffIcon />}
                    cursor="pointer"
                  />
                </button>
              </InputGroup>
            </FormControl>
            <Box pt={4}>
              <Link color="teal.500">Forgot your password?</Link>
            </Box>
            <Button type='submit' backgroundColor="teal" color="white" width='full' mt={4}>Register</Button>
          </form>
        </Box>
      </Box>
    </Flex>
  )
}

export default Register