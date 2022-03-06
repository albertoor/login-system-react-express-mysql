import React, { useEffect, useState } from "react"
import { Flex, Text, Button, Link, Heading, Box } from "@chakra-ui/react"
import axios from "axios"
import { Link as LinkRouter } from 'react-router-dom'

const Home = () => {
  const [auth, setAuth] = useState(false)
  const [userId, setUserId] = useState('')
  const [currEmail, setCurrEmail] = useState('')

  // Verify token
  useEffect(() => {
    axios.get(process.env.REACT_APP_IS_AUTHENTICATED_URL, {
      headers: {
        "x-access-token": localStorage.getItem('token')
      }
    }).then((res) => {
      console.log(res)
      if (res.status === 200) {
        setAuth(true)
        setUserId(res.data.id)
      } else {
        setAuth(false)
        setUserId('')
      }
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  // Get User info
  useEffect(() => {
    axios.get(process.env.REACT_APP_GET_USER_URL + userId)
      .then((res) => {
        console.log(res)
        setUserId(res.data.id)
        setCurrEmail(res.data.email)
      }).catch((error) => {
        console.log(error)
      })
  })

  return (
    <Flex minHeight='90vh' width='full' alignItems='center' justifyContent='center' >
      {!auth && (
        <Flex flexDir="column" alignItems="center">
          <Text color={"tomato"}>You are not logged In</Text>
          <Link as={LinkRouter} color="green.500" to="/login">Go to Login</Link>
        </Flex>
      )}
      {auth &&
        <Flex flexDir="column" alignItems="center">
          <Heading size={"lg"}>Welcome</Heading>
          <Box p={5}>
            <Text>ID: {userId}</Text>
            <Text>Email: {currEmail}</Text>
          </Box>
          <Button bg={"tomato"} color={"white"}>
            Log out
          </Button>
        </Flex>
      }
    </Flex >
  )
}

export default Home