import { Button,Text, Modal, ModalBody, ModalCloseButton, ModalContent,  ModalHeader, ModalOverlay, useDisclosure,Image, Input, Box, Flex, ModalFooter } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom"

export const ForgetPassword = ({handleClose}) => {
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  console.log(onOpen);
  return (
    <>
    
      <Text onClick={onOpen} cursor={'pointer'} >
       Forget Password
      </Text>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Image src="https://www.kindmeal.my/images/logo-kindmeal.png"></Image>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody mt='-5'>
            <Text fontSize={'20px'} fontWeight={'medium'} color={'gray.500'} textAlign={'center'} >Reset Your Password</Text>
            <Text fontSize={'16px'}  color={'black.500'} textAlign={'center'}>Enter your membership email and we'll send you instructions to reset it</Text>
            <Box ml={'35'}>
                <Input placeholder='Your Email ' fontSize={'18px'} w={'90%'} />
             </Box>
             <Box ml={'35'}>
                <Button w="90%" mt="5%" bg='green.500' color={'white'}>RESET PASSWORD</Button>
            </Box>
            <Box mt={'8'}>
                <Flex justifyContent={'space-around'}>
                   <Link to="/Login"> <Box>
                        <Text textDecoration={'underline'}>Member Login</Text>
                    </Box></Link>
                   <Link to="/Signup"> <Box>
                        <Text textDecoration={'underline'}>Not a member? Sign up FREE!</Text>
                    </Box></Link>
                </Flex>
            </Box>
           
           
          </ModalBody>
            <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

