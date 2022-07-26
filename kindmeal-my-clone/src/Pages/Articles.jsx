import React, { useEffect } from 'react'
import { getArticle } from '../Redux/action'
import {useDispatch,useSelector} from "react-redux"
import {
  Button,
  Center,
  Flex,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';


function Articles() {
const dispatch = useDispatch()
const data = useSelector((state)=>state.articles.articles.articles||[])
const navigate = useNavigate()
//console.log("data",data)

  useEffect(()=>{
      dispatch(getArticle())
  },[dispatch])


// const handleClick = (name)=>{
//   navigate(`/${name}`)
// }


  return (
    <>
    {data.map((item)=>(
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '1040px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
      
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={item.urlToImage}
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
         <Text  
         color={('black')}
         fontSize={'xl'}
         fontWeight={""}>
          {item.title}
         </Text>
          <Text
            textAlign={'center'}
            color={('gray.700', 'gray.400')}
            px={3}>
           {item.description}
          </Text>
          

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            
            alignItems={'center'}>
           <Flex>
            <Link to= { `/articles/${item.name}` }>
              <Button
                fontSize={'sm'}
                bg={'red'}
                color={'white'}
                w={"150px"}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }

                _hover={{
                  bg: 'blue.500',
                }}

                _focus={{
                  bg: 'blue.500',
                }}>

                View Article
              
              </Button>
            </Link>
            
            </Flex>
          </Stack>
        </Stack>
      </Stack>
    </Center>
    ))}
    </>
  );

}

export default Articles