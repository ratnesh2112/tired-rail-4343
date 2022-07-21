import { Box, HStack, Grid, GridItem, Heading, Img  } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
      <Box width="75%" margin="auto" height="500px" style={{boxShadow :"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
        <Box>
          <img src={img} alt="" style={{width:"100%",height:"300px"}}/>
        </Box>
        <Box marginTop="10px">
          <Grid templateColumns='repeat(5, 1fr)' gap={6} padding="20px">
            {imgArr.map((item)=>(
              <GridItem w='100%' h='100' key={item}>
                <img src={item}  />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box width="75%" height="330px" margin="auto" marginTop="35px" style={{boxShadow :"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
        <Box width="100%" height="50px" margin="auto" display="flex" justifyContent="space-between">
          <Box padding="10px">
            <Heading fontSize="30px" fontWeight="normal" color="#707375">Latest News & Videos</Heading>
          </Box>
          <Box fontSize="20px" textDecoration="none" color="blue" padding="15px">
            <Link to="" >Save Lives with Your Blog  .  </Link>
            <Link to="">News & Articles   .   </Link>
            <a href="https://www.facebook.com/KindMeal.my" target="blank">Follow Our Facebook</a>
          </Box>
        </Box>
        <Grid templateColumns='repeat(5, 1fr)' gap={4} marginTop="10px" paddingTop="-5px" paddingLeft="20px" paddingRight="20px">
          <GridItem w='100%' h='250px'>
              <Img src='https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/292745281_1082747175695504_110302981980322070_n.jpg?stp=dst-jpg_p720x720&_nc_cat=1&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=5_yVdW-VKbIAX-b6H16&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT_Ian_mJyIytPLJOk1HdlpqnROReLSymISnFu8vQUTjIQ&oe=62DE5026' width="100%" height="85%" borderRadius="10px" />
              <p style={{fontSize:"13px" , color:"grey", textAlign:"center"}} >Animals Adopting Other Animals</p>
          </GridItem>
          <GridItem w='100%' h='250px'>
              <Img src='https://external-xsp1-2.xx.fbcdn.net/emg1/v/t13/4527024197553285358?url=https%3A%2F%2Fwww.aljazeera.com%2Fwp-content%2Fuploads%2F2022%2F07%2F000_32ET4KC.jpg%3Fresize%3D1200%252C630&fb_obo=1&utld=aljazeera.com&stp=c0.5000x0.5000f_dst-emg0_p630x630_q75&ccb=13-1&oh=00_AT8fB2BV4kz8UApmlgaJsQtR5apdRha4ocK3CaOKBQ1XIA&oe=62DA2BDC&_nc_sid=c504da' width="100%" height="85%" borderRadius="10px"/>
              <p style={{fontSize:"13px" , color:"grey", textAlign:"center"}}>Malaysia Seizes Elephant Tusks, Pangolin Scales In Major Bust</p>
          </GridItem>
          <GridItem w='100%' h='250px'>
            <Img src="https://scontent-xsp1-3.xx.fbcdn.net/v/t15.5256-10/290389529_722462468872404_8153272933717469155_n.jpg?stp=dst-jpg_s720x720&_nc_cat=107&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=BXQsX1PfrFIAX-7JI2M&_nc_ht=scontent-xsp1-3.xx&edm=ALdPpPkEAAAA&oh=00_AT_j8YQLwrNPjd2SwN_-0XNzITC947YmBR2aLD2DgVTwkQ&oe=62DDCC32" width="100%" height="85%" borderRadius="10px"/>
            <p style={{fontSize:"13px" , color:"grey", textAlign:"center"}}>Lushy Nut Butter 🔥</p>
          </GridItem>
          <GridItem w='100%' h='250px'>
            <Img src="https://scontent-xsp1-3.xx.fbcdn.net/v/t15.5256-10/258283240_969139953960892_9020817108506674674_n.jpg?stp=dst-jpg_s720x720&_nc_cat=109&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=Is6KDWY6KNUAX94ID4k&_nc_ht=scontent-xsp1-3.xx&edm=ALdPpPkEAAAA&oh=00_AT9v2WVZimY5IY7nocvjWGrQEqFFyHpCJF6pDNa3kBwz_A&oe=62DE6A3C" width="100%" height="85%" borderRadius="10px"/>
            <p style={{fontSize:"13px" , color:"grey", textAlign:"center"}}>Rescue Cow Didn''t Have Any Friends Until He Met A Dalmatian</p>
          </GridItem>
          <GridItem w='100%' h='250px'>
            <Img src="https://external-xsp1-2.xx.fbcdn.net/emg1/v/t13/14374414952122747506?url=https%3A%2F%2Fichef.bbci.co.uk%2Fnews%2F1024%2Fbranded_news%2F13F40%2Fproduction%2F_125882718_p0clg9dj.jpg&fb_obo=1&utld=co.uk&stp=c0.5000x0.5000f_dst-emg0_p576x576_q75&ccb=13-1&oh=00_AT8OkZW4UPrQnfAQWW4GA2qA7nl7ZVIFklgW3wPjLxFdNw&oe=62DAA5AC&_nc_sid=c504da" width="100%" height="85%" borderRadius="10px"/>
            <p style={{fontSize:"13px" , color:"grey", textAlign:"center"}}>The Moment A Kangaroo Is Rescued From Flood Waters</p>
          </GridItem>
        </Grid>
      </Box>
      <Box width="75%" height="330px" margin="auto" marginTop="35px" style={{boxShadow :"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
        <Box width="100%" height="50px" margin="auto" display="flex" justifyContent="space-between">
          <Box padding="10px">
            <Heading fontSize="30px" fontWeight="normal" color="#707375">Yummylicious Moments</Heading>
          </Box>
          <Box fontSize="20px" textDecoration="none" color="blue" padding="15px">
            <Link to="" >Secret Recipes  .  </Link>
            <Link to="">Member Hot Pics   .   </Link>
            <a href="https://www.facebook.com/KindMeal.my" target="blank">Photo Moments</a>
          </Box>
        </Box>
        <Grid templateColumns='repeat(5, 1fr)' gap={4} marginTop="10px" paddingTop="-5px" paddingLeft="20px" paddingRight="20px">
          <GridItem w='100%' h='250px'>
              <Img src='https://www.kindmeal.my/photos/moment/24/24187-46271-s.jpg' width="100%" height="85%" borderRadius="10px" />
              <p style={{fontSize:"16px" , color:"grey", textAlign:"center"}} >A Delicious KindMoment</p>
              <p style={{fontSize:"13px" , color:"grey", textAlign:"center"}} >EveWong</p>
          </GridItem>
          <GridItem w='100%' h='250px'>
              <Img src='https://www.kindmeal.my/photos/moment/24/24183-46258-s.jpg' width="100%" height="85%" borderRadius="10px"/>
              <p style={{fontSize:"16px" , color:"grey", textAlign:"center"}}>A Delicious KindMoment</p>
              <p style={{fontSize:"13px" , color:"grey", textAlign:"center"}} >EivianYee</p>
          </GridItem>
          <GridItem w='100%' h='250px'>
            <Img src="https://www.kindmeal.my/photos/moment/24/24181-46253-s.jpg" width="100%" height="85%" borderRadius="10px"/>
            <p style={{fontSize:"16px" , color:"grey", textAlign:"center"}}>A Delicious KindMoment</p>
            <p style={{fontSize:"13px" , color:"grey", textAlign:"center"}} >Taurus86</p>
          </GridItem>
          <GridItem w='100%' h='250px'>
            <Img src="https://www.kindmeal.my/photos/moment/24/24180-46252-s.jpg" width="100%" height="85%" borderRadius="10px"/>
            <p style={{fontSize:"16px" , color:"grey", textAlign:"center"}}>Honest Bakery Cafe</p>
            <p style={{fontSize:"13px" , color:"grey", textAlign:"center"}} >Taurus86</p>
          </GridItem>
          <GridItem w='100%' h='250px'>
            <Img src="https://www.kindmeal.my/photos/moment/24/24179-46250-s.jpg" width="100%" height="85%" borderRadius="10px"/>
            <p style={{fontSize:"16px" , color:"grey", textAlign:"center"}}>Honestly Superb Meals</p>
            <p style={{fontSize:"13px" , color:"grey", textAlign:"center"}} >Taurus86</p>
          </GridItem>
        </Grid>
      </Box>
      <Box width="75%" height="330px" margin="auto" marginTop="35px" style={{boxShadow :"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
        <Box width="100%" height="50px" margin="auto" display="flex" justifyContent="space-between">
          <Box padding="10px">
            <Heading fontSize="30px" fontWeight="normal" color="#707375">Discover Restaurants</Heading>
          </Box>
          <Box fontSize="20px" textDecoration="none" color="blue" padding="15px">
            <Link to="" >Vegetarian Directory  .  </Link>
            <Link to="">Restaurant Menu   .   </Link>
            <a href="https://www.facebook.com/KindMeal.my" target="blank" >Food Map</a>
          </Box>
        </Box>
        <Grid templateColumns='repeat(5, 1fr)' gap={4} marginTop="10px" paddingTop="-5px" paddingLeft="20px" paddingRight="20px">
          <GridItem w='100%' h='250px'>
              <Img src='https://www.kindmeal.my/photos/item/0/528-6826-s.jpg' width="100%" height="85%" borderRadius="10px" />
              <p style={{fontSize:"16px" , color:"grey", textAlign:"center"}} >Loh Mee</p>
          </GridItem>
          <GridItem w='100%' h='250px'>
              <Img src='https://www.kindmeal.my/photos/item/0/343-3611-s.jpg' width="100%" height="85%" borderRadius="10px"/>
              <p style={{fontSize:"16px" , color:"grey", textAlign:"center"}}>Freedom Toast</p>
          </GridItem>
          <GridItem w='100%' h='250px'>
            <Img src="https://www.kindmeal.my/photos/item/0/592-8649-s.jpg" width="100%" height="85%" borderRadius="10px"/>
            <p style={{fontSize:"16px" , color:"grey", textAlign:"center"}}>mJ Smoothies Heart</p>
          </GridItem>
          <GridItem w='100%' h='250px'>
            <Img src="https://www.kindmeal.my/photos/item/0/568-7943-s.jpg" width="100%" height="85%" borderRadius="10px"/>
            <p style={{fontSize:"16px" , color:"grey", textAlign:"center"}}>Green Bean Pancake with Coconut</p>
          </GridItem>
          <GridItem w='100%' h='250px'>
            <Img src="https://www.kindmeal.my/photos/item/0/186-1807-s.jpg" width="100%" height="85%" borderRadius="10px"/>
            <p style={{fontSize:"16px" , color:"grey", textAlign:"center"}}>B03 NANYANG CURRY</p>
          </GridItem>
        </Grid>
      </Box>
      <Box width="75%" height="330px" margin="auto" marginTop="35px" style={{boxShadow :"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
        <Box width="100%" height="50px" margin="auto" display="flex" justifyContent="space-between">
          <Box padding="10px">
            <Heading fontSize="30px" fontWeight="normal" color="#707375">Amazing Superheroes</Heading>
          </Box>
          <Box fontSize="20px" textDecoration="none" color="blue" padding="15px">
            <Link to="" >Latest Buzz  .  </Link>
            <Link to="">Lifestyle Ambassadors   .   </Link>
            <a href="https://www.facebook.com/KindMeal.my" target="blank" style={{color:"gold"}}>Win Gifts</a>
          </Box>
        </Box>
        <Grid templateColumns='repeat(5, 1fr)' gap={4} marginTop="10px" paddingTop="-5px" paddingLeft="20px" paddingRight="20px">
          <GridItem w='100%' h='250px'>
              <Img src='https://www.kindmeal.my/photos/member/24/24580-m.jpg' width="100%" height="85%" borderRadius="10px" />
              <p style={{fontSize:"15px" , color:"grey", textAlign:"center"}} >ChinMinNg</p>
          </GridItem>
          <GridItem w='100%' h='250px'>
              <Img src='https://www.kindmeal.my/photos/member/18/18499-m.jpg' width="100%" height="85%" borderRadius="10px"/>
              <p style={{fontSize:"15px" , color:"grey", textAlign:"center"}}>LeeHenry</p>
          </GridItem>
          <GridItem w='100%' h='250px'>
            <Img src="https://www.kindmeal.my/photos/member/36/36883-m.jpg" width="100%" height="85%" borderRadius="10px"/>
            <p style={{fontSize:"15px" , color:"grey", textAlign:"center"}}>NgChainChuan</p>
          </GridItem>
          <GridItem w='100%' h='250px'>
            <Img src="https://www.kindmeal.my/photos/member/40/40855-m.jpg" width="100%" height="85%" borderRadius="10px"/>
            <p style={{fontSize:"15px" , color:"grey", textAlign:"center"}}>TanAnnie</p>
          </GridItem>
          <GridItem w='100%' h='250px'>
            <Img src="https://www.kindmeal.my/photos/member/33/33921-m.jpg" width="100%" height="85%" borderRadius="10px"/>
            <p style={{fontSize:"15px" , color:"grey", textAlign:"center"}}>AnneYap1</p>
          </GridItem>
        </Grid>
      </Box>
      
      
    </Box>
  )
}
export default Home