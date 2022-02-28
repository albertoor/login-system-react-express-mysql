import React from 'react'
import { Heading, Stack } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Link as LinkRouter } from 'react-router-dom'
import { Link } from '@chakra-ui/react'

const AccountSuccess = () => {
  return (
    <Stack align="center" p={4}>
      <Heading
        color="green.500"
        textAlign="center"
        fontSize='3xl'>
        Congrats!
      </Heading>
      <Heading
        color="green.400"
        textAlign="center"
        fontSize='xl'>
        Account created
      </Heading>
      <CheckCircleIcon w={20} h={20} color="green.500" />
      <Link as={LinkRouter} to="/login" color="teal.500" size="xl" pt={2}>
        Go to Login
      </Link>
    </Stack >
  )
}

export default AccountSuccess