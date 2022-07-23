import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from "react-redux"


import {
  Box,
  Heading,
  Image,
  Text,
  Stack,
  Button,
} from '@chakra-ui/react';
  import { useNavigate, useParams } from "react-router-dom";
import { getArticleDetails } from '../redux/action';

const ArticleDetails = () => {
    const params = useParams()
    const navigate = useNavigate()
    
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.articles.articlesDetails.articles||[])

    console.log("details999",data)
    const [detailData,setDetailData] = useState({})
    useEffect(()=>{
    dispatch(getArticleDetails(params.id))
    },[dispatch,params])
    
    // useEffect(()=>{
    // if(params.id){
    //   const temp = data.find((item)=>item.id===Number(params.id))
    //   temp && setDetailData(temp)
    // }
    // },[params.id,data])


    const handleClick = ()=>{
      navigate("/")
    }

  return (
    <>
     {data.map((data)=>(
     <Stack py={6} marginLeft={"40px"}>
      <Box
        maxW={'945px'}
        w={'full'}
        h={"600px"}
        bg={('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'200px'}
         >
          <Image
          h={"300px"}
          w={"900px"}
            src={data.urlToImage}
            layout={'fill'}
          />
        </Box>
        <Stack marginTop={"100px"}>
         
          <Heading
            color={('gray.700', 'white')}
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
              }} onClick={handleClick}>
              Back to Article 
            
            </Button>
        
        </Stack>
      </Box>
    </Stack>
    ))}
    </>
  )
}

export default ArticleDetails