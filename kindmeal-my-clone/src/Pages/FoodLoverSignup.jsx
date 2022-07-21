import { Box, Image, Text, Flex, SimpleGrid, Heading, UnorderedList, ListItem } from '@chakra-ui/react'
import React from 'react'
import { Signup } from './Signup'

export const FoodLoverSignup = () => {
  return (
   <Flex  >
     <SimpleGrid column={1}>
          <Box mt={5} ml={70} height={'60'} width={'60'} border={'1px solid black'} borderRadius={20} cursor={'pointer'}>
            <Image src="https://www.kindmeal.my/images/join_normal.png"p={12}></Image>
            <Text color={'gray.500'}>Food Lover Sign Up</Text>
          </Box>
          <Box mt={8} ml={70} height={'60'} width={'60'} border={'1px solid black'} borderRadius={20} cursor={'pointer'}>
            <Image src="https://www.kindmeal.my/images/join_shop.png"p={12}></Image>
            <Text color={'gray.500'} mt={-5}>Restaurant Sign Up</Text>
          </Box>
           <Box mt={8} ml={70} height={'60'} width={'60'} border={'1px solid black'} borderRadius={20} cursor={'pointer'}>
            <Heading fontSize={20} p={5}>Why KindMeal?</Heading>

 <UnorderedList ml={7}>
  <ListItem>Exclusive meat-free deals</ListItem>
  <ListItem>Share yummy food moments</ListItem>
  <ListItem>Meet friendly food lovers</ListItem>
  <ListItem>Discover cool restaurants</ListItem>
  <ListItem>Email updates on tasty deals</ListItem>
  <ListItem>Instant coupons & dining</ListItem>
<ListItem>No upfront payment, booking </ListItem>
</UnorderedList>
</Box>
    </SimpleGrid>
   <Box ml={8} mt={5}>
    <Box ml={'-48'}>
     <Heading fontSize={25} fontWeight={'medium'}>Food Lover? Sign Up Now or <span style={{color:"blue"}}>Login With Facebook</span></Heading>
     <Text fontSize={14} ml={20} mt={3}> Discover tasty meat-free meals and dine instantly — no coupon payment, booking or printing is required.</Text>
     </Box>
     <Box mt={10}>
      <Text textAlign={'justify'} ml={20}>KindMeal is a fun, exciting and cool new way for you to show your compassion towards animals.<br/> We collaborate with kind restaurants and cafes across the nation to bring you delicious meat-free <br/>foods that will not only help save precious animal lives, but improve your health and save your money at the same time!</Text>
     </Box>
     <br/>
    <Signup />
   </Box>
   </Flex>

  )
}
