import {
  Flex,
  Box,
  FormControl,
  Input,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Image,
 
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link as RouterLink, } from "react-router-dom"
import { login } from '../Redux/Auth/Action';
import { LOGIN_SUCCESS } from '../Redux/Auth/ActionTypes';
import { useNavigate } from 'react-router-dom';

export  function Login() {
    const [username,Setusername]=useState("");
    const [password,SetPassword]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate()
   

 const handleLogin=()=>{
    if(username&&password){
        let params={
            username,
            password
        };
        dispatch(login(params)).then((r)=>{
            if(r===LOGIN_SUCCESS){
                navigate("/",{replace:true})
            }
        })
    }
 }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
        </Stack>
        <Box
          rounded={'3xl'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'} 
          p={8}>
          <Stack spacing={4}>
            <Image src="https://www.kindmeal.my/images/logo-kindmeal.png"></Image>
            <Text fontSize={'20'}>Member Login</Text>
            <FormControl id="username">
              <Input type="text" placeholder="Enter Email" value={username} onChange={(e)=>Setusername(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <Input type="password" placeholder="Enter password" value={password} onChange={(e)=>SetPassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              
              <Button 
              
               h={'12'}
               width={'48'}
               margin={'auto'}
                bg={'green.400'}
                color={'white'}
                _hover={{
                  bg: 'green.400',
                }} onClick={handleLogin}>
               Login
              </Button>
              <hr/>
               <Button 
                h={'12'}
               mt={'-1.5'}
               
                bg={'blue.800'}
                color={'white'}
                _hover={{
                  bg: 'blue.800',
                }}>
               Login With FaceBook
              </Button>
              <Stack pt={6} direction={'row'} justifyContent={'space-between'} mt={'-1.5'}>
                <RouterLink to={'/ForgetPassword'} ><Text textDecoration={'underline'} cursor={'pointer'}>Forgot password?</Text></RouterLink>
              <Text  textDecoration={'underline'}>
               Not a member? <RouterLink to={'/signup'} color={'blue.400'}>Sign up FREE</RouterLink>
              </Text>
            </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}