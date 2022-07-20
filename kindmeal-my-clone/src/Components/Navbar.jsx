import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box bgColor="#2bb673">

      <HStack width="75%" margin="auto" justifyContent="space-between" padding="5px" color="white" fontSize="18px">
        <Link to="/">Home</Link>
        <Link to="">Meal Deals</Link>
        <Link to="">KindMoments</Link>
        <Link to="">Hot Picks</Link>
        <Link to="">Recipes</Link>
        <Link to="">Directory</Link>
        <Link to="">Articles</Link>
        <Link to="">Help</Link>
      </HStack>

    </Box>
  )
}

export default Navbar