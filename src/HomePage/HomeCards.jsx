import { Box, Flex, Text, Collapse, IconButton, Image, useBreakpointValue, Heading, Button } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useRef, useState } from 'react';
import {
       
  FaAngleLeft,
  FaAngleRight,
  FaRegClock,
} from "react-icons/fa";
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai';
import {BiUser} from "react-icons/bi"
import Feedback from './Feedback';
import Products from './Products';

const HomeCards = () => {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalCards = arr.length;
  const cardsPerPage = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });

  const handleNext = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide < totalCards - 1) {
        return prevSlide + 1;
      } else {
        // Restart from the first card
        return 0;
      }
    });
  };

  const handlePrevious = () => {
  setCurrentSlide((prevSlide) => {
    if (prevSlide > 0) {
      return prevSlide - 1;
    } else {
      // Go to the last card
      return totalCards - 1;
    }
  });
};


// like wishlist icon heart function 
const [isLiked, setIsLiked] = useState(false);

const handleToggleLike = () => {
  setIsLiked(!isLiked);
};


  return (
    <>
    <Box as="footer" bg="gray.200" py={4}>

<Box >
        <Box h="50px" ml={{base:"20px",lg:"60px"}} w={{base:"60%",lg:"15%"}} fontSize={"24px"} fontWeight={600} borderBottom={"3px solid #f28524"} >Best of CaratLane</Box>
   
        <Flex align="center" justify="center" w="100%" m="auto"   >
        <Button bgColor="black" _hover={{
                   bgColor:"#f28524"
                  }} borderRadius={"49%"} color={"white"} onClick={handlePrevious} ml={2}>
            {<FaAngleLeft/>}
          </Button>
          <Flex ref={containerRef} overflow="hidden" w="100%">
            <Flex w="100%"
              transition="transform 0.3s ease-in-out"
              transform={`translateX(-${currentSlide * (100 / cardsPerPage)}%)`}
            >
              {arr.map((card) => (
                <Box h="400px" key={card.id} flexShrink={0} borderWidth="1px" borderRadius="lg" w="300px" overflow="hidden" m={4} bg="white">  
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
          transform: 'scale(1.2)',
        }}
      />
       <IconButton
       bg="transparent"
       _hover={{bg:"transparant"}}
        icon={isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
        // pass data id for post in wishlist in backent 
        color={isLiked ? 'red' : 'gray'}
        onClick={handleToggleLike}
        aria-label="Toggle Like"
        size="md"
        position="absolute"
        top="10px"
        right="10px"
      />
    </Box>


            {/* price box  */}

            <Flex mt="10px"  pb="20px" justifyContent={"space-between"} w="100%" > 
                <Flex   pl="20px" >
                    <Text  fontSize={"26px"} fontWeight={700} mt="1">₹12,999</Text>
                    <Text mt="15px" textDecoration='line-through' textDecorationColor= 'black' ml="5px"  fontSize={"13px"} >₹5436</Text>
                </Flex>
                </Flex>
            
            <Text p="15px" h="40px"  color={"gray"} as="p" fontSize="md"  overflow={"hidden"}>
             {card.Discripton}
            </Text>
                </Box>
              ))}
            </Flex>
          </Flex>
          <Button bgColor="black" color="white" _hover={{
                   bgColor:"#f28524"
                  }} borderRadius={"50%"}  onClick={handleNext} ml={2}>
            {<FaAngleRight/>}
          </Button>
        </Flex>
        </Box>  
    </Box>




{/* shiping diliver and other two cards  */}



