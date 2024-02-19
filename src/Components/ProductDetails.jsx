import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import imageData from '../HomePage/imageData';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Image,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function ProductDetails() {
  const { cardId } = useParams();
 const navigate = useNavigate();



  const [isLiked, setIsLiked] = useState(false);
  const [selectedNetQuantity, setSelectedNetQuantity] = useState(1); // Default value

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };

  const selectedCard = imageData.find(card => card.cardId === parseInt(cardId));

  const handleAddToCart = () => {
    console.log("Item added to cart");
  };

  const handleBuyNow = () => {
  // Navigate to the Payment page and pass grandTotal as a prop
  navigate('/Payment', { state: { grandTotal, selectedCard } });
};

  // Calculate the grand total
  const grandTotal = selectedCard.price * selectedNetQuantity;

  // Event handler for net quantity selection
  const handleNetQuantityChange = (event) => {
    setSelectedNetQuantity(parseInt(event.target.value));
  };

  return (
    <div>
      {selectedCard ? (
        <div className="row">
          <div className="col-md-4">
            <Flex align="center" flexWrap="wrap" justifyContent="center">
              <Box
                flexShrink={0}
                borderWidth="2px"
                borderRadius="lg"
                w="300px"
                overflow="hidden"
                m={4}
                bg="white"
              >
                <Box borderRadius="lg" overflow="hidden" position="relative">
                  <Image
                    h="250px"
                    transform="scale(1.0)"
                    src={selectedCard.image}
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
                    color={isLiked ? "red" : "gray"}
                    onClick={handleToggleLike}
                    aria-label="Toggle Like"
                    size="md"
                    position="absolute"
                    top="10px"
                    right="10px"
                  />
                </Box>

                <Flex mt="10px" pb="20px" justifyContent={"space-between"} w="100%">
                  <Flex pl="20px">
                    <Text fontSize={"26px"} fontWeight={700} mt="1">
                      {selectedCard.price}
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
                  {selectedCard.Discription}
                </Text>
              </Box>
            </Flex>

            {/* Add to Cart and Buy Now buttons */}
            <Flex width="100%" justifyContent="center">
              <Button
                variant="outline"
                colorScheme="teal"
                onClick={handleAddToCart}
                mr="10px"
                width="25%"
              >
                Add to Cart
              </Button>
              <Button
                variant="solid"
                colorScheme="teal"
                onClick={handleBuyNow}
                width="25%"
              >
                Buy Now
              </Button>
            </Flex>
          </div>

          <div className="col-md-8 details">
            <div>
              <h2>Stylish Designer Women Shirts, Oversized Shirts</h2>
              <p style={{
                border: "1px solid black",
                padding: "4px 14px",
                display: "inline-block",
                borderRadius: "5px",
              }}>
                Free Delivery
              </p>
              <button style={{
                backgroundColor: "green",
                color: "white",
                padding: "5px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                transition: "background-color 0.3s ease",
              }}>
                3.9
              </button>
              <p>55367 Ratings, 10529 Reviews</p>

              <div>
                <label>Select Size</label>
                <select>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                  <option>XXXL</option>
                  <option>4XL</option>
                </select>
              </div>

              <div style={{
                border: "1px solid black",
                padding: "10px 20px",
                marginRight: "40px",
                display: "inline-block",
                borderRadius: "5px",
              }}>
                <h2>Product Details</h2>
                <p>Name: Stylish Designer Women Shirts, Oversized Shirts</p>
                <p>Fabric: Rayon</p>
                <p>Sleeve Length: Three-Quarter Sleeves</p>
                <p>Pattern: Embroidered</p>
                <div>
                  <label>Net Quantity</label>
                  <select onChange={handleNetQuantityChange} value={selectedNetQuantity}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              <p>Grand Total</p>
              <p className="total" style={{ fontSize: "50px" }}>{grandTotal}</p>

              <h3>Sizes</h3>
              <ul>
                <li>M (Bust Size: 38 in, Length Size: 30 in)</li>
                <li>XL (Bust Size: 42 in, Length Size: 30 in)</li>
                <li>XXL (Bust Size: 44 in, Length Size: 30 in)</li>
                <li>XXXL, 4XL</li>
              </ul>

              <p>
                A trendy design shirt with beautiful color for an elegant touch of fabric complete soft and comfortable wear wrap with amazing design. This shirt is perfect for your wardrobe addition. This shirt is made from high-quality rayon fabric with beautiful embroidery in the front and sleeve of a shirt. You can wear it for a party, festival season, or as casual. This is a perfect gift material. You can wear it with jeans or shorts which enhance the beauty and make you more confident and stylish.
              </p>

              <p>Country of Origin: India</p>

              <h4>More Information</h4>
              <div>
                <span>Sold By</span>
                <img src="/images/pic1.jpeg" alt="Shop Profile Icon" />
                <span>HAADI TEXTILE</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Card not found</p>
      )}
    </div>
  );
}

export default ProductDetails;
