import { Box, HStack } from '@chakra-ui/react'
import React from 'react'

const TopSection = () => {
  return (
  
    <Box>
      <HStack style={{justifyContent:"space-between",width:"75%",margin:"auto"}}>
        <Box>
          <img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="" />
        </Box>
        <Box style={{display : "flex" ,gap :"20px"}}>
          <a href=""><img src="https://www.kindmeal.my/images/follow_blog_grey.png" alt="" width="40px"/></a>
          <a href="https://www.facebook.com/KindMeal.my" target="blank"><img src="https://www.kindmeal.my/images/follow_facebook_grey.png" alt="" width="40px"/></a>
          <a href="https://twitter.com/KindMeal" target="blank"><img src="https://www.kindmeal.my/images/follow_twitter_grey.png" alt="" width="40px"/></a>
        </Box>
        <Box style={{display : "flex" ,gap:"10px",fontSize:"12px"}}>
          <h5>Login</h5>
          <a href="https://www.kindmeal.my/login.php?action=facebook" style={{backgroundColor :"blue" ,color:"white",padding:"1px 8px",borderRadius:"5px",fontWeight:"bold"}}>Facebook</a>
          <a href="" style={{backgroundColor :"grey" ,color:"white",padding:"1px 15px",borderRadius:"5px" ,fontWeight:"bold"}}>Email</a>
          <a href="">Sign Up</a>
        </Box>
      </HStack>
    </Box>
  )
}

export default TopSection