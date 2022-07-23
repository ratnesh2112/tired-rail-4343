import { Box, Button, Checkbox, Flex,Input,Radio,RadioGroup,Select,Stack,Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Register } from '../Redux/Auth/Action'
import { REGISTER_SUCCESS } from '../Redux/Auth/ActionTypes'
import { useNavigate } from 'react-router-dom'


export const Signup = () => {
const [Email,SetEmail]=useState("");
const [Password,SetPassword]=useState("");
const dispatch=useDispatch();
const navigate=useNavigate();



const handleSubmit=()=>{
  if(Email&&Password){
    let params={
      email:Email,
      password:Password
    }
    dispatch(Register(params)).then((r)=>{
        if(r===REGISTER_SUCCESS){
           navigate("/Login",{replace:true})
        }
    })
  }
}

  return (
    <>
    <Flex direction={'row'} mt={'5'} >
        <Box mt={'6'} ml={'6'} >
          <Text color={'gray.700'}>Your Name</Text>
        </Box>
        <Box ml={'8'}>
          <Text textAlign={'left'} color={'gray.500'} fontSize={'14'}>First Name</Text>
          <Input type="text" isRequired/>
        </Box>
         <Box ml={'8'}>
          <Text textAlign={'left'} color={'gray.500'} fontSize={'14'}>Last Name</Text>
          <Input type="text" isRequired/>
        </Box>
    </Flex>
    <Flex mt={'3'}>
      <Box mt={'6'} ml={'6'}>
        <Text color={'gray.700'} >Email</Text>
      </Box>
       <Box ml={'8'}>
          <Text ml={'10'} color={'gray.500'} fontSize={'14'}>Your email must be correct to receive activation email</Text>
          <Input ml={'10'} width={'133%'} type="text" value={Email} onChange={(e)=>SetEmail(e.target.value)} isRequired/>
        </Box>
    </Flex>
    <Flex mt={'3'}>
      <Box mt={'3'} ml={'6'}>
        <Text color={'gray.700'}>Re-Enter Email:</Text>
      </Box>
       <Box ml={'4'}>
          <Input ml={'-3'} width={'226%'}  type="text" isRequired/>
        </Box>
    </Flex>
    <Flex mt={'3'}>
      <Box mt={'3'} ml={'6'}>
        <Text color={'gray.700'} >Password</Text>
      </Box>
       <Box ml={'4'}>
          <Input  type='password' ml={'8'} width={'188%'} value={Password} onChange={(e)=>SetPassword(e.target.value)} isRequired/>
        </Box>
    </Flex>
     <Flex mt={'3'}>
      <Box mt={'14'} ml={'6'}>
        <Text color={'gray.700'}>UserName</Text>
      </Box>
       <Box ml={'4'}>
        <Text ml={'10'} color={'gray.500'} fontSize={'14'}>Choose a cool username for your Personal Profile page, comments & reviews</Text>
        <Text ml={'10'} textAlign={'left'} textDecoration={'underline'} color={'blue'}>http://KindMeal.my/Username</Text>
          <Input ml={'7'} width={'95%'} type="text" isRequired/>
        </Box>
    </Flex>
      <Flex mt={'3'}>
      <Box mt={'8'} ml={'6'}>
        <Text color={'gray.700'}>Birth Date</Text>
      </Box>
       <Box ml={'4'}>
        <Text ml={'10'} color={'gray.500'} fontSize={'14'}>Only your age will be publicly visible</Text>
          <Input type="date" ml={'8'} width={'95%'}  isRequired/>
        </Box>
    </Flex>
      <Flex mt={'3'}>
      <Box mt={'6'} ml={'6'}>
        <Text color={'gray.700'}>Country</Text>
      </Box>
       <Box ml={'16'} mt={'4'}>
        <Select placeholder='Select country' w={'112%'}>
    <option>Your Country</option>
    <option>India</option>
    <option>Malaysia</option>
    <option>United States of America</option>
    <option>Germany</option>
    <option>Russia</option>
    <option>Japan</option>
  </Select>
           
        </Box>
    </Flex>
     <Flex mt={'3'}>
      <Box mt={'6'} ml={'6'}>
        <Text color={'gray.700'}>State</Text>
      </Box>
       <Box ml={'20'} mt={'4'}>
        <Select placeholder='Select State' w={'112%'} >
    <option>Johan</option>
    <option>Delhi</option>
    <option>Kedhd</option>
    <option>Perlin</option>
    <option>Seahb</option>
    <option>Sarwak</option>
    <option>Torkey</option>
  </Select>
   </Box>
    </Flex>
     <Flex mt={'3'}>
      <Box mt={'3'} ml={'6'}>
        <Text color={'gray.700'}>Gender</Text>
      </Box>
       <Box ml={'16'} display={'flex'} mt={'3'}>
         <RadioGroup  defalutvalue={"male"}>
           <Stack direction='row'>
        <Radio value='1'>Male</Radio>
        <Radio value='2'>Female</Radio>
      </Stack>
      </RadioGroup>
          </Box>
    </Flex>
    <Flex mt={'3'}>
      <Box mt={'3'} ml={'6'}>
        <Text color={'gray.700'}>Profile Photo</Text>
      </Box>
       <Box ml={'4'}>
          <Input  ml={'2'}  type='file' isRequired/>
        </Box>
    </Flex>
    <Box marginLeft="-40%" mt={'4'}>
        <Checkbox  defaultChecked>I agree to KindMeal.my's Terms & Conditions</Checkbox>
    </Box>
    <Box marginLeft="-66%" mt={'6'}>
      <Button w={'44'} color={'white'} bg={'red.500'} onClick={handleSubmit}>Join Now</Button>
    </Box>
    
    
</>
  )
}
