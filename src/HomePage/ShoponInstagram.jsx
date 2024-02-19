import {
    Box,
    Button,
    Flex,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Radio,
    RadioGroup,
    SimpleGrid,
    Stack,
    Text,
  } from "@chakra-ui/react";
  
  import { GoTriangleUp } from "react-icons/go";
  import { Link } from "react-router-dom";
  
  const Instagram = () => {
    const urls = [
      {
        url: "https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/2.jpg",
      },
      {
        url: "https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/3.jpg",
      },
      {
        url: "https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/4.jpg",
      },
      {
        url: "https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/5.jpg",
      },
      {
        url: "https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/6.jpg",
      },
      {
        url: "https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/7.jpg",
      },
    ];
  
    return (
      <Box>
        <Box ml={"30px"} mt={"36px"} w={"255px"} pb={"24px"}>
  
          <Link to="/gold">
          <Text color={"#33363e"} fontSize={"24px"} fontWeight={"400"}>
            Shop our Instagram
          </Text>
          </Link>
          
        </Box>
  
        <Flex
          justifyContent={"center"}
          direction={{ base: "column", md: "column", lg: "row" }}
          w={"97%"}
          m={"auto"}
        >
          <Box
            w={{ base: "100%", md: "100%", lg: "45%" }}
            pl={{ base: "0px", lg: "24px" }}
          >
            <Box cursor={"pointer"} overflow={"hidden"}>
              <Image
                alt="image"
                objectFit="contain"
                transition="0.2s ease-in-out"
                _hover={{
                  transform: "scale(1.2)",
                }}
                //   h={{ base: "360px", md: "768px", lg: "580px" }}
                transform="scale(1.0)"
                src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/1.jpg"
              />
            </Box>
          </Box>
          <SimpleGrid columns={[2, 2, 3]} w={{ lg: "65%" }} spacing={0}>
            {urls.map((item) => {
              return (
                <Box>
                  <Box cursor={"pointer"} overflow={"hidden"}>
                    <Image
                      objectFit="contain"
                      width="100%"
                      transition="0.2s ease-in-out"
                      _hover={{
                        transform: "scale(1.2)",
                      }}
                      //   h={{ base: "180px", md: "384px", lg: "293.94px" }}
                      h={"100%"}
                      src={item.url}
                    />
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>
        </Flex>
  
        {/* Section-2 */}
  
        <Box bgColor={"rgb(35, 21, 53)"} mt={"24px"}>
          <Box w={"100%"} h={"370px"}>
            <Box h={"36px"} w={"100%"} align={"center"}>
              <Image
                mt={"50px"}
                h={"125px"}
                w={"182px"}
                src="https://github.com/shwetra/assa/assets/104376252/d789b1c1-ccf2-4cd5-a510-894a18bbe2bb"
              />
              <Text
                textAlign={"center"}
                color={"rgb(246, 239, 246)"}
                marginBottom={"30px"}
                fontSize={"24px"}
                w={{ base: "90%" }}
              >
                Sign up to be a CaratLane Insider
              </Text>
              <InputGroup w={{ base: "80%", md: "80%", lg: "400px" }}>
                <Input
                  h={"40px"}
                  type="text"
                  name="text"
                  border={"1px solid rgb(222, 87, 229)"}
                />
  
                <InputRightElement w={"auto"}>
                  <Button
                    pl={"25px"}
                    pr={"25px"}
                    background="linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))"
                  >
                    SUBMIT
                  </Button>
                </InputRightElement>
                <Text></Text>
              </InputGroup>
  
              <Flex justifyContent={"center"} mt={"30px"} color={"white"}>
                <RadioGroup>
                  <Stack direction="row" gap={"40px"}>
                    <Radio
                      border={"1px solid #8863fb"}
                      colorScheme="purple"
                      value="1"
                    >
                      Female
                    </Radio>
                    <Radio
                      border={"1px solid #8863fb"}
                      colorScheme="purple"
                      value="2"
                    >
                      Male
                    </Radio>
                    <Radio
                      border={"1px solid #8863fb"}
                      colorScheme="purple"
                      value="3"
                    >
                      Other
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
  
              <Flex justifyContent={"center"} mt={"30px"}>
                <Text color={"rgb(222, 87, 229)"}>Know more</Text>
                <Text color={"white"} ml={"5px"}>
                  about CaratLane
                </Text>
              </Flex>
  
              <Text fontSize={"45px"} mt={"2px"} color={"white"}>
                <GoTriangleUp />
              </Text>
            </Box>
          </Box>
        </Box>
  
        {/* section-3 */}
        <Box
          mt={"50px"}
          w={"100%"}
          pl={{ base: "20px", lg: "30px" }}
          pr={{ base: "20px", lg: "40px" }}
          mb={"20px"}
        >
          <Flex
            gap={{ base: "15px", md: "15px", lg: "35px" }}
            direction={{ base: "column", lg: "row" }}
          >
            {/* First box */}
            <Box
              w={{ base: "100%", lg: "650px" }}
              h={{ base: "auto", md: "auto", lg: "400px" }}
            >
              <Text color={"black"} fontWeight={"600"} fontSize={"18px"}>
                Online Jewellery Store
              </Text>
              <Text
                mt={{ base: "5px", lg: "30px" }}
                fontSize={"11px"}
                lineHeight={2}
              >
                CaratLane.com began in 2008 with the simple motto of democratising
                jewellery. And today, after 13 glorious years, it has come to be
                recognised as one of the top 20 e-commerce portals in India.
                Steadily growing from strength to strength since inception,
                CaratLane has also established 165 stores across the length and
                breadth of India.
              </Text>
              <Text
                mt={{ base: "10px", lg: "20px" }}
                fontSize={"11px"}
                lineHeight={2}
              >
                Since July 2016, we joined forces with India’s most desired and
                largest jewellery brand, Tanishq, through a strategic investment
                made by Titan Company in CaratLane. This takes us another step
                closer to achieving our shared mission - to make beautiful
                jewellery accessible to everyone.
              </Text>
            </Box>
  
            {/* second box */}
            <Box
              w={{ base: "100%", lg: "650px" }}
              h={{ base: "auto", md: "auto", lg: "400px" }}
            >
              <Text color={"black"} fontWeight={"600"} fontSize={"18px"}>
                Shopping at CaratLane
              </Text>
  
              <Text
                mt={{ base: "5px", lg: "30px" }}
                fontSize={"11px"}
                lineHeight={2}
              >
                Placing security first, CaratLane ensures that every transaction
                made on the site is safe and smooth for the customers. To attain
                this, the company follows stern policies of transparency through
                the whole customer buying journey.
              </Text>
  
              <Text
                mt={{ base: "10px", lg: "20px" }}
                fontSize={"11px"}
                lineHeight={2}
              >
                For further convenience, all CaratLane products come backed with
                certification from international laboratories, and a blanket
                15-day-return policy, no questions asked.
              </Text>
  
              <Text
                mt={{ base: "10px", lg: "20px" }}
                fontSize={"11px"}
                lineHeight={2}
              >
                CaratLane provides the exquisite craftsmanship of beautiful
                jewellery designs such as rings, earrings, pendants, necklace,
                chains, bangles, bracelets, mangalsutra, nose pins. Apart from
                jewellery, CaratLane offers 22k (916) and 24k (995) gold coins
                with certification and the guarantee of a BIS Hallmarked stamp.
              </Text>
            </Box>
  
            {/* Third box */}
            <Box
              w={{ base: "100%", lg: "650px" }}
              h={{ base: "auto", md: "auto", lg: "400px" }}
            >
              <Text color={"black"} fontWeight={"600"} fontSize={"18px"}>
                CaratLane’s Vision
              </Text>
  
              <Text
                mt={{ base: "10px", md: "12px", lg: "20px" }}
                fontSize={"11px"}
                lineHeight={2}
              >
                CaratLane works with the vision of offering tastefully designed
                jewellery at revolutionary prices. This is achieved by eliminating
                all inefficiencies which result in drastically reduced costs. With
                CaratLane, users stand to save as much as 30% when compared to
                prices in the market.
              </Text>
  
              <Text
                mt={{ base: "10px", md: "12px", lg: "20px" }}
                fontSize={"10px"}
                lineHeight={2}
              >
                Our app is designed to bridge the vast gap between the virtual and
                the physical world. This has been attained with the help of the
                Virtual Try-on feature that permits the users to virtually put on
                1000s of earrings to see just how they look when placed on the
                ears.
              </Text>
  
              <Text
                mt={{ base: "10px", md: "12px", lg: "20px" }}
                fontSize={"10px"}
                lineHeight={2}
              >
                With over 100 thousand downloads, the CaratLane app has emerged to
                be one of the most liked applications in the jewellery circuit.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    );
  };
  
  export default Instagram;
  