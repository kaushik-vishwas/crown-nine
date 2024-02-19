import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
const DigitalGold = () => {
  return (
    <Box w='100%'>

      {/* Navbar section */}
    <Box  boxShadow={'0px 0px 10px  gray'} overflowX={'hidden'}>
    <Flex  h={{base:'70px',lg:'70px'}}   ml={{base:'25px',lg:'200px'}} pr={{base:'20px',lg:'none'}} bgColor={'#f9f9fa'} justifyContent={'space-between'} >
        <Image display={{base:'none',lg:'flex'}} w={'140px'} h={'70px'} src="https://github.com/shwetra/assa/assets/104376252/651cb01b-6abc-4d59-b3d9-44819160b921"/>
        
        <Flex gap={{base:'10px',md:'30px',lg:'40px'}} mt={'20px'} mr={{base:'10px',lg:'210px'}}  w={{base:'100%',md:'100%',lg:'30%'}}>
        <Box>
        <Button _hover={{bgColor:"transparent"}}  bgColor={{base:'#F2F3F4 ',lg:'transparent'}} color={'#33363e'} fontSize={{base:'12px',lg:'13px'}}>BUY GOLD</Button>
        </Box>
        <Box>
        <Button _hover={{bgColor:"transparent"}}  bgColor={{base:'#F2F3F4 ',lg:'transparent'}} color={'#33363e'} fontSize={{base:'12px',lg:'13px'}}>SELL GOLD </Button>
        </Box>
        <Box>
        <Button _hover={{bgColor:"transparent"}}  bgColor={{base:'#F2F3F4 ',lg:'transparent'}} color={'#33363e'} fontSize={{base:'12px',lg:'13px'}}>EXCHANGE / REDEEM</Button>
        </Box>
        <Button _hover={{bgColor:"transparent"}} bgColor={{base:'#F2F3F4 ',lg:'transparent'}} display={{base:'none',lg:'flex'}}  color={'#33363e'} fontSize={'13px'}>FAQS</Button>
     </Flex>
    </Flex>
      </Box>



      {/* Banner section */}
      <Flex display={{base:'none',md:'none',lg:'flex'}} direction={{base:'none',md:'none',lg:'column'}} w={'97%'}>
      <Image pl={'40px'}  src='https://banner.caratlane.com/live-images/5a293fdafd4f4ee3be79c6125e3d73d7.jpg '/>
      <Text fontSize={'32px'} w={'600px'} h={'54px'} mt={'-410px'} pl={{base:'0px',lg:'180px'}}color={'white'}>Here is an easier way of buying pure 24kt gold</Text>
      <Text fontSize={'15px'} w={'520px'} mt={'60px'} pl={{base:'0px',lg:'180px'}} color={'white'}>Buy CaratLane DigiGld online to save money, grow your wealth, and convert your gold into beautiful jewellery—whenever you want it. Guaranteed, no-hassles buyback.</Text>
     
    <Flex>
      <Button fontSize={'18px'} h={'50px'} w={'208px'} pt={'8px'} pb={'8px'} mt={'25px'} ml={'180px'}  color={'white'}  background="linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))">Buy DigiGld Now</Button>
      <Flex mt={'28px'}>
      <Text  color={'white'}  fontWeight={'500'} fontSize={'19px'} ml={'30px'}>Learn more </Text>
      <Text color={'white'} fontSize={'35px'} as={'span'}><RiArrowDropDownLine/></Text>
      </Flex> 
    </Flex> 
  </Flex>  


    {/* For small and medium screens */}
    {/* Banner section */}
    <Flex h={{base:'700px',md:'1350px'}}  bgRepeat={'no-repeat'} bgSize={'cover'} bgImage={('https://banner.caratlane.com/live-images/9aa6353a56394fa6b0ef4067b99eeee6.jpg')}  display={{base:'flex',md:'flex',lg:'none'}} w={'100%'} border={'2px solid black'}  direction={{base:'column'}}>
 
      <Text mt={{base:'20px',md:'100px'}} ml={{base:'30px',md:'130px'}} fontWeight={'500'} pr={'10px'} fontSize={{base:'18px',md:'22px'}} w={{base:'80%',md:'70%'}}   color={'white'}>Here is an easier way of buying pure 24kt gold</Text>
    
      <Text  fontSize={{base:'12px',md:'13px'}} pr={{base:'20px',md:'15px'}} w={'100%'} mt={'17px'} pl={{base:'40px',md:'20px'}} color={'white'}>Buy CaratLane DigiGld online to save money, grow your wealth, and convert your gold into beautiful jewellery—whenever you </Text>
      <Text fontSize={'13px'} pr={{base:'20px',md:'15px'}} w={'100%'}  pl={{base:'40px',md:'250px'}} color={'white'} >want it. Guaranteed, no-hassles buyback.</Text>
       <Text></Text>
    <Flex direction={'column'}>
      <Button fontSize={'18px'} h={'50px'} w={'208px'} pt={'8px'} pb={'8px'} mt={'20px'} ml={{base:'90px',md:'250px'}} color={'white'}  background="linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))">Buy DigiGld Now</Button>
      <Flex mt={'28px'}>
      <Text  color={'white'}  mt={{base:'-20px',md:'2px'}} fontWeight={'500'} fontSize={'19px'} ml={{base:'130px',md:'300px'}} >Learn more </Text>
      <Text color={'white'}  mt={{base:'-20px',md:'2px'}} fontSize={'35px'} as={'span'}><RiArrowDropDownLine/></Text>
      </Flex> 
    </Flex>   


    </Flex>
    </Box>
  )
}

export default DigitalGold
