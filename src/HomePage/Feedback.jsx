import React, { useState, useEffect } from 'react';
import { Box, Button, ChakraProvider, extendTheme, Flex, Text } from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa';


const data = [
    { id: 1, name:"Tanya gupta via instagram", feadback: '”The six of us wanted to celebrate our year of togetherness with something which will stay with us forever. So, all of us bought this beautiful ring which is the perfect symbol of our friendship and is just so classy!”', icon: <FaInstagram boxSize={40} /> },
    { id: 2, name:"Silpa parveen via instagram", feadback: '”My fiance wanted to give me something classic and unique. He searched everywhere, literally half of the Chandigarh for the unique design. Our search was complete when we entered CaratLane store. My fiance selected the diamond and I selected the design. I love it because it is designed just for me.”', icon: <FaInstagram boxSize={40} /> },
    { id: 3, name:"pooja via instagram", feadback: ' “I got this necklace as my wedding gift and instantly loved it. It is literally the only accessory I wore on my entire honeymoon. I love how delicate and beautiful it is.”', icon: <FaInstagram boxSize={40} /> }
  ];


const Feedback = () => {
  const [currentMedia, setCurrentMedia] = useState(0);

  useEffect(() => {
    const slideshow = setInterval(handleNext, 10000); // Auto slideshow every 1 second

    return () => {
      clearInterval(slideshow); // Clear interval on component unmount
    };
  }, []);

  const handleNext = () => {
    setCurrentMedia(prevMedia => (prevMedia === data.length - 1 ? 0 : prevMedia + 1));
  };

return(
      <Flex >
        {data.map((item, index) => (
          <Box h="400px" w="100%" key={index} display={index === currentMedia ? 'block' : 'none'}>
            <Flex justifyContent={"center"} color={"pink.500"} ><FaInstagram size={40}/></Flex>
            <Text w={{base:"90%",lg:"50%"}}  m="auto" fontSize={{base:"20px",lg:"26px"}} align={"justify"} color={"#9D9FA4"} mt="4">{item.feadback}</Text>
            <Text mt="4" align={"center"}>{item.name}</Text>
            <Flex justifyContent={"center"}>
            <Button bg={"transparent"} mt="20px" border={"1px solid #8863FB"} color={"#8863FB"}>Read More</Button>
            </Flex>
          </Box>
        ))}
      </Flex>
  );
};

export default Feedback;
