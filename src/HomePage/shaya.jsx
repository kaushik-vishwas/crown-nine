import { Box, Button, Flex, Heading, Image, Img, Input, InputGroup, InputLeftElement, SimpleGrid, Video } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { RiArrowDownSLine } from 'react-icons/ri';



export const Shaya = () => {
  return (
    <Box>
      <Flex
        w="97%"
        m="auto"
        mt="20px"
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        gap={"20px"}
      >
        <Box w={{ base: "100%", md: "100%", lg: "47.5%" }}>
          <Image
            objectFit="cover"
            w="100%"
            src="https://github-production-user-asset-6210df.s3.amazonaws.com/104376252/250104081-d7367eb7-40d6-4952-866f-7294f12c0234.jpg"
            alt=""
          />
        </Box>
        <Box w={{ base: "100%", md: "100%", lg: "50%" }}>
          <Image
            w="100%"
            src="https://github-production-user-asset-6210df.s3.amazonaws.com/104376252/250104125-d8c8b4af-a941-4389-a205-f72a6b78ec31.jpg"
            alt=""
          />
          <Image
            w="100%"
            src="https://github-production-user-asset-6210df.s3.amazonaws.com/104376252/250104201-c3d189a0-bf31-4b6b-afc3-155ae6f55d3d.jpg"
            alt=""
          />
        </Box>
      </Flex>

      {/* video section  */}
      <Box
        as="video"
        width="97%"
        m="auto"
        mt="20px"
        _hover={{ all: "none" }}
        borderRadius={"20px"}
        mb="30px"
        objectFit={"inherit"}
        height={{ base: "35vh", md: "750px", lg: "600px" }}
        autoPlay
        loop
        muted
        onEnded={(e) => {
          e.target.currentTime = 0; // Reset video playback
          e.target.play(); // Start playing again
        }}
      >
        <source src="https://github.com/shwetra/assa/assets/104376252/04a03cbc-9612-4768-bc33-c31efd5e9296" />
      </Box>


        {/* video bottem all 6 cards  */}
      <Box>
        <SimpleGrid columns={[2, 3, 3]} gap={5} w="90%" m="auto" mt="70px">
          <Img
            h="100px"
            w={{ base: "100%", lg: "95%" }}
            borderRadius={20}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/5a35bf4f-7397-4515-aa4d-03fedfcee8ad"
            alt=""
          />
          <Img
            h="100px"
            w={{ base: "100%", lg: "95%" }}
            borderRadius={20}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/445a0b90-7ba0-4d13-8bd8-3c55797d190e"
            alt=""
          />
          <Img
            h="100px"
            w={{ base: "100%", lg: "95%" }}
            borderRadius={20}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/46ebc410-80f2-447f-9292-4ff9020f5007"
            alt=""
          />
          <Img
            h="100px"
            w={{ base: "100%", lg: "95%" }}
            borderRadius={20}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/86390d70-fd4a-4cf3-a477-145537eb5ffd"
            alt=""
          />
          <Img
            h="100px"
            w={{ base: "100%", lg: "95%" }}
            borderRadius={20}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/85e94ccb-2698-45fe-ad9e-c831a4e362bd"
            alt=""
          />
          <Img
            h="100px"
            w={{ base: "100%", lg: "95%" }}
            borderRadius={20}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/c5d9a8fb-a401-452d-a4d6-0e8207d7276b"
            alt=""
          />
        </SimpleGrid>
      </Box>




  {/* all three images scroller------------------- */}

     <Box h={{base:"300px",lg:"570px"}} >
      <Box  w="100%" h="500px" css={{
      /* Hide the scrollbar */
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
      'scrollbar-width': 'none', /* Firefox */
    }}
    overflow="scroll" mt="60px" mb="100px" >
        <Flex  m="auto" w={{base:"800px",lg:"1420px"}} h={{base:"250px",lg:"400px"}} gap={10} >
          <Box overflow={"hidden"} w={{base:"30%"}} m="auto">
          <Img
            objectFit={"cover"}
            _hover={{
              transform: "scale(1.2)",
            }}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/a9659d0c-6dac-4e8e-89cf-4d4dd78075ec"
            alt=""
          />
          </Box>
          <Box overflow={"hidden"} w={{base:"30%"}} m="auto" >
            <Img
            
            objectFit={"cover"}
              _hover={{
                transform: "scale(1.2)",
              }}
              cursor={"pointer"}
              src="https://github.com/shwetra/assa/assets/104376252/4fe31ba3-34a9-4b4f-8508-fa27950e44c8"
              alt=""
            />
          </Box>
          
         
          <Box overflow={"hidden"} w={{base:"30%"}} m="auto">
          <Img
          objectFit={"cover"}
           _hover={{
            transform: "scale(1.2)",
          }}
           
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/b7fbe3e2-ac17-4cd8-ba04-87a06622f59d"
            alt=""
          />
          </Box>
        </Flex> 
        
      </Box>
      <Box display={"flex"} justifyContent={"center"} mt={{base:"-400px",lg:"-200px"}}>
        <Button border={"2px solid purple"} fontWeight={350}  bg="transparent" _hover={{bg:"transparents"}} mt="60px">View All Collections</Button></Box> 
      </Box>
  {/* all three images scroller end */}



{/* four cards  */}
<Flex
        w="97%"
        m="auto"
        mt="20px"
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        gap={"20px"}
      >
        <Box w={{ base: "100%", md: "100%", lg: "50%" }}>
          <Image
           mb="20px"
            w="100%"
            src="https://github.com/shwetra/assa/assets/104376252/6f80a61a-41d6-444c-8ee9-b02633632f13"
            alt=""
          />
          <Image
            w="100%"
            src="https://github.com/shwetra/assa/assets/104376252/4fb8d67e-7cb2-4a6b-8dc6-8cc8c7acc6f6"
            alt=""
          />
        </Box>
        <Box w={{ base: "100%", md: "100%", lg: "50%" }} >
          <Image
          mb="20px"
            w="100%"
            src="https://github.com/shwetra/assa/assets/104376252/e5cb163a-6cae-40fb-ad58-32ac1723e4b1"
            alt=""
          />
          <Image
            w="100%"
            src="https://github.com/shwetra/assa/assets/104376252/85f0821a-a447-4fed-8c58-e853b4cb11d3"
          />
        </Box>
      </Flex>



{/* second section video */}
      <Box
        as="video"
        width="97%"
        m="auto"
        mt="60px"
        mb="50px"
        _hover={{ all: "none" }}
        borderRadius={"20px"}
        objectFit={{base:"cover",lg:"inherit"}}
        height={{ base: "450px", md: "750px", lg: "600px" }}
        autoPlay
        loop
        muted
        onEnded={(e) => {
          e.target.currentTime = 0; // Reset video playback
          e.target.play(); // Start playing again
        }}
      >
        <source src="https://github.com/shwetra/assa/assets/104376252/25167d71-d6c8-4f2e-81f0-928f305d4d17" />
      </Box>


{/* secoend video bottem card  */}
<Flex direction={{base:"column",md:"row",lg:"row"}} w="95%" m="auto" mb="60px">
  <Flex w={{base:"100%",lg:"50%"}} direction={{base:"column",md:"column",lg:"row"}}>
<Box  w={{base:"100%",md:"100%",lg:"65%"}} >
  <Image  src="https://github.com/shwetra/assa/assets/104376252/cbe82d6e-da0e-46d7-b962-936bbdb475d5" alt="" />
</Box>



{/* button apointment box  */}  


<Box  w={{base:"100%",lg:"35%"}} h="auto" mb="20px"  mt={{base:"0px",md:"0px",lg:"14%"}} ml={{lg:"-13%"}}>
<Box pb="20px" as="h2" fontWeight={700} fontSize={"26px"} fontStyle={"italic"}>Unsure Which Design <br /> To Pick?</Box>
<Box as="h2" pb="10px" fontWeight={500}>Unsure Which Design To Pick?</Box>
<Button h="50px" w={{base:"50%",lg:"100%"}}  color={"white"} sx={{
        background: 'linear-gradient(90deg, #f6eff6 -80%, #7928CA 100%)',
        color: 'white',
      }}>Schedule Appointment</Button>

 </Box>
</Flex>





<Flex  w={{base:"100%",lg:"50%"}} direction={{base:"column",md:"column",lg:"row"}}>
<Box w={{base:"100%",md:"100%",lg:"60%"}}>
  <Image src="https://github.com/shwetra/assa/assets/104376252/c8972f19-094f-4b41-ad46-93925e54915c" alt=""/>
</Box>

<Box m="auto"  w={{base:"100%",lg:"35%"}} h="auto" mb="20px"  mt={{base:"0px",md:"0px",lg:"14%"}} ml={{lg:"-13%"}} >
<Box pb="20px"  as="h2" fontWeight={700} fontSize={"26px"} fontStyle={"italic"}>Come visit us at any of <br /> our stores!</Box>
      <InputGroup h="40px" w={{base:"50%",lg:"100%"}}>
      <InputLeftElement  pointerEvents="none">
        <RiArrowDownSLine mt="30px" color="gray.300" />
      </InputLeftElement>
      <Input type="Number" h="60px" placeholder="Enter pincode" />
    </InputGroup>

 </Box>
</Flex>
</Flex>




{/* Gold exchange box */}

<Flex direction={{base:"column",md:"row",lg:"row"}} bg="#F7F0EE" >
  <Box   w={{base:"100%", lg:"50%"}} >
  <Image m="auto" w="60%" src="https://github.com/shwetra/assa/assets/104376252/39894b8c-6f7a-46e4-85a5-e7551a10a8e3" alt=""/></Box>
 
 
 {/* secoend box */}
  <Box   w={{base:"100%", lg:"50%"}} pl={{base:"12px"}} >
<Box  fontWeight={700} pt={{base:"30px",md:"5%",lg:"12%"}} fontSize={{base:"26px",md:"20px",lg:"26px"}}>Your Precious Gold. Our New Designs!</Box>
<Box pt="10px" w={{base:"350px",lg:"375px"}}>- A Gold Exchange Program that lets you preserve your memories and make new ones!  Please note: The old gold doesn’t have to be from only CaratLane, it can be any gold jewellery you have. </Box>
<Button  ml={{base:"30%", md:"0px",lg:"0px"}} mt="10px" h="40px" w={{base:"40%",lg:"40%"}}  color={"white"} sx={{
        background: 'linear-gradient(90deg, #f6eff6 -80%, #7928CA 100%)',
        color: 'white',
      }}>Know More</Button>
  </Box>
</Flex>




    </Box>
  );
};
