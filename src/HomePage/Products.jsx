import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Feedback from "./Feedback";
import imageData from "./imageData"; // Import the image data from imageData.js

const Products = () => {
  const navigate = useNavigate();
  // Define the number of cards per row based on screen size
  const cardsPerPage = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardClick = (card) => {
    setSelectedCard(card);
    navigate(`/ProductDetails/${card.cardId}`); // Pass card ID in the URL
  };

  // State for the like/wishlist icon
  const [isLiked, setIsLiked] = useState(false);

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <Box as="footer" bg="gray.200" py={4}>
        <Box>
          <Box
            h="50px"
            ml={{ base: "20px", lg: "60px" }}
            w={{ base: "60%", lg: "15%" }}
            fontSize={"24px"}
            fontWeight={600}
            borderBottom={"3px solid #f28524"}
          >
            Best of CaratLane
          </Box>

          <Flex align="center" justify="center" flexWrap="wrap">
            {imageData.map((card, index) => (
              <Box
                key={index}
                flexShrink={0}
                borderWidth="1px"
                borderRadius="lg"
                w="300px"
                overflow="hidden"
                m={4}
                bg="white"
                cursor="pointer"
                 onClick={() => handleCardClick(card)} 
              >
                <Box borderRadius="lg" overflow="hidden" position="relative">
                  <Image
                    h="250px"
                    transform="scale(1.0)"
                    src={card.image}
                    alt="some text"
                    objectFit="contain"
                    width="100%"
                    transition="0.4s ease-in-out"
                    _hover={{
                      transform: "scale(1.2)",
                    }}
                  />
                  <IconButton
                    bg="transparent"
                    _hover={{ bg: "transparent" }}
                    icon={isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
                    // Pass data id for post in wishlist in the backend
                    color={isLiked ? "red" : "gray"}
                    onClick={handleToggleLike}
                    aria-label="Toggle Like"
                    size="md"
                    position="absolute"
                    top="10px"
                    right="10px"
                  />
                </Box>

                {/* Price box */}
                <Flex mt="10px" pb="20px" justifyContent={"space-between"} w="100%">
                  <Flex pl="20px">
                    <Text fontSize={"26px"} fontWeight={700} mt="1">
                      {card.price}
                    </Text>
                    <Text
                      mt="15px"
                      textDecoration="line-through"
                      textDecorationColor="black"
                      ml="5px"
                      fontSize={"13px"}
                    >
                      ₹5436
                    </Text>
                  </Flex>
                </Flex>

                <Text
                  p="15px"
                  h="40px"
                  color={"gray"}
                  as="p"
                  fontSize="md"
                  overflow={"hidden"}
                >
                  {card.Discription}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>

      <Feedback />
    </>
  );
};

export default Products;
