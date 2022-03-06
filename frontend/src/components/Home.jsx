import React, { useEffect, useState } from "react"
import { Flex } from "@chakra-ui/react"
import axios from "axios"

const Home = () => {
  const [auth, setAuth] = useState(true)

  // Verify token
  useEffect(() => {
    axios.get(process.env.REACT_APP_IS_AUTHENTICATED_URL, {
      headers: {
        "x-access-token": localStorage.getItem('token')
      }
    }).then((res) => {
      console.log(res)
      if (res.status === 200) setAuth(true)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <Flex>
      Home
      {auth ? "You are logge in" : "Not loading"}
    </Flex>
  )
}

export default Home