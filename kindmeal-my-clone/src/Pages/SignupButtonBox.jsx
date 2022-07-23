import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Image,
  Heading,
  Text,
  Flex,
  Box,
  ModalFooter,

} from '@chakra-ui/react'
import { useState } from 'react'
import {Link} from "react-router-dom" 
import { ForgetPassword } from './ForgetPassword'

export const SignupButtonBox = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
   const [size, setSize] = useState('lg')
   

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }
  return (
    <>
        <Text
          onClick={() => handleSizeClick(size)}
          m={5}
          style = {{cursor:"pointer"}}
        >SIGNUP</Text>
        

      <Modal onClose={onClose} isOpen={isOpen}  isCentered >
        <ModalOverlay />
        <ModalContent  >
          <ModalHeader>
            <Image src="https://www.kindmeal.my/images/logo-kindmeal.png" alt='kindImage'></Image>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Heading fontSize={'20'} color="gray" textAlign={'center'}>Join KindMeal For FREE Now</Heading>
           <Text fontSize={'16'} color="gray" textAlign={'center'}>Please select the type of membership to proceed</Text>
           <Box marginTop={'7%'}>
           <Link to="/FoodSignup"><Flex border={'1px solid gray'} borderRadius={'10px'} h='200px'>
                <Image src='https://www.kindmeal.my/images/join_normal.png'alt='Food Lovers' w={'25%'} ml={4}></Image>
                <Box marginLeft={'5%'}>
                    <Text marginTop={'5%'} fontSize="20px" color={'gray.900'}>Food Lovers</Text>
                    <Text marginTop={'5%'} textAlign={'left'}>Join FREE to enjoy yummy deals, share reviews & meet our community of compassionate food lovers.</Text>
                </Box>
                
            </Flex></Link>
            <Link to="/RestaurantSignup"><Flex border={'1px solid gray'} mt={8} borderRadius={'10px'} h='200px'>
                <Image src='https://www.kindmeal.my/images/join_shop.png'alt='Food Lovers' w={'22%'} h="150px" mt={'5'} ml={4}></Image>
                <Box marginLeft={'5%'}>
                    <Text marginTop={'5%'} fontSize="20px" color={'gray.900'}>Restaurant / Shop Owner</Text>
                    <Text marginTop={'5%'} textAlign={'left'}>List your food outlet, create exciting vegetarian deals & showcase your delicious menu for FREE. Enjoy our yummy deals, share reviews & meet food lovers too.</Text>
                </Box>
            </Flex></Link>
           </Box>
           <Flex mt={6}justifyContent={'space-between'}>
            <Link to="/Login"><Box>
                <Text textDecoration={'underline'}>Member Login</Text>
            </Box></Link>
            <Box >
            <ForgetPassword />
            </Box>
           </Flex>
           
          </ModalBody>
           <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
         
        </ModalContent>
      </Modal>
    </>
  )
}
 





