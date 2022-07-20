import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from "react-redux"


import {
  Box,
  Heading,
  Image,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
  import { useParams } from "react-router-dom";
import { getArticle } from '../redux/action';

const ArticleDetails = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.articles.articles.articles||[])
    const [detailData,setDetailData] = useState({})
    useEffect(()=>{
    dispatch(getArticle())
    },[dispatch,params])
    
    useEffect(()=>{
    if(params.id){
      const temp = data.find((item)=>item.id===Number(params.id))
      temp && setDetailData(temp)
    }
    },[params.id,data])




  return (
    <>
     
     <Stack py={6} marginLeft={"40px"}>
      <Box
        maxW={'945px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={data.urlToImage}
            layout={'fill'}
          />
        </Box>
        <Stack>
         
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
           {data.title}
          </Heading>
          <Text color={'gray.500'}>
            {data.description}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
        
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
              Back to Article 
            
            </Button>
        
        </Stack>
      </Box>
    </Stack>
    </>
  )
}

export default ArticleDetails