<Box bgColor="#231535"  mb="50px">
<Box  w="90%" m="auto" >
      <Flex w="100%" >
        <Flex w='50%' direction={{base:"column",md:"column",lg:"row"}} >
        
        <Image h="20vh"  src="https://github.com/shwetra/assa/assets/104376252/d47bcb2f-1b53-4095-898f-e29ba52be8da" alt="Image 1"   />
        <Box mr="10px" mt="40px">
        <Text  color={"white"}>100% Certified & Free Shipping</Text>
        <Text display={{base:"none",md:"none",lg:"flex" }} color={"#C4ADE1"}>Our jewellery always comes with <br /> a certificate of authentication.</Text>
        </Box>
        </Flex>
        <Flex w='50%' direction={{base:"column",md:"column",lg:"row"}}>
        <Image h="20vh" src="https://github.com/shwetra/assa/assets/104376252/8301b2b8-9ba9-4967-bd33-9593abbb4275" alt=""   />
       
       <Box mt="40px">
        <Text color={"white"}>15 Days Money_Back</Text>
        <Text display={{base:"none",md:"none",lg:"flex" }} color={"#C4ADE1"}>Get 100% refund if you don't like your jewellery. </Text>
        </Box> 
        </Flex>
      </Flex>
      <Flex w="100%">
      <Flex    direction={{base:"column",md:"column",lg:"row"}}>
        <Image h="20vh"  src="https://github.com/shwetra/assa/assets/104376252/7ecde2fb-b3ca-46ee-a33b-b554c516413f" alt="Image 1"  />
        <Box mt="40px"><Text color={"white"}>Lifetime Exchange</Text>
        <Text display={{base:"none",md:"none",lg:"flex" }} color={"#C4ADE1"}>Exchange your designs <br /> anytime you want an upgrade .</Text>
        </Box>
        </Flex>
        <Flex direction={{base:"column",md:"column",lg:"row"}}>
        <Image h="20vh" src="https://github.com/shwetra/assa/assets/104376252/a620ab71-dcb6-4d73-ba23-945aea35b22b" alt="" />
        
        <Box mt="40px" ><Text  color={"white"} >One Year Replacement Warranty</Text>
        <Text display={{base:"none",md:"none",lg:"flex" }} color={"#C4ADE1"}>if your jewellery has a defect, we will fix it.</Text>
        </Box>
        </Flex>
      </Flex>
    </Box>
    </Box>


<Products/>
<Feedback/>



    </>
  );
};

export default HomeCards;



