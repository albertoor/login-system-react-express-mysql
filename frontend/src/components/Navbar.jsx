import React from 'react'
import { Flex, Box, Heading } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Flex
      bg="white"
      alignItems="center"
      boxShadow="lg">
      <Box p='4' color="gray.600">
        <Heading size='md'>Login System App</Heading>
      </Box>
    </Flex>
  )
}

export default Navbar