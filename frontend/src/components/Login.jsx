import React, { useCallback, useState } from "react"
import {
  Link, Flex,
  Box, Input,
  FormControl, FormLabel,
  Button, Heading,
  InputGroup, InputRightAddon, Text,
} from '@chakra-ui/react'
import useForm from "../hooks/useForm"
import useShowPassword from "../hooks/useShowPassword"
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Link as LinkRouter, useHistory } from 'react-router-dom'
import axios from "axios"

const Login = () => {
  const [isShowPasswordActive, onChangeIsShowPasswordActive] = useShowPassword()
  const [values, handleChange] = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const history = useHistory()
  const [userDoesNotExist, setUserDoesExist] = useState("")
  const [wrongCredentials, setWrongCredentials] = useState("")

  const handleLogin = useCallback((e) => {
    e.preventDefault()
    setUserDoesExist("")
    setWrongCredentials("")
    axios.post(process.env.REACT_APP_LOGIN_URL, values)
      .then((res) => {
        if (!res.data.token) {
          if (res.data.message.includes("User"))
            setUserDoesExist(res.data.message)
          else if (res.data.message.includes("Wrong"))
            setWrongCredentials(res.data.message)
          console.log(res.data)
        } else {
          setUserDoesExist("")
          setWrongCredentials("")
          setIsSubmitting(!isSubmitting)
          localStorage.setItem("token", res.data.token)
          setTimeout(() => {
            history.push("/")
          }, 2000)
        }

      }).catch((error) => {
        console.log(error)
      })
  }, [values, history, isSubmitting])

  return (
    <Flex minHeight='90vh' width='full' align='center' justifyContent='center'>
      <Box
        borderWidth={1} px={4}
        width='full' maxWidth='500px'
        borderRadius={4} textAlign='center'
        boxShadow='lg'
      >
        <Box textAlign='center' p={4}>
          <Heading size="lg" color="gray.600">Login</Heading>
        </Box>
        <Box my={8} textAlign='left'>
          <form onSubmit={(e) => handleLogin(e)}>
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
            {wrongCredentials && <Text pt={4} color={'tomato'}>{wrongCredentials}</Text>}
            {userDoesNotExist && <Text pt={4} color={'tomato'}>{userDoesNotExist}</Text>}
            <Box pt={4}>
              <Link as={LinkRouter} to="/forgot-password" color="teal.500">Forgot your password?</Link>
            </Box>
            <Button
              type='submit'
              isLoading={isSubmitting}
              loadingText='Checking Credentials'
              backgroundColor="teal.600"
              color="white"
              width='full'
              mt={4}
              _hover={{ backgroundColor: "teal.400" }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>
    </Flex >
  )
}

export default Login