const arr=[
    {
    "image": "https://rukminim1.flixcart.com/image/612/612/ring/h/4/g/lr-0017ygsse-16-iskiuski-ring-original-imae4g74rxfrysv3.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Endea Love U Sterling Silver Diamond Gold Plated Ring"
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/ring/h/3/y/lr-0008ygsse-6-iskiuski-ring-original-imae487pcfvsg7vu.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Flushing Rose Sterling Silver Diamond Gold Plated Ring"
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/ring/f/h/q/lr-0016rgsse-15-iskiuski-ring-original-imae4g74y9tyghaq.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Adorable Love U Sterling Silver Diamond Gold Plated Rin..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/ring/2/h/z/lr-0018rgsse-14-iskiuski-ring-original-imae4g74kepwqkv4.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Winsome Love U Sterling Silver Diamond Gold Plated Ring"
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/j8hnmvk0/ring/5/g/b/11-lr-0403yg925s-ring-iskiuski-original-imaexss7kjgtu3pc.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "The Erina Diamond Ring Sterling Silver Swarovski Crysta..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/jwzabgw0/ring/u/7/e/10-lr-0530ygsse-ring-iskiuski-original-imafdq4wggydgent.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Love Ring Sterling Silver Swarovski Crystal Gold Plated..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/ring/q/g/d/lr-0079new-16-iskiuski-ring-original-imaebp3cthfctdug.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Bliss Sterling Silver Swarovski Crystal Gold Plated Rin..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/j4rc8sw0/ring/p/c/u/20-lr-0345925ygsse-ring-iskiuski-original-imaev4zwpgywub7u.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Gift Sterling Silver Swarovski Crystal Gold Plated Ring"
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/jsqe7bk0/ring/n/f/b/10-solr-0095ygsse-ring-iskiuski-original-imafc4v9y55bjcmy.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Freezon Round Solitaire Sterling Silver Swarovski Cryst..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/j7gi6q80/ring/d/v/f/18-solr-0047yg925-ring-iskiuski-original-imaex8tth7tbhec8.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "The Nicole Solitaire Ring Sterling Silver Swarovski Cry..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/ring/h/4/g/lr-0017ygsse-16-iskiuski-ring-original-imae4g74rxfrysv3.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Endea Love U Sterling Silver Diamond Gold Plated Ring"
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/ring/h/3/y/lr-0008ygsse-6-iskiuski-ring-original-imae487pcfvsg7vu.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Flushing Rose Sterling Silver Diamond Gold Plated Ring"
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/ring/f/h/q/lr-0016rgsse-15-iskiuski-ring-original-imae4g74y9tyghaq.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Adorable Love U Sterling Silver Diamond Gold Plated Rin..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/ring/2/h/z/lr-0018rgsse-14-iskiuski-ring-original-imae4g74kepwqkv4.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Winsome Love U Sterling Silver Diamond Gold Plated Ring"
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/j8hnmvk0/ring/5/g/b/11-lr-0403yg925s-ring-iskiuski-original-imaexss7kjgtu3pc.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "The Erina Diamond Ring Sterling Silver Swarovski Crysta..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/jwzabgw0/ring/u/7/e/10-lr-0530ygsse-ring-iskiuski-original-imafdq4wggydgent.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Love Ring Sterling Silver Swarovski Crystal Gold Plated..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/ring/q/g/d/lr-0079new-16-iskiuski-ring-original-imaebp3cthfctdug.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Bliss Sterling Silver Swarovski Crystal Gold Plated Rin..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/j4rc8sw0/ring/p/c/u/20-lr-0345925ygsse-ring-iskiuski-original-imaev4zwpgywub7u.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Gift Sterling Silver Swarovski Crystal Gold Plated Ring"
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/jsqe7bk0/ring/n/f/b/10-solr-0095ygsse-ring-iskiuski-original-imafc4v9y55bjcmy.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Freezon Round Solitaire Sterling Silver Swarovski Cryst..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/j7gi6q80/ring/d/v/f/18-solr-0047yg925-ring-iskiuski-original-imaex8tth7tbhec8.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "The Nicole Solitaire Ring Sterling Silver Swarovski Cry..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/kqb8pzk0/ring/u/y/6/adjustable-r058-ring-giva-original-imag4cssgze5k2nf.jpeg?q=70",
    "brand": "GIVA",
    "Discripton": "Sterling Silver Zircon Embrace Heart adjustable ring fo..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/jctemq80/ring/h/y/n/17-lr-0441wrsse-ring-iskiuski-original-imaffpf9hynughbk.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Wedding Ring Sterling Silver Swarovski Crystal Platinum..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/jjiw1ow0/ring/g/z/d/17-lr-0493wrsse-ring-iskiuski-original-imaf5ye66qezh3gs.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Kirti Diamond Ring Sterling Silver Swarovski Crystal Pl..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/jctemq80/ring/f/b/3/13-lr-0445wrsse-ring-iskiuski-original-imaffpf9d7p5k7vg.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Diamond Ring Sterling Silver Swarovski Crystal Platinum..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/xif0q/ring/j/t/x/adjustable-1-r0510-ring-giva-original-imaggknhqtqhfepv.jpeg?q=70",
    "brand": "GIVA",
    "Discripton": "Steling Silver Golden Pink Mandala Ring for Women and G..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/kzegk280/ring/d/v/a/adjustable-1-r0256-ring-giva-original-imagbexysth46qe4.jpeg?q=70",
    "brand": "GIVA",
    "Discripton": "Sterling Silver Heart's Paradise adjustable ring for wo..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/jjelq4w0/ring/p/v/b/15-lr-0484wrsse-ring-iskiuski-original-imaf5yddsbgjv4fj.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Designer Ring Sterling Silver Swarovski Crystal Platinu..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/jjelq4w0/ring/g/a/h/14-lr-0491wrsse-ring-iskiuski-original-imaf5ydkmmh5h8b9.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Light Weight Designer Ring Sterling Silver Swarovski Cr..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/jbxyxzk0/ring/q/u/f/16-lr-0416rgsse-ring-iskiuski-original-imafffdfrzzaybst.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Gabriella Wedding Ring Sterling Silver Swarovski Crysta..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/xif0q/ring/v/v/h/adjustable-1-r0773-ring-giva-original-imagmncm2ykx4wrc.jpeg?q=70",
    "brand": "GIVA",
    "Discripton": "Kara Sterling Silver Swarovski Crystal Platinum Plated ..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/jctemq80/ring/k/q/z/10-lr-0444wrsse-ring-iskiuski-original-imaffpf9thsczuzj.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Express Ring Sterling Silver Swarovski Crystal Platinum..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/j97dk7k0/ring/f/w/h/8-gr-0097wrsse925-ring-iskiuski-original-imaexwdcfjp6ke5s.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "The Astera Gold Mens Ring Sterling Silver Swarovski Cry..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/jz5vjbk0/ring/z/e/t/9-lpr-0030wrsse-ring-iskiuski-original-imaf9qzagsd2xfwz.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Custom Pure Silver Sterling Silver Platinum Plated Ring"
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/j6fcqkw0/ring/y/f/g/7-lr-0373wrsse-ring-iskiuski-original-imaew88yphrymnju.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "The Giona Ring Sterling Silver Swarovski Crystal Platin..."
  },
  {
    "image": "https://rukminim1.flixcart.com/image/612/612/jctemq80/ring/s/h/f/21-lr-0434wrsse-ring-iskiuski-original-imaffpf9ffjhq3qj.jpeg?q=70",
    "brand": "IskiUski",
    "Discripton": "Jelly  Ring Sterling Silver Swarovski Crystal Platinum ..."
  }
 ]