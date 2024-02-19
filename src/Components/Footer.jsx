import {
    Box,
    Button,
    Collapse,
    Flex,
    IconButton,
    Image,
    Text,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { IoIosCall } from "react-icons/io";
  import { LuMessagesSquare } from "react-icons/lu";
  import { FaWhatsapp } from "react-icons/fa";
  import {
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlinePlus,
    AiOutlineMinus,
  } from "react-icons/ai";
  import { BiLogoFacebook } from "react-icons/bi";
  import { FaPinterestP, FaLinkedinIn } from "react-icons/fa";
  
  const Footer = () => {
    const [isExpanded1, setIsExpanded1] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    const [isExpanded3, setIsExpanded3] = useState(false);
    const [isExpanded4, setIsExpanded4] = useState(false);
    const [isExpanded5, setIsExpanded5] = useState(false);
  
    const handleToggle1 = () => {
      setIsExpanded1(!isExpanded1);
    };
  
    const handleToggle2 = () => {
      setIsExpanded2(!isExpanded2);
    };
    const handleToggle3 = () => {
      setIsExpanded3(!isExpanded3);
    };
    const handleToggle4 = () => {
      setIsExpanded4(!isExpanded4);
    };
    const handleToggle5 = () => {
      setIsExpanded5(!isExpanded5);
    };
    return (
      <Box>
        {/* section-1 */}
        <Box display={{ base: "none", lg: "flex" }}>
          <Box
            h={{ base: "auto", md: "auto", lg: "570px" }}
            bg={"#f6eff6"}
            w={"100%"}
          >
            <Flex
              mt={"30px"}
              justifyContent={"space-around"}
              pl={"150px"}
              pr={"150px"}
            >
              {/* Box-1 */}
              <Box lineHeight={"2"}>
                <Text fontSize={"14px"} color={"black"} mt={"40px"}>
                  Know Your Jewellery
                </Text>
                <Text fontSize={"12px"} color={"#877698"}>
                  JEWELLERY GUIDE
                </Text>
                <Text fontSize={"12px"} color={"#877698"}>
                  JEWELLERY GUIDE
                </Text>
                <Text fontSize={"12px"} color={"#877698"}>
                  GEMSTONES GUIDE
                </Text>
                <Text fontSize={"12px"} color={"#877698"}>
                  GOLD RATE
                </Text>
                <Text fontSize={"12px"} color={"#877698"}>
                  DIAMOND GUIDE
                </Text>
                <Text fontSize={"12px"} color={"#877698"}>
                  DIGITAL GOLD
                </Text>
              </Box>
              {/* Box-2 */}
  
              <Box lineHeight={"2"}>
                <Text fontSize={"14px"} color={"black"} mt={"40px"}>
                  CaratLane Advantage
                </Text>
                <Text fontSize={"12px"} color={"#877698"}>
                  15-DAY RETURNS
                </Text>
                <Text fontSize={"12px"} color={"#877698"}>
                  FREE SHIPPING
                </Text>
                <Text fontSize={"12px"} color={"#877698"}>
                  FINANCING OPTIONS
                </Text>
                <Text fontSize={"12px"} color={"#877698"}>
                  OLD GOLD EXCHANGE
                </Text>
              </Box>
              {/* Box-3 */}
              <Box lineHeight={"2"}>
                <Text fontSize={"14px"} color={"black"} mt={"40px"}>
                  Customer Service
                </Text>
                <Text fontSize={"12px"} color={"#877698"}>
                  RETURN POLICY
                </Text>
                <Text fontSize={"12px"} color={"#877698"}>
                  ORDER STATUS
                </Text>
              </Box>
  
              {/* Box-4 */}
              <Box lineHeight={"2"}>
                <Text fontSize={"14px"} color={"black"} mt={"40px"}>
                  About Us
                </Text>
                <Text fontSize={"12px"} color={"#877698"}>
                  OUR STORY
                </Text>
                <Text fontSize={"12px"} color={"#877698"}>
                  PRESS
                </Text>
                <Text fontSize={"12px"} color={"#877698"}>
                  BLOG
                </Text>
                <Text fontSize={"12px"} color={"#877698"}>
                  CAREERS
                </Text>
              </Box>
  
              {/* Box-5 */}
  
              <Box lineHeight={"2"}>
                <Text fontSize={"14px"} color={"black"} mt={"40px"}>
                  Contact Us
                </Text>
  
                <Flex gap={"18px"} mt={"15px"}>
                  <Text fontSize={"20px"} color={"#4f3267"}>
                    <IoIosCall />
                  </Text>
                  <Text fontSize={"20px"} color={"#4f3267"}>
                    <LuMessagesSquare />
                  </Text>
                  <Text fontSize={"20px"} color={"##4f3267"}>
                    <FaWhatsapp />
                  </Text>
                </Flex>
  
                <Box mt={"15px"} lineHeight={"2"}>
                  <Text fontSize={"15px"} color={"#877698"}>
                    24X7 Enquiry Support ( ALL Days )
                  </Text>
                  <Text fontSize={"13px"} color={"#877698"}>
                    General:
                    <Text
                      fontSize={"13px"}
                      textDecoration={"underline"}
                      color={"#d059e8"}
                      as={"span"}
                    >
                      contactus@caratlane.com
                    </Text>
                  </Text>
                  <Text fontSize={"13px"} color={"#877698"}>
                    Corporate:
                    <Text
                      fontSize={"13px"}
                      textDecoration={"underline"}
                      color={"#d059e8"}
                      as={"span"}
                    >
                      b2b@caratlane.com
                    </Text>
                  </Text>
                  <Text fontSize={"13px"} color={"#877698"}>
                    HR:
                    <Text
                      fontSize={"13px"}
                      textDecoration={"underline"}
                      color={"#d059e8"}
                      as={"span"}
                    >
                      careers@caratlane.com
                    </Text>
                  </Text>
                  <Text fontSize={"13px"} color={"#877698"}>
                    Grievance:
                    <Text
                      fontSize={"13px"}
                      textDecoration={"underline"}
                      color={"#d059e8"}
                      as={"span"}
                    >
                      Click here
                    </Text>
                  </Text>
                </Box>
  
                <Button
                  border={"1px solid rgb(136, 99, 251)"}
                  pt={"10px"}
                  pb={"10px"}
                  borderRadius={"12px"}
                  fontSize={"14px"}
                  mt={"30px"}
                  bgColor={"transparent"}
                  fontWeight={"700"}
                  color={"#4f3267"}
                >
                  FIND A STORE
                </Button>
              </Box>
            </Flex>
  
            <Flex justifyContent={"space-between"}>
              <Box>
                <Flex gap={"20px"} ml={"200px"}>
                  <Text
                    h={"35px"}
                    borderRadius={"5px"}
                    w={"35px"}
                    p={"7px"}
                    fontSize={"1.4rem"}
                    bgColor={"transparent"}
                    color={"#d059e8"}
                    border={"1px solid rgb(136, 99, 251)"}
                  >
                    <BiLogoFacebook />
                  </Text>
                  <Text
                    h={"35px"}
                    borderRadius={"5px"}
                    w={"35px"}
                    p={"7px"}
                    fontSize={"1.4rem"}
                    bgColor={"transparent"}
                    color={"#d059e8"}
                    border={"1px solid rgb(136, 99, 251)"}
                  >
                    <AiOutlineInstagram />
                  </Text>
                  <Text
                    h={"35px"}
                    borderRadius={"5px"}
                    w={"35px"}
                    p={"7px"}
                    fontSize={"1.4rem"}
                    bgColor={"transparent"}
                    color={"#d059e8"}
                    border={"1px solid rgb(136, 99, 251)"}
                  >
                    <FaPinterestP />
                  </Text>
                  <Text
                    h={"35px"}
                    borderRadius={"5px"}
                    w={"35px"}
                    p={"7px"}
                    fontSize={"1.4rem"}
                    bgColor={"transparent"}
                    color={"#d059e8"}
                    border={"1px solid rgb(136, 99, 251)"}
                  >
                    <AiOutlineTwitter />
                  </Text>
                  <Text
                    h={"35px"}
                    borderRadius={"5px"}
                    w={"35px"}
                    p={"7px"}
                    fontSize={"1.4rem"}
                    bgColor={"transparent"}
                    color={"#d059e8"}
                    border={"1px solid rgb(136, 99, 251)"}
                  >
                    <FaLinkedinIn />
                  </Text>
                </Flex>
  
                <Text
                  ml={"200px"}
                  mt={"20px"}
                  fontSize={"12px"}
                  color={"#877698"}
                >
                  Download CaratLane app
                </Text>
  
                <Flex
                  fontWeight={"600"}
                  pl={"25px"}
                  gap={"20px"}
                  bgColor={"#FDEDEC "}
                  ml={"200px"}
                  mt={"10px"}
                  w={"360px"}
                  h={"80px"}
                  borderRadius={"20px"}
                  border={"1px solid rgb(199, 181, 255) "}
                >
                  <Box
                    borderRadius={"5px"}
                    mt={"20px"}
                    h={"40px"}
                    w={"140px"}
                    border={"1px solid black"}
                  >
                    <Image
                      mt={"-17px"}
                      w="100%"
                      src="https://play.google.com/about/howplayworks/static/assets/social/share_google_play_logo.png"
                    />
                  </Box>
                  <Box
                    borderRadius={"5px"}
                    mt={"20px"}
                    h={"40px"}
                    w={"140px"}
                    border={"1px solid black"}
                  >
                    <Image
                      w="100%"
                      src="https://github.com/shwetra/assa/assets/104376252/f2556de8-5d1b-4bec-8757-15b6fdc938dd"
                    />
                  </Box>
                </Flex>
              </Box>
  
              <Box w={"500px"} mr={"60px"} mt={"50px"}>
                <Image src="https://github-production-user-asset-6210df.s3.amazonaws.com/104376252/250270295-e2d9adb0-f79b-4d7a-a51f-c781fbe862a4.png" />
              </Box>
            </Flex>
          </Box>
        </Box>
  
        {/* For small and medium screen */}
        {/* section-1 */}
        <Box
          h={"580px"}
          bg="#f6eff6"
          w={"100%"}
          display={{ base: "flex", md: "flex", lg: "none" }}
        >
          <Box
            pl={{ base: "20px", md: "50px" }}
            w={{ base: "370px", md: "700px" }}
            py={4}
          >
            {/* Box-1 */}
            <Box>
              <Flex justifyContent={"space-between"}>
                <Text mb={4} mt={2}>
                  know Your Jewellery
                </Text>
  
                <Text>
                  <IconButton
                    ml={2}
                    background={"transparent"}
                    color={"black"}
                    icon={isExpanded1 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    aria-label={isExpanded1 ? "Collapse" : "Expand"}
                    onClick={handleToggle1}
                  />
                </Text>
              </Flex>
              <Collapse in={isExpanded1} animateOpacity>
                <Box mt={2} lineHeight={"2.5"}>
                  <Text fontSize={"12px"} color={"#877698"}>
                    DIAMOND GUIDE
                  </Text>
                  <Text fontSize={"12px"} color={"#877698"}>
                    JEWELLERY GUIDE
                  </Text>
                  <Text fontSize={"12px"} color={"#877698"}>
                    GEMSTONES GUIDE
                  </Text>
                  <Text fontSize={"12px"} color={"#877698"}>
                    GOLD RATE
                  </Text>
                  <Text fontSize={"12px"} color={"#877698"}>
                    DIAMOND GUIDE
                  </Text>
                  <Text fontSize={"12px"} color={"#877698"}>
                    DIGITAL GOLD
                  </Text>
                </Box>
              </Collapse>
            </Box>
  
            {/* Box-2*/}
            <Box>
              <Flex justifyContent={"space-between"}>
                <Text mb={4} mt={2}>
                  CaratLane Advantage
                </Text>
  
                <Text>
                  <IconButton
                    background={"transparent"}
                    color={"black"}
                    ml={2}
                    size="sm"
                    icon={isExpanded2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    aria-label={isExpanded2 ? "Collapse" : "Expand"}
                    onClick={handleToggle2}
                  />
                </Text>
              </Flex>
              <Collapse in={isExpanded2} animateOpacity>
                <Box mt={2} lineHeight={"2.5"}>
                  <Text fontSize={"12px"} color={"#877698"}>
                    15-DAY RETURNS
                  </Text>
                  <Text fontSize={"12px"} color={"#877698"}>
                    FREE SHIPPING
                  </Text>
                  <Text fontSize={"12px"} color={"#877698"}>
                    FINANCING OPTIONS
                  </Text>
                  <Text fontSize={"12px"} color={"#877698"}>
                    OLD GOLD EXCHANGE
                  </Text>
                </Box>
              </Collapse>
            </Box>
  
            {/* Box-3 */}
            <Box>
              <Flex justifyContent={"space-between"}>
                <Text mb={4} mt={2}>
                  Customer Service
                </Text>
  
                <Text>
                  <IconButton
                    background={"transparent"}
                    color={"black"}
                    ml={2}
                    size="sm"
                    icon={isExpanded3 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    aria-label={isExpanded3 ? "Collapse" : "Expand"}
                    onClick={handleToggle3}
                  />
                </Text>
              </Flex>
              <Collapse in={isExpanded3} animateOpacity>
                <Box mt={2} lineHeight={"2.5"}>
                  <Text fontSize={"12px"} color={"#877698"}>
                    RETURN POLICY
                  </Text>
                  <Text fontSize={"12px"} color={"#877698"}>
                    ORDER STATUS
                  </Text>
                </Box>
              </Collapse>
            </Box>
  
            {/* Box-4 */}
            <Box>
              <Flex justifyContent={"space-between"}>
                <Text mb={4} mt={2}>
                  About Us
                </Text>
  
                <Text>
                  <IconButton
                    background={"transparent"}
                    color={"black"}
                    ml={2}
                    size="sm"
                    icon={isExpanded4 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    aria-label={isExpanded4 ? "Collapse" : "Expand"}
                    onClick={handleToggle4}
                  />
                </Text>
              </Flex>
              <Collapse in={isExpanded4} animateOpacity>
                <Box mt={2} lineHeight={"2.5"}>
                  <Text fontSize={"12px"} color={"#877698"}>
                    OUR STORY
                  </Text>
                  <Text fontSize={"12px"} color={"#877698"}>
                    PRESS
                  </Text>
                  <Text fontSize={"12px"} color={"#877698"}>
                    BLOG
                  </Text>
                  <Text fontSize={"12px"} color={"#877698"}>
                    CAREERS
                  </Text>
                </Box>
              </Collapse>
            </Box>
  
            {/* Box-5 */}
            <Box>
              <Flex justifyContent={"space-between"}>
                <Text mb={4} mt={2}>
                  Contact Us
                </Text>
                <Text>
                  <IconButton
                    background={"transparent"}
                    color={"black"}
                    ml={2}
                    size="sm"
                    icon={isExpanded5 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    aria-label={isExpanded5 ? "Collapse" : "Expand"}
                    onClick={handleToggle5}
                  />
                </Text>
              </Flex>
              <Collapse in={isExpanded5} animateOpacity>
                <Box mt={2} lineHeight={"2.5"}>
                  <Flex gap={"18px"} mt={"15px"}>
                    <Text fontSize={"20px"} color={"#4f3267"}>
                      <IoIosCall />
                    </Text>
                    <Text fontSize={"20px"} color={"#4f3267"}>
                      <LuMessagesSquare />
                    </Text>
                    <Text fontSize={"20px"} color={"##4f3267"}>
                      <FaWhatsapp />
                    </Text>
                  </Flex>
  
                  <Box mt={"15px"} lineHeight={"2"}>
                    <Text fontSize={"15px"} color={"#877698"}>
                      24X7 Enquiry Support ( ALL Days )
                    </Text>
                    <Text fontSize={"13px"} color={"#877698"}>
                      General:
                      <Text
                        fontSize={"13px"}
                        textDecoration={"underline"}
                        color={"#d059e8"}
                        as={"span"}
                      >
                        contactus@caratlane.com
                      </Text>
                    </Text>
                    <Text fontSize={"13px"} color={"#877698"}>
                      Corporate:
                      <Text
                        fontSize={"13px"}
                        textDecoration={"underline"}
                        color={"#d059e8"}
                        as={"span"}
                      >
                        b2b@caratlane.com
                      </Text>
                    </Text>
                    <Text fontSize={"13px"} color={"#877698"}>
                      HR:
                      <Text
                        fontSize={"13px"}
                        textDecoration={"underline"}
                        color={"#d059e8"}
                        as={"span"}
                      >
                        careers@caratlane.com
                      </Text>
                    </Text>
                    <Text fontSize={"13px"} color={"#877698"}>
                      Grievance:
                      <Text
                        fontSize={"13px"}
                        textDecoration={"underline"}
                        color={"#d059e8"}
                        as={"span"}
                      >
                        Click here
                      </Text>
                    </Text>
                  </Box>
                </Box>
              </Collapse>
            </Box>
  
            {/* section-2 */}
            <Button
              border={"1px solid rgb(136, 99, 251)"}
              ml={{ base: "110px", md: "280px" }}
              pt={"10px"}
              pb={"10px"}
              borderRadius={"12px"}
              fontSize={"14px"}
              mt={"30px"}
              bgColor={"transparent"}
              fontWeight={"700"}
              color={"#4f3267"}
            >
              FIND A STORE
            </Button>
            <Flex justifyContent={"space-between"}>
              <Box>
                <Flex gap={"20px"} mt={"20px"} ml={{ base: "40px", md: "200px" }}>
                  <Text
                    h={"35px"}
                    borderRadius={"5px"}
                    w={"35px"}
                    p={"7px"}
                    fontSize={"1.4rem"}
                    bgColor={"transparent"}
                    color={"#d059e8"}
                    border={"1px solid rgb(136, 99, 251)"}
                  >
                    <BiLogoFacebook />
                  </Text>
                  <Text
                    h={"35px"}
                    borderRadius={"5px"}
                    w={"35px"}
                    p={"7px"}
                    fontSize={"1.4rem"}
                    bgColor={"transparent"}
                    color={"#d059e8"}
                    border={"1px solid rgb(136, 99, 251)"}
                  >
                    <AiOutlineInstagram />
                  </Text>
                  <Text
                    h={"35px"}
                    borderRadius={"5px"}
                    w={"35px"}
                    p={"7px"}
                    fontSize={"1.4rem"}
                    bgColor={"transparent"}
                    color={"#d059e8"}
                    border={"1px solid rgb(136, 99, 251)"}
                  >
                    <FaPinterestP />
                  </Text>
                  <Text
                    h={"35px"}
                    borderRadius={"5px"}
                    w={"35px"}
                    p={"7px"}
                    fontSize={"1.4rem"}
                    bgColor={"transparent"}
                    color={"#d059e8"}
                    border={"1px solid rgb(136, 99, 251)"}
                  >
                    <AiOutlineTwitter />
                  </Text>
                  <Text
                    h={"35px"}
                    borderRadius={"5px"}
                    w={"35px"}
                    p={"7px"}
                    fontSize={"1.4rem"}
                    bgColor={"transparent"}
                    color={"#d059e8"}
                    border={"1px solid rgb(136, 99, 251)"}
                  >
                    <FaLinkedinIn />
                  </Text>
                </Flex>
  
                <Text
                  ml={{ base: "100px", md: "270px" }}
                  mt={{ base: "20px", md: "40px" }}
                  fontSize={"12px"}
                  color={"#877698"}
                >
                  Download CaratLane app
                </Text>
  
                <Flex
                  fontWeight={"600"}
                  pl={"5px"}
                  gap={"20px"}
                  bgColor={"#FDEDEC "}
                  ml={{ base: "10px", md: "170px" }}
                  mt={"10px"}
                  mr="10px"
                  w={{ base:"90%",lg:"350px"}}
                  h={"80px"}
                  borderRadius={"20px"}
                  border={"1px solid rgb(199, 181, 255) "}
                >
                  <Box
                    borderRadius={"5px"}
                    mt={"20px"}
                    h={"40px"}
                    w={"140px"}
                    border={"1px solid black"}
                  >
                    <Image
                      mt={"-17px"}
                      w="100%"
                      src="https://play.google.com/about/howplayworks/static/assets/social/share_google_play_logo.png"
                    />
                  </Box>
                  <Box
                    borderRadius={"5px"}
                    mt={"20px"}
                    h={"40px"}
                    w={"140px"}
                    border={"1px solid black"}
                  >
                    <Image
                      w="100%"
                      src="https://github.com/shwetra/assa/assets/104376252/f2556de8-5d1b-4bec-8757-15b6fdc938dd"
                    />
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
  
        {/* section-2 */}
        <Box h={"auto"} mb={'80px'} >
          <Box mt={"50px"} ml={{base:'5px',md:'10px',lg:"180px"}} w={{base:'95%',md:'90%',lg:'80%'}}>
            {/* <Text color={"black"} fontSize={"16px"}>
              Popular Searches
            </Text> */}
            {/* Box-1 */}
            <Box >
              {/* <Text
                color={"#8863fb"}
                fontSize={"16px"}
                fontWeight={"600"}
                mt={"20px"}
              >
                Gold Rate in Major Cities
              </Text> */}
              {/* <Text fontSize={'12px'} color={'rgb(35, 21, 53)'}>
                Gold Rate Today In Chennai | Gold Rate Today In Hyderabad | Gold
                Rate Today In Bengalore | Gold Rate Today In Mumbai | Gold Rate
                Today In Delhi | Gold Rate Today In Kerala | Gold Rate Today In
                Pune | Gold Rate Today In Vijayawada | Gold Rate Today In Kolkata
                | Gold Rate Today In Ahmedabad
              </Text> */}
              <Box h={"1px"} mt={"15px"} bgColor={"#f3f3f3"} w={"100%"}></Box>
            </Box>
            {/* Box-2 */}
            <Box>
              {/* <Text
                color={"rgb(136, 99, 251)"}
                fontSize={"16px"}
                fontWeight={"600"}
                mt={"20px"}
              >
                For Women
              </Text> */}
              {/* <Text fontSize={'12px'} color={'rgb(35, 21, 53)'}>
                Rings For Women Earrings For Women | Bracelet For Women | Bangles
                For Women | Pendants For Women | Necklaces For Women
              </Text> */}
              <Box h={"1px"} mt={"15px"} bgColor={"#f3f3f3"} w={"100%"}></Box>
            </Box>
            {/* Box-3 */}
            <Box>
              <Text
                color={"rgb(136, 99, 251)"}
                fontSize={"16px"}
                fontWeight={"600"}
                mt={"20px"}
              >
                Earrings
              </Text>
              <Text fontSize={'12px'} color={'rgb(35, 21, 53)'}>
                Rings For Men | Earrings For Men | Bracelet For Men | Men's Kada.
              </Text>
              <Box h={"1px"} mt={"15px"} bgColor={"#f3f3f3"} w={"100%"}></Box>
            </Box>
            {/* Box-4 */}
            <Box>
              <Text
                color={"rgb(136, 99, 251)"}
                fontSize={"16px"}
                fontWeight={"600"}
                mt={"20px"}
              >
                Bracelets
              </Text>
              <Text fontSize={'12px'} color={'rgb(35, 21, 53)'}>
                Gold Mangalsutra | Diamond Mangalsutra | Modern Mangalsutra |
                South Indian Mangalsutra | Fancy Mangalsutra | Black Beads
                Mangalsutra | Gold Mangalsutra Under 20000 | Traditional
                Mangalsutra | Light Weight Mangalsutra | Daily Use Mangalsutra |
                Infinity Mangalsutra
              </Text>
              <Box h={"1px"} mt={"15px"} bgColor={"#f3f3f3"} w={"100%"}></Box>
            </Box>
            {/* Box-5*/}
            <Box>
              <Text
                color={"rgb(136, 99, 251)"}
                fontSize={"16px"}
                fontWeight={"600"}
                mt={"20px"}
              >
                Pendants
              </Text>
              <Text fontSize={'12px'} color={'rgb(35, 21, 53)'}>
                Gold Pendants Diamond Pendants | Solitaire Pendants | Evil Eye
                Pendants | Chain Pendants | Om Pendants | Butterfly Pendants |
                Heart Pendants
              </Text>
              <Box h={"1px"} mt={"15px"} bgColor={"#f3f3f3"} w={"100%"}></Box>
            </Box>
  
            {/* Box-6*/}
            <Box>
              <Text
                color={"rgb(136, 99, 251)"}
                fontSize={"16px"}
                fontWeight={"600"}
                mt={"20px"}
              >
                Rings
              </Text>
              <Text fontSize={'12px'} color={'rgb(35, 21, 53)'}>
                Nose Rings | Gold Nose Pins | Diamond Nose Pins | Nose Studs |
                Pressing Nose Rings | Stone Nose Rings
              </Text>
              <Box h={"1px"} mt={"15px"} bgColor={"#f3f3f3"} w={"100%"}></Box>
            </Box>
  
            {/* Box-7*/}
            <Box>
              <Text
                color={"rgb(136, 99, 251)"}
                fontSize={"16px"}
                fontWeight={"600"}
                mt={"20px"}
              >
                Necklaces
              </Text>
              <Text fontSize={'12px'} color={'rgb(35, 21, 53)'}>
                Gold Bangles | Diamond Bangles | Kids Bangles | Daily Wear Bangles
                | Bridal Bangles | Stone Bangles | Baby Bangles | Traditional
                Bangles
              </Text>
              <Box h={"1px"} mt={"15px"} bgColor={"#f3f3f3"} w={"100%"}></Box>
            </Box>
  
            {/* Box-8*/}
            <Box>
              <Text
                color={"rgb(136, 99, 251)"}
                fontSize={"16px"}
                fontWeight={"600"}
                mt={"20px"}
              >
                Brass
              </Text>
              <Text fontSize={'12px'} color={'rgb(35, 21, 53)'}>
                Gold Bracelets | Diamond Bracelets | Kids Bracelets | Pearl
                Bracelets | Evil Eye Bracelets | Tennis Bracelets | Chain
                Bracelets | Name Bracelets | Stone Bracelets | Cuff Bracelets
              </Text>
              <Box h={"1px"} mt={"15px"} bgColor={"#f3f3f3"} w={"100%"}></Box>
            </Box>
  
            {/* Box-9*/}
            <Box>
              <Text
                color={"rgb(136, 99, 251)"}
                fontSize={"16px"}
                fontWeight={"600"}
                mt={"20px"}
              >
                Gifts
              </Text>
              <Text fontSize={'12px'} color={'rgb(35, 21, 53)'}>
                Gold Necklace | Diamond Necklace | Kids Necklace | Gemstone
                Necklace | Ruby Necklace | Choker Necklace | Pearl Necklace | Evil
                Eye Necklace | Necklaces For Women | Long Necklace | Name Necklace
                | Stone Necklace | Butterfly Necklace | Bridal Necklace | Fancy
                Necklace | Emerald Necklace
              </Text>
              <Box h={"1px"} mt={"15px"} bgColor={"#f3f3f3"} w={"100%"}></Box>
            </Box>
  
            {/* Box-10*/}
            <Box>
              <Text
                color={"rgb(136, 99, 251)"}
                fontSize={"16px"}
                fontWeight={"600"}
                mt={"20px"}
              >
                Rings
              </Text>
              <Text fontSize={'12px'} color={'rgb(35, 21, 53)'}>
                Diamond Rings | Gold Rings | Platinum Rings | Solitaire Rings |
                Gemstone Rings | Mens Rings | Engagement Ring | Couple Ring |
                Wedding Ring | Vanki Ring | Ruby Ring | Emerald Ring | Name Ring |
                Cocktail Ring | Love Ring | Butterfly Ring | Infinity Rings |
                Pearl Rings | Promise Rings | 3 Gram Gold Rings | 2 Gram Gold
                Rings | 1 Gram Gold Rings
              </Text>
              <Box h={"1px"} mt={"15px"} bgColor={"#f3f3f3"} w={"100%"}></Box>
            </Box>
            {/* Box-11*/}
            <Box>
              <Text
                color={"rgb(136, 99, 251)"}
                fontSize={"16px"}
                fontWeight={"600"}
                mt={"20px"}
              >
                Earrings
              </Text>
              <Text fontSize={'12px'} color={'rgb(35, 21, 53)'}>
                Gold Earrings | Diamond Earrings | Solitaire Earrings | Platinum
                Earrings | Kids Earrings | Jhumka Earrings | Hoop Earrings | Stud
                Earrings | Pearl Earrings | Sui Dhaga Earrings | Chandbali
                Earrings | Earcuff Earrings | Fancy Earrings | Stone Earrings |
                Daily Wear Earrings | Round Earrings
              </Text>
              <Box h={"1px"} mt={"15px"} bgColor={"#f3f3f3"} w={"100%"}></Box>
            </Box>
            {/* Box-13*/}
            <Box>
              <Text
                color={"rgb(136, 99, 251)"}
                fontSize={"16px"}
                fontWeight={"600"}
                mt={"20px"}
              >
                Brass
              </Text>
              <Text fontSize={'12px'} color={'rgb(35, 21, 53)'}>
                Gold | Diamond | Solitaire | Gemstone | 22kt Jewellery | Platinum
                | Charms | Watch Charms | Chains | Silver Jewellery | Rose Gold
                Jewellery | White Gold Jewellery
              </Text>
              <Box h={"1px"} mt={"15px"} bgColor={"#f3f3f3"} w={"100%"}></Box>
            </Box>
            {/* Box-14*/}
            <Box>
              <Text
                color={"rgb(136, 99, 251)"}
                fontSize={"13px"}
                fontWeight={"600"}
                mt={"40px"}
                ml={{base:'60px',md:'240px',lg:'0px'}}
              >
                COPYRIGHT CARATLANE © 2023
              </Text>
              <Text mt={'5px'} fontSize={'13px'} ml={{base:'10px',lg:'0px'}}>
                SITE MAP | PRIVACY | POLICYTERMS & CONDITIONS | CORPORATE |
                XCLUSIVE | FREQUENTLY ASKED QUESTION
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Footer;
  