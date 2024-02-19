import React, { useState } from 'react';
import { Box, Button, Card, Flex, IconButton, Image, Img, Text, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'; 
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { MdLocationOn, MdPerson, MdFlag, MdFavorite, MdShoppingBag, MdPhone } from "react-icons/md";

import { Link } from 'react-router-dom';
import CatProducts from './CatProducts';


const Navbar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const { isOpen, onToggle } = useDisclosure();


  const [activeBut, setActiveBut] = useState(null);


  const handleBoxMouse = () => {
    setActiveBut(null);
  };

  const handleButton = (index) => {
    setActiveBut(index === activeBut ? null : index);
  };


  const handleBoxMouseLeave = () => {
    setActiveButton(null);
  };

  const handleButtonClick = (index) => {
    setActiveButton(index === activeButton ? null : index);
  };

  return (
    <Box as="nav">
      
      <Text bg="#4F3267" align={"center"} color="white" ></Text>

{/* top navbar  */}
<Box>
  <Flex bg="#F6F4FF" justifyContent={"space-around"}>
  <Box display={{ base: 'flex', md: 'flex',lg:"none" }}>
          <IconButton
          bg="transparent"
         
          _hover={{bg:"transparent"}}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            onClick={onToggle}
            aria-label="Toggle Menu"
            margin="5px"
            mr="-15px"
          />
        </Box>
    <Image h={{base:"40px",lg:"70px"}} ml={{base:"10px",lg:"0px"}} mr={{base:"10px",lg:"0px"}} mt={{base:"5px",lg:"0px"}} src='https://github.com/shwetra/assa/assets/104376252/44b6ed17-e8e7-401f-b15e-8f931c283993' alt=''/>

{/* try at home and all  */}
<Flex pt="20px" gap="20px" display={{base:"none",md:"none",lg:"flex"}}> 

   <Flex>
    <Text fontSize={"28px"}><MdLocationOn size={24} /></Text>
    <Text fontSize={"11px"} pt="7px">KG-11319 Vikaspuri, New Delhi </Text>
   </Flex>

   <Flex>
    <Text fontSize={"28px"}><MdPhone size={24} /></Text>
    <Text fontSize={"11px"} pt="7px">+91 9818600044</Text>
   </Flex>
   </Flex>
   {/* try at home and all  */}


{/* serchbox  */}

<Box > 
   <InputGroup  border={"1px solid #CD59E9"} borderRadius="9px" mt={{base:"9px",lg:"14px"}} ml={{base:"0px",lg:"40px"}} >
      <Input h="35px" type="text" placeholder="Search..." />
      <InputRightElement pointerEvents="none">
        <SearchIcon color="gray.300" bg={"#CD59E9"} h="35px" w="100%" p="10px" borderRadius="9px"mt="-5px" />
      </InputRightElement>
    </InputGroup>
    </Box>

{/* serchbox  end*/}


{/* all icons  */}
    <Flex align="center" justifyContent={"end"} ml={{base:"7px",lg:"50px"}}>
      
      <Flex mr={4} display={{base:"none",md:"none",lg:"flex"}}>
        <MdLocationOn size={24} />
          <Text>110018</Text>
      </Flex>
      
      <Box mr={4} display={{base:"none",md:"none",lg:"flex"}}>
        <MdFlag size={24} />
      </Box>
      <Box mr={4} display={{base:"none",md:"none",lg:"flex"}}>
        <MdPerson size={24} />
      </Box>
      <Box mr={4}>
        <MdFavorite size={24} />
      </Box>
      <Box>
        <MdShoppingBag size={24} />
      </Box>
    </Flex>

    {/* all icons  end*/}
  </Flex>
</Box>
{/* top navbar  */}






{/* main navbar with all button for large screen  */}

      <Flex   direction={{ base: 'column', md: 'row' }} >
       
        <Box display={{ base: 'none', md: 'none',lg:"flex" }} justifyContent={"space-between"} w="100%">


          <Link to="" target='_blank'>
            <Button
              width="90px"
              height="40px"
              margin="5px"
              color={"#CD59E9"}
              bg="transparent"
              _hover={{ bg: "transparant", borderBottom: "3px solid #CD59E9", color: "#CD59E9" }}
            >
              Home
            </Button>
          </Link>


       <Link to="/bestseller">
        <Button
          onClick={() => handleButtonClick(1)}
          variant={activeButton === 1 ? 'solid' : 'ghost'}
          width="90px"
          height="40px"
          margin="5px"
          bg="transparent"
          _hover={{bg:"transparant", borderBottom:"3px solid #CD59E9", color:"#CD59E9"}}
        >
         Best Seller
        </Button>
        </Link>


          <Link to="/newarrival">
        <Button
          onClick={() => handleButtonClick(2)}
          variant={activeButton === 2 ? 'solid' : 'ghost'}
          width="90px"
          height="40px"
          margin="5px"
          color={"#CD59E9"}
          bg="transparent"
          _hover={{bg:"transparant", borderBottom:"3px solid #CD59E9", color:"#CD59E9"}}
        >
          New Arrival
        </Button>
        </Link>


        <Link to="earrings"> 
        <Button
          onClick={() => handleButtonClick(3)}
          variant={activeButton === 3 ? 'solid' : 'ghost'}
          width="70px"
          height="40px"
          margin="5px"
          bg="transparent"
          _hover={{bg:"transparant", borderBottom:"3px solid #CD59E9", color:"#CD59E9"}}
        >
          Earrings
        </Button>
        </Link>

          <Link to="bracelets">
            <Button
              onClick={() => handleButtonClick(4)}
              variant={activeButton === 4 ? 'solid' : 'ghost'}
              width="70px"
              height="40px"
              margin="5px"
              bg="transparent"
              _hover={{ bg: "transparant", borderBottom: "3px solid #CD59E9", color: "#CD59E9" }}
            >
              Bracelets
            </Button>
          </Link>

        <Link to="pendents">
        <Button
          onClick={() => handleButtonClick(5)}
          variant={activeButton === 5 ? 'solid' : 'ghost'}
          width="60px"
          height="40px"
          margin="5px"
          bg="transparent"
          _hover={{bg:"transparant", borderBottom:"3px solid #CD59E9", color:"#CD59E9"}}
        >
          Pendents
        </Button>
          </Link>

          <Link to="rings">
          <Button
            onClick={() => handleButtonClick(6)}
            variant={activeButton === 7 ? 'solid' : 'ghost'}
            width="60px"
            height="40px"
            margin="5px"
            bg="transparent"
            _hover={{ bg: "transparant", borderBottom: "3px solid #CD59E9", color: "#CD59E9" }}
          >
            Rings
          </Button>
          </Link>

        <Link to="necklaces">
        <Button
          onClick={() => handleButtonClick(7)}
          variant={activeButton === 7 ? 'solid' : 'ghost'}
          width="80px"
          height="40px"
          margin="5px"
          bg="transparent"
          _hover={{bg:"transparant", borderBottom:"3px solid #CD59E9", color:"#CD59E9"}}
        >
         Necklaces
        </Button>
        </Link>

        <Link to={"/brass"}>
        <Button
          onClick={() => handleButtonClick(8)}
          variant={activeButton === 8 ? 'solid' : 'ghost'}
          width="140px"
          height="40px"
          margin="5px"
          bg="transparent"
          _hover={{bg:"transparant", borderBottom:"3px solid #CD59E9", color:"#CD59E9"}}
        >
          Brass
        </Button>
        </Link>
        

        <Link to={"/gifts"}>
        <Button
          onClick={() => handleButtonClick(9)}
          variant={activeButton === 9 ? 'solid' : 'ghost'}
          width="50px"
          height="40px"
          margin="5px"
          bg="transparent"
          _hover={{bg:"transparant", borderBottom:"3px solid #CD59E9", color:"#CD59E9"}}
        >
         Gifts
        </Button>
        </Link>

        <Link to={"/exclusive"}>
        <Button
          onClick={() => handleButtonClick(10)}
          variant={activeButton === 10 ? 'solid' : 'ghost'}
          width="80px"
          height="40px"
          margin="5px"
          bg="transparent"
          _hover={{bg:"transparant", borderBottom:"3px solid #CD59E9", color:"#CD59E9"}}
        >
         Exclusive
        </Button>
        </Link>


          {/* Add more buttons manually for additional boxes */}
        </Box>
      </Flex>
      {activeButton !== null && (
        <Box width="100%" border="1px solid black" marginTop="10px">
          {/* Content of the box */}

          {/*________________________ bestseller box  _______________________*/}
          {activeButton === 1 &&
            <Box>
              <div style={{ height: '40vh', backgroundImage: 'url("https://homesoulindia.com/cdn/shop/collections/Best_Seller_1200x1200.jpg?v=1618289883")' }}>
                {/* Your content goes here */}
              </div>
              <div style={{ padding: '20px' }}>
                <h3>Best Sellers</h3>
                <p>Discover timeless elegance and unmatched craftsmanship with our "Best Sellers" collection. Each piece is a masterpiece, meticulously crafted to adorn you with the finest in jewelry fashion. Elevate your style with our most coveted designs that stand the test of time.</p>
              </div>
              

              <CatProducts />
            </Box>

          }

          {/*----------------------- bestseller box end -----------------------  */}

          {/*________________________ new arrival box  _______________________*/}
          {activeButton === 2 &&
            <Box>
              <div style={{ height: '500px', backgroundImage: 'url("https://nayab.sgp1.digitaloceanspaces.com/2021/07/banner-ARVL-3.jpg")' }}>
                {/* Your content goes here */}
              </div>
              <div style={{ padding: '20px' }}>
                <h3>New Arrivals</h3>
                <p>Unveil the latest in luxury with our "New Arrivals" collection. From dazzling diamonds to exquisite gemstones, embrace the allure of contemporary designs that redefine elegance. Elevate your jewelry collection with these fresh and enchanting pieces that capture the essence of modern sophistication.</p>
              </div>
              <div>

              </div>

              <CatProducts />
            </Box>

          }

          {/*----------------------- nre arrival box end -----------------------  */}


          {/*________________________ earing box  _______________________*/}
          {activeButton === 3 &&
            <Box>
              <div style={{ height: '40vh', backgroundImage: 'url("https://cdn.shopify.com/s/files/1/0545/1736/6965/files/Earrings_a809cc9c-50c3-4890-938a-b7f8acd8d0a8.jpg?v=1616756103")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                {/* Your content goes here */}
              </div>
              <div style={{ padding: '20px' }}>
                <h3>Earring</h3>
                <p>Adorn your ears with enchanting beauty from our "Earring" collection. Explore a symphony of styles, from classic studs to statement danglings, designed to complement every occasion. Elevate your allure with these meticulously crafted earrings that blend timeless elegance with contemporary flair.</p>
              </div>
              

              <CatProducts />
            </Box>

            }

             {/*----------------------- earing box end -----------------------  */}




             {/* _______________--------___bracelets______________________________ */}
          {activeButton === 4 &&
            <Box>
              <div style={{ height: '60vh', backgroundSize: 'cover', backgroundImage: 'url("https://www.swashaa.com/cdn/shop/collections/Men_s_Bracelet_Banner_1.jpg?v=1698494396")' }}>
                {/* Your content goes here */}
              </div>
              <div style={{ padding: '20px' }}>
                <h3>Bracelets</h3>
                <p>Wrap your wrists in sophistication with our exquisite "Bracelets" collection. From delicate chains to bold statement pieces, each bracelet is a testament to craftsmanship and style. Elevate your look with these finely curated designs, where every detail tells a story of elegance and individuality.</p>
              </div>

              <CatProducts />
            </Box>

          }
             {/* _______________--------___bracelets_______ ending_______________________ */}



{/* -------------------------Pendent box---------------------------- */}
          {activeButton === 5 &&
            <Box>
              <div style={{ height: '60vh', backgroundSize: 'cover', backgroundImage: 'url("https://www.kantilalchhotalal.com/wp-content/uploads/2016/10/necklace-banner.png")' }}>
                {/* Your content goes here */}
              </div>
              <div style={{ padding: '20px' }}>
                <h3>Pendents</h3>
                <p>Drape yourself in the allure of our "Pendants" collection, where every piece tells a story of timeless elegance. From minimalist charms to intricate statement pieces, discover the perfect pendant to reflect your unique style. Elevate your neckline with these handcrafted treasures, each a symbol of refined craftsmanship and personal expression.</p>
              </div>

              <CatProducts />
            </Box>

          }
{/* -------------------------Pendent box--------esnding-------------------- */}



          {/* _______________--------___Rings______________________________ */}
          {activeButton === 6 &&
            <Box>
              <div style={{ height: '60vh', backgroundSize: 'cover', backgroundImage: 'url("https://media.turgeonraine.com/app/uploads/2018/01/09121321/WordPress-Banner-for-Desktop-Engagement-Rings-1024x415.jpg")' }}>
                {/* Your content goes here */}
              </div>
              <div style={{ padding: '20px' }}>
                <h3>Rings</h3>
                <p>Celebrate love and individuality with our captivating "Rings" collection. From dazzling engagement rings to chic everyday bands, each piece is a testament to enduring style and quality craftsmanship. Elevate your hands with these symbolically rich and intricately designed rings, crafted to be cherished for a lifetime.</p>
              </div>
              <CatProducts/>
            </Box>

          }
          {/* _______________--------___Rings_______ ending_______________________ */}




{/* ----------------Necklaces-------------------------- */}
          {activeButton === 7 &&
            <Box>
              <div style={{ height: '60vh', backgroundSize: 'cover', backgroundImage: 'url("https://www.mannatjewels.com/images/inner_page/necklace/5.jpg")' }}>
                {/* Your content goes here */}
              </div>
              <div style={{ padding: '20px' }}>
                <h3>Necklaces</h3>
                <p>Adorn your neckline with grace and sophistication from our "Necklaces" collection. Explore a symphony of styles, from delicate chains to bold statement pieces, each meticulously crafted to enhance your unique beauty. Elevate your look with these exquisite necklaces, where every detail reflects a blend of timeless elegance and contemporary charm.</p>
              </div>

              <CatProducts />
            </Box>

          }
            
{/* ---------------------------------Necklaces-------eanding--------------------- */}

          {/* _______________--------___brass______________________________ */}
          {activeButton === 8 &&
            <Box>
              <div style={{ height: '60vh', backgroundSize: 'cover', backgroundImage: 'url("https://nendine.com/wp-content/uploads/2022/12/Brass-Earrings-Banner-2.webp")' }}>
                {/* Your content goes here */}
              </div>
              <div style={{ padding: '20px' }}>
                <h3>Brass</h3>
                <p>Discover the timeless allure of brass in our collection. Each piece showcases the enduring beauty and versatility of this metal, seamlessly blending tradition with modern design. Elevate your style with our carefully crafted brass items, where each creation tells a story of sophistication and artistry.</p>
              </div>

              <CatProducts />
            </Box>

          }
          {/* _______________--------___brass_______ ending_______________________ */}

          {/* _______________--------___gift______________________________ */}
          {activeButton === 9 &&
            <Box>
              <div style={{ height: '60vh', backgroundSize: 'cover', backgroundImage: 'url("https://t4.ftcdn.net/jpg/03/97/34/39/360_F_397343924_6WlXOaMVHNKkhMs2l8AHJ5e9MQ03YiBU.jpg")' }}>
                {/* Your content goes here */}
              </div>
              <div style={{ padding: '20px' }}>
                <h3>Gifts</h3>
                <p>Celebrate special moments with our curated selection of exquisite "Gifts." From timeless jewelry pieces to personalized treasures, find the perfect expression of love and thoughtfulness. Elevate your gifting experience with our carefully chosen collection that speaks volumes through elegance and charm.</p>
              </div>

              <CatProducts />
            </Box>

          }
          {/* _______________--------___gift_______ ending_______________________ */}

          {/* _______________--------___exclusive______________________________ */}
          {activeButton === 10 &&
            <Box>
              <div style={{ height: '200px', backgroundColor: 'grey' }}>
                {/* Your content goes here */}
              </div>
              <div style={{ padding: '20px' }}>
                <h3>Exclusive</h3>
                <p>Indulge in luxury with our "Exclusive" collection, where opulence meets unparalleled craftsmanship. Each piece is a masterpiece, meticulously crafted to embody sophistication and refinement. Elevate your style with these exclusive treasures that stand as a testament to a world where rarity and elegance converge.</p>
              </div>

              <CatProducts />
            </Box>

          }
          {/* _______________--------___exclusive_______ ending_______________________ */}
         
          {/* Add more conditional rendering for additional boxes */}
        </Box>
      )}

 {/* main navbar with all button for large screen end  */}





{/*________________ small and md scroll button with images _____________________*/}


 <Box h={{base:"100px"}} display={{base:"flex",md:"flex",lg:"none"}}>
      <Box  w="100%" h="500px" css={{
      /* Hide the scrollbar */
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
      'scrollbar-width': 'none', /* Firefox */
    }}
    overflow="scroll"  mb="100px" >
        <Flex  m="auto" w={{base:"1050px"}}  >

        <Box  w={{base:"80px"}}  >
          <Img
          w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/49be16ba-c3db-4899-b179-122166dc2c7a"
            alt=""
          />
          <Text pl="5px" fontSize={"12px"}>Best Seller</Text>
          </Box>


          <Box  w={{base:"80px"}}  >
          <Img
            objectFit={"cover"}
            w="70px"
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/426256b3-7fdf-4426-a651-75f1ecf16f47"
            alt=""
          />
          <Text  fontSize={"12px"}>New Arrivals</Text>
          </Box>


          <Box overflow={"hidden"} w={{base:"80px"}} >
            <Img
             w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
              cursor={"pointer"}
              src="https://github.com/shwetra/assa/assets/104376252/6d68b77c-91d4-4f27-b29d-323a72dc305a"
              alt=""
            />
            <Text pl="5px" fontSize={"12px"}>Silver</Text>
          </Box>
          
         
          <Box overflow={"hidden"} w={{base:"80px"}}>
          <Img
           w="70px"
          objectFit={"cover"}
          borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/50370dae-17fc-4041-8294-02b0c27033fb"
            alt=""
          />
             <Text pl="5px" fontSize={"12px"}>Anniversary Gifts</Text>
          </Box>



          <Box  w={{base:"80px"}}  >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/f2494f48-f6b0-46fc-b84c-d49edb589d37"
            alt=""
          />
          <Text pl="5px" fontSize={"12px"}>Solitaires</Text>
          </Box>



          <Box  w={{base:"80px"}}  >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/3c874e8a-0f81-410d-a29c-baf8f9287f2f"
            alt=""
          />
          <Text pl="5px" fontSize={"12px"}>Rings</Text>
          </Box>

          <Box  w={{base:"80px"}}  >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/9d4bd76c-2a7e-484b-9aee-d2087bd13982"
            alt=""
          />
          <Text pl="5px" fontSize={"12px"}>Earrings</Text>
          </Box>

          <Box  w={{base:"80px"}}  >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/debb2a73-3e2f-4747-888f-cc7916671700"
            alt=""
          />
          <Text pl="5px" fontSize={"12px"}>Bracelets & Bangles</Text>
          </Box>

          <Box  w={{base:"80px"}}  >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/7a02f1c1-3181-46bc-9adb-ec642f33699a"
            alt=""
          />
          <Text pl="5px" fontSize={"12px"}>Special Deals</Text>
          </Box>

          <Box  w={{base:"80px"}}  >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/10e2c915-f1a7-4ad9-bfb0-2fd323d3aafc"
            alt=""
          />
          <Text pl="5px" fontSize={"12px"}>Video Call</Text>
          </Box>

          <Box  w={{base:"80px"}}  >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/e531bd65-e111-4fcd-94ea-09a10c761e68"
            alt=""
          />
          <Text pl="5px" fontSize={"12px"}>Other Jewellery</Text>
          </Box>


          <Box  w={{base:"80px"}}  >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/210c466a-756f-44d0-b934-29e509a0a6b5"
            alt=""
          />
          <Text pl="5px" fontSize={"12px"}>DigiGid</Text>
          </Box>

          <Box  w={{base:"80px"}}  >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/97d02834-6259-4d7e-8ce8-80c7a9d0d37d"
            alt=""
          />
          <Text pl="5px" fontSize={"12px"}>Chains</Text>
          </Box>
         
        </Flex> 
        
      </Box>
      </Box>


{/*________________ small and md scroll button with images _____________________*/}











 {/* navbar for small screen  hamburgor */}
      {isOpen && (
        <Card
        gap="15px"
        mt="-100px"
        bg="#F2F2F2"
          p="3"
          display={{ base: 'flex', md: 'flex' }}
          flexDirection="column"
         
        >

       <Flex >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/49be16ba-c3db-4899-b179-122166dc2c7a"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text pl="5px" fontSize={"19px"} fontWeight={700}>Best Seller</Text>
          <Text pl="5px" fontSize={"12px"}>All Time Favourites</Text>
          </Box>
          </Flex>



          <Flex >
          <Img
            objectFit={"cover"}
            w="70px"
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/426256b3-7fdf-4426-a651-75f1ecf16f47"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text  fontSize={"19px"} fontWeight={700}>New Arrivals</Text>
          <Text  fontSize={"12px"}>Fresh new designs</Text>
          </Box>
          </Flex>


          <Flex>
            <Img
             w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
              cursor={"pointer"}
              src="https://github.com/shwetra/assa/assets/104376252/6d68b77c-91d4-4f27-b29d-323a72dc305a"
              alt=""
            />
            <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
            <Text pl="5px"  fontSize={"19px"} fontWeight={700}>Silver</Text>
            <Text  fontSize={"12px"}>Fresh new designs</Text>
            </Box>
          </Flex>
          
         
          <Flex>
          <Img
           w="70px"
          objectFit={"cover"}
          borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/50370dae-17fc-4041-8294-02b0c27033fb"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
             <Text pl="5px"  fontSize={"19px"} fontWeight={700}>Anniversary Gifts</Text>
             <Text  fontSize={"12px"}>Fresh new designs</Text>
             </Box>
          </Flex>



          <Flex>
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/f2494f48-f6b0-46fc-b84c-d49edb589d37"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text pl="5px"  fontSize={"19px"} fontWeight={700}>Solitaires</Text>
          <Text  fontSize={"12px"}>Fresh new designs</Text>
          </Box>
          </Flex>



          <Flex  onClick={() => handleButton(0)}
          variant={activeBut === 0 ? 'solid' : 'ghost'}>
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/3c874e8a-0f81-410d-a29c-baf8f9287f2f"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text pl="5px"  fontSize={"19px"} fontWeight={700}>Rings</Text>
          <Text  fontSize={"12px"}>Fresh new designs</Text>
          </Box>
          </Flex>
          {activeBut !== null && (
        <Box  onMouseLeave={handleBoxMouse} width="100%" height="200px" border="1px solid black" marginTop="10px">
          {/* Content of the box */}
          {activeBut === 0 && <p>Box 1 Content</p>}
         
          {/* Add more conditional rendering for additional boxes */}
        </Box>
      )}

          <Flex>
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/9d4bd76c-2a7e-484b-9aee-d2087bd13982"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text pl="5px"  fontSize={"19px"} fontWeight={700}>Earrings</Text>
          <Text  fontSize={"12px"}>Fresh new designs</Text>
          </Box>
          </Flex>

          <Flex>
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/debb2a73-3e2f-4747-888f-cc7916671700"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text pl="5px"  fontSize={"19px"} fontWeight={700}>Bracelets & Bangles</Text>
          <Text  fontSize={"12px"}>Fresh new designs</Text>
          </Box>
          </Flex>

          <Flex>
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/7a02f1c1-3181-46bc-9adb-ec642f33699a"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text pl="5px"  fontSize={"19px"} fontWeight={700}>Special Deals</Text>
          <Text  fontSize={"12px"}>Fresh new designs</Text>
          </Box>
          </Flex>

          <Flex >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/10e2c915-f1a7-4ad9-bfb0-2fd323d3aafc"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text pl="5px"  fontSize={"19px"} fontWeight={700}>Video Call</Text>
          <Text  fontSize={"12px"}>Fresh new designs</Text>
          </Box>
          </Flex>

          <Flex>
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/e531bd65-e111-4fcd-94ea-09a10c761e68"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text pl="5px"  fontSize={"19px"} fontWeight={700}>Other Jewellery</Text>
          <Text  fontSize={"12px"}>Fresh new designs</Text>
          </Box>
          </Flex>


          <Flex >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/210c466a-756f-44d0-b934-29e509a0a6b5"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text pl="5px"  fontSize={"19px"} fontWeight={700}>DigiGid</Text>
          <Text  fontSize={"12px"}>Fresh new designs</Text>
          </Box>
          </Flex>

          <Flex   >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/97d02834-6259-4d7e-8ce8-80c7a9d0d37d"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text pl="5px"  fontSize={"19px"} fontWeight={700}>Chains</Text>
          <Text  fontSize={"12px"}>Fresh new designs</Text>
          </Box>
          </Flex>
        </Card>
      )}
     
    </Box>
  );
};

export default Navbar;
