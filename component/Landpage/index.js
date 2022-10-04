import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Text,
  Icon,
  useMediaQuery,
  Grid, 
  GridItem,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  SimpleGrid 

} from "@chakra-ui/react";

import { useNFTCollection } from '../../hooks/api';

export default function Home() {
  const [asset, setAsset] = useState(null);
  // Button bgColor color
  const bgColor = useColorModeValue("blue.200", "blue.500");
  const total_supply = 10000;
  
  const collectiondata = useNFTCollection();
  
  return (
    <Box px={50} py={10} mx="auto">
       
      <SimpleGrid minChildWidth='270px' spacing='40px'>
        {
          collectiondata && collectiondata.assets.map((e, i)=>{
            // if(i == 0 || i == 1)
            //   return
            return(
              <Box w='100%' h='100%' p={5}  border='1px' borderColor='gray.400'  key={i} textAlign="center" >
              <Image src={e.image_url} _hover={{ transform: "scale(1.03)", }} transition={"0.2s ease-in-out"} alt='Dan Abramov' textAlign="center"/>
              <p>{e.token_id}</p>
              <Stat>
                <StatNumber>£0.00</StatNumber>
                <StatHelpText>Feb 12 - Feb 28</StatHelpText>
              </Stat>
            </Box> 
            );
          })
        }
       </SimpleGrid> 
    </Box>
  );    


  
}
