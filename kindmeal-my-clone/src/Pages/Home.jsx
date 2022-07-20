import { Box, HStack, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar'

let imgArr = ['https://www.kindmeal.my/photos/deal/6/692-4538-m.jpg',
  'https://www.kindmeal.my/photos/deal/6/665-4120-m.jpg',
  'https://www.kindmeal.my/photos/deal/4/424-1404-m.jpg',
  'https://www.kindmeal.my/photos/deal/6/666-4145-m.jpg', 
  'https://www.kindmeal.my/photos/deal/6/610-3386-m.jpg',
  ]

  let i = 0;

const Home = () => {

  const [img , setImg] = useState(imgArr[0])

  setInterval(()=>{

    if(i == imgArr.length)
    {
      i=0
    }
    i++
    setImg(imgArr[i])
  },4000)

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
      <Navbar/>
      <Box width="75%" margin="auto" height="500px" style={{boxShadow :"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
        <Box>
          <img src={img} alt="" style={{width:"100%",height:"300px"}}/>
        </Box>
        <Box marginTop="10px">
          <Grid templateColumns='repeat(5, 1fr)' gap={6} padding="20px">
            {imgArr.map((item)=>(
              <GridItem w='100%' h='100'>
                <img src={item}  />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box width="75%" height="350px" margin="auto" marginTop="35px" border="1px solid">
        <Box width="100%" height="50px" margin="auto" border="1px solid red" display="flex" justifyContent="space-between">
          <Box border="1px solid">
            
          </Box>
          <Box border="1px solid"></Box>
          <Box border="1px solid"></Box>
        </Box>
        <Grid templateColumns='repeat(5, 1fr)' gap={4} marginTop="10px">
          <GridItem w='100%' h='250px' border="1px solid blue"></GridItem>
          <GridItem w='100%' h='250px' border="1px solid blue"></GridItem>
          <GridItem w='100%' h='250px' border="1px solid blue"></GridItem>
          <GridItem w='100%' h='250px' border="1px solid blue"></GridItem>
          <GridItem w='100%' h='250px' border="1px solid blue"></GridItem>
        </Grid>
      </Box>
      <Box width="75%" height="350px" margin="auto" marginTop="35px" border="1px solid">
        <Box width="100%" height="50px" margin="auto" border="1px solid red" display="flex" justifyContent="space-between">
          <Box border="1px solid">
            
          </Box>
          <Box border="1px solid"></Box>
          <Box border="1px solid"></Box>
        </Box>
        <Grid templateColumns='repeat(5, 1fr)' gap={4} marginTop="10px">
          <GridItem w='100%' h='250px' border="1px solid blue"></GridItem>
          <GridItem w='100%' h='250px' border="1px solid blue"></GridItem>
          <GridItem w='100%' h='250px' border="1px solid blue"></GridItem>
          <GridItem w='100%' h='250px' border="1px solid blue"></GridItem>
          <GridItem w='100%' h='250px' border="1px solid blue"></GridItem>
        </Grid>
      </Box>
      <Box width="75%" height="350px" margin="auto" marginTop="35px" border="1px solid">
        <Box width="100%" height="50px" margin="auto" border="1px solid red" display="flex" justifyContent="space-between">
          <Box border="1px solid">
            
          </Box>
          <Box border="1px solid"></Box>
          <Box border="1px solid"></Box>
        </Box>
        <Grid templateColumns='repeat(5, 1fr)' gap={4} marginTop="10px">
          <GridItem w='100%' h='250px' border="1px solid blue"></GridItem>
          <GridItem w='100%' h='250px' border="1px solid blue"></GridItem>
          <GridItem w='100%' h='250px' border="1px solid blue"></GridItem>
          <GridItem w='100%' h='250px' border="1px solid blue"></GridItem>
          <GridItem w='100%' h='250px' border="1px solid blue"></GridItem>
        </Grid>
      </Box>
      <Box width="75%" height="350px" margin="auto" marginTop="35px" border="1px solid">
        <Box width="100%" height="50px" margin="auto" border="1px solid red" display="flex" justifyContent="space-between">
          <Box border="1px solid">
            
          </Box>
          <Box border="1px solid"></Box>
          <Box border="1px solid"></Box>
        </Box>
        <Grid templateColumns='repeat(5, 1fr)' gap={4} marginTop="10px">
          <GridItem w='100%' h='250px' border="1px solid blue"></GridItem>
          <GridItem w='100%' h='250px' border="1px solid blue"></GridItem>
          <GridItem w='100%' h='250px' border="1px solid blue"></GridItem>
          <GridItem w='100%' h='250px' border="1px solid blue"></GridItem>
          <GridItem w='100%' h='250px' border="1px solid blue"></GridItem>
        </Grid>
      </Box>
    </Box>
  )
}
//
export default Home