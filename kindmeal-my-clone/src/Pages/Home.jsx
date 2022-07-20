import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <Box>
      <HStack style={{justifyContent:"space-between",width:"75%",margin:"auto"}}>
        <Box>
        <img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="" />
        </Box>
        <Box style={{display : "flex" ,gap :"20px"}}>
          <img src="https://www.kindmeal.my/images/follow_blog_grey.png" alt="" width="40px"/>
          <img src="https://www.kindmeal.my/images/follow_facebook_grey.png" alt="" width="40px"/>
          <img src="https://www.kindmeal.my/images/follow_twitter_grey.png" alt="" width="40px"/>
        </Box>
        <Box style={{display : "flex" ,gap:"10px",fontSize:"12px"}}>
          <h5>Login</h5>
          <a href="" style={{backgroundColor :"blue" ,color:"white",padding:"1px 8px",borderRadius:"5px",fontWeight:"bold"}}>Facebook</a>
          <a href="" style={{backgroundColor :"grey" ,color:"white",padding:"1px 15px",borderRadius:"5px" ,fontWeight:"bold"}}>Email</a>
          <a href="">Sign Up</a>
        </Box>
      </HStack>
      <Navbar/>
    </Box>
  )
}

export default Home