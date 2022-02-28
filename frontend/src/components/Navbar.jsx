import React from 'react'
import { Flex, Box, Heading, Spacer, Button } from '@chakra-ui/react'


const Navbar = () => {
  return (
    <Flex
      bg="white"
      alignItems="center"
      boxShadow="lg">
      <Box p='4' color="gray.600">
        <Heading size='md'>Login System App</Heading>
      </Box>
      <Spacer />
      <Box p='4'>
        <Button colorScheme='teal' mr='4' variant="outline">
          Sign Up
        </Button>
        <Button colorScheme='teal'>Log in</Button>
      </Box>
    </Flex>
  )
}

export default Navbar