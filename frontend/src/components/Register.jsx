import React, { useState, useCallback } from 'react'
import {
  Link, Flex,
  Box, Input,
  FormControl, FormLabel,
  Button, Heading, Text,
  InputGroup, InputRightAddon,
  IconButton
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import useShowPassword from '../hooks/useShowPassword'
import useForm from '../hooks/useForm'
import axios from 'axios'
import Errors from './Errors'
import AccountSuccess from './AccountSuccess'
import { Link as LinkRouter } from 'react-router-dom'

const Register = () => {
  const [isShowPasswordActive, onChangeIsShowPasswordActive] = useShowPassword()
  const [values, handleChange] = useForm()
  const [errors, setErrors] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleRegister = useCallback(
    (e) => {
      e.preventDefault()
      axios.post(process.env.REACT_APP_REGISTER_URL, values)
        .then((res) => {
          if (res.data.success === false) {
            setErrors(res.data.message)
            console.log(res.data)
          } else {
            setErrors([])
            setIsSubmitting(!isSubmitting)
            setTimeout(() => {
              setSuccess(!success)
            }, 2000)
          }
        }).catch((err) => {
          console.log(err)
        })
    }, [values, isSubmitting, success]
  )

  return (
    <Flex minHeight='90vh' width='full' align='center' justifyContent='center'>
      <Box
        borderWidth={1} px={4}
        width='full' maxWidth='500px'
        borderRadius={4} textAlign='center'
        boxShadow='lg'
      >
        {success ? <AccountSuccess /> :
          (
            <>
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
                      <IconButton type='button' onClick={onChangeIsShowPasswordActive}>
                        <InputRightAddon
                          children={isShowPasswordActive ? <ViewIcon /> : <ViewOffIcon />}
                          cursor="pointer"
                        />
                      </IconButton>
                    </InputGroup>
                  </FormControl>
                  {errors.length > 0 && <Errors errors={errors} />}
                  <Box pt={4}>
                    <Text>Already have an account <Link as={LinkRouter} to="/login" color="teal.500">LogIn</Link></Text>
                  </Box>
                  <Button
                    type='submit'
                    isLoading={isSubmitting}
                    loadingText='Submitting'
                    backgroundColor="teal"
                    color="white"
                    width='full'
                    mt={4}
                  >
                    Register
                  </Button>
                </form>
              </Box>
            </>
          )
        }
      </Box>
    </Flex>
  )
}

export default Register