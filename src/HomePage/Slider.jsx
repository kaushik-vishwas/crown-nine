import React, { useState, useEffect } from 'react';
import { Box, ChakraProvider, extendTheme, Flex, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Shaya } from './shaya';
import HomeCards from './HomeCards';
import Instagram from './ShoponInstagram';
const mediaItems = [
    { type: 'image', url: 'https://github.com/shwetra/assa/assets/104376252/b5a5afe3-e1b1-4d95-aba3-b22ba5b4ee05' ,urlSmall: 'https://github.com/shwetra/assa/assets/104376252/cd34016d-e2f1-4349-b2b2-67dd0d0bea10' },
    { type: 'video', url: 'https://github.com/shwetra/assa/assets/104376252/8bb04b4d-745f-4050-8124-586215894150'},
    { type: 'image', url: 'https://github.com/shwetra/assa/assets/104376252/bec25962-106e-4499-a1f1-cd71003cdd66',urlSmall: 'https://github.com/shwetra/assa/assets/104376252/1e27861c-e5d3-4d7e-9ae8-35e802efc17b' },
];

const theme = extendTheme({
  components: {
    IconButton: {
      baseStyle: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1,
        color: 'white',
      },
    },
  },
});

function Slider() {
  const [currentMedia, setCurrentMedia] = useState(0);
  const isSmallScreen = useBreakpointValue({ base: true, lg: false }); // Check if it's a small screen

  const handleNext = () => {
    setCurrentMedia((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrentMedia((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideshow = setInterval(handleNext, 15000); // Auto slideshow every 3 seconds

    return () => {
      clearInterval(slideshow); // Clear interval on component unmount
    };
  }, []);

  const renderMedia = (media) => {
    let mediaUrl = media.url; // Default to large media URL

    if (isSmallScreen && media.urlSmall) {
      // If small screen and small media URL available, use it
      mediaUrl = media.urlSmall;
    }

    if (media.type === 'image') {
      return (
        <Box
          width="100%"
          height={{ base:"60vh", md:"750px",lg:"530px"}}
          // height= "auto"
          objectFit="cover"
          background={`url(${mediaUrl})`}
          backgroundSize="cover"
          backgroundPosition="center"
        />
      );
    } else if (media.type === 'video') {
      return (
        <Box
          as="video"
          width="100%"
          //  height="auto" 
           objectFit="cover"
          // objectFit={"inherit"}
          height={{ base: '60vh', md:"750px", lg: '530px' }}
          autoPlay
          onEnded={(e) => {
            e.target.currentTime = 0; // Reset video playback
            e.target.play(); // Start playing again
          }}
        >
          <source src={mediaUrl} type="video/mp4" />
        </Box>
      );
    }
  };

  return (
    <> 
    <ChakraProvider theme={theme}>
      <Flex position="relative">
        <Box display="inline-block" width="100%">
          {mediaItems.map((media, index) => (
            <Box key={index} display={index === currentMedia ? 'block' : 'none'}>
              {renderMedia(media)}
            </Box>
          ))}
        </Box>
        <Box position="absolute" bottom={4} width="100%" display="flex" justifyContent="center">
          <IconButton
            _hover={{ backgroundColor: 'transparent' }}
            bg="black"
            borderRadius="50%"
            color="white"
            fontSize="26px"
            icon={<ChevronLeftIcon />}
            size="lg"
            left={0}
            onClick={handlePrevious}
          />
          {mediaItems.map((_, index) => (
            <Box
              mt="20px"
              key={index}
              bg={index === currentMedia ? 'white' : 'gray.400'}
              width={3}
              height={3}
              borderRadius="50%"
              mx={1}
            />
          ))}
          <IconButton
            _hover={{ backgroundColor: 'transparent' }}
            bg="black"
            borderRadius="50%"
            color="white"
            fontSize="26px"
            icon={<ChevronRightIcon />}
            size="lg"
            right={0}
            onClick={handleNext}
          />
        </Box>
      </Flex>
    </ChakraProvider>


    <Shaya/>
    <HomeCards/>
    <Instagram/></>
  );
}

export default Slider;


// import React, { useState, useEffect } from 'react';
// import { Box, ChakraProvider, extendTheme, Flex, IconButton, useBreakpointValue } from '@chakra-ui/react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

// const mediaItems = [
//     { type: 'image', url: 'https://github.com/shwetra/assa/assets/104376252/b5a5afe3-e1b1-4d95-aba3-b22ba5b4ee05' ,urlSmall: 'https://github.com/shwetra/assa/assets/104376252/cd34016d-e2f1-4349-b2b2-67dd0d0bea10' },
//     { type: 'video', url: 'https://github.com/shwetra/assa/assets/104376252/8bb04b4d-745f-4050-8124-586215894150'},
//     { type: 'image', url: 'https://github.com/shwetra/assa/assets/104376252/bec25962-106e-4499-a1f1-cd71003cdd66',urlSmall: 'https://github.com/shwetra/assa/assets/104376252/1e27861c-e5d3-4d7e-9ae8-35e802efc17b' },
// ];

// const theme = extendTheme({
//   components: {
//     IconButton: {
//       baseStyle: {
//         position: 'absolute',
//         top: '50%',
//         transform: 'translateY(-50%)',
//         zIndex: 1,
//         color: 'white',
//       },
//     },
//   },
// });

// // function Slider() {
// //   const [currentMedia, setCurrentMedia] = useState(0);
// //   const isSmallScreen = useBreakpointValue({ base: true, lg: false }); // Check if it's a small screen

// //   const handleNext = () => {
// //     setCurrentMedia((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
// //   };

// //   const handlePrevious = () => {
// //     setCurrentMedia((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
// //   };

// //   useEffect(() => {
// //     const slideshow = setInterval(handleNext, 10000); // Auto slideshow every 10 seconds

// //     return () => {
// //       clearInterval(slideshow); // Clear interval on component unmount
// //     };
// //   }, []);

// //   const renderMedia = (media) => {
// //     let mediaUrl = media.url; // Default to large media URL

// //     if (isSmallScreen && media.urlSmall) {
// //       // If small screen and small media URL available, use it
// //       mediaUrl = media.urlSmall;
// //     }

// //     if (media.type === 'image') {
// //       return (
// //         <Box
// //           width="100%"
// //           height={{ base: '450px', lg: '530px' }}
// //           background={`url(${mediaUrl})`}
// //           backgroundSize="cover"
// //           backgroundPosition="center"
// //         />
// //       );
// //     } else if (media.type === 'video') {
// //       return (
// //         <Box
// //           as="video"
// //           width="100%"
// //           h={{base:"450px"}}
// //           controls
// //           autoPlay
// //           onEnded={(e) => {
// //             e.target.currentTime = 0; // Reset video playback
// //             e.target.play(); // Start playing again
// //           }}
// //         >
// //           <source h={{base:"400px"}} src={mediaUrl} type="video/mp4" />
// //         </Box>
// //       );
// //     }
// //   };

// //   return (
// //     <ChakraProvider theme={theme}>
// //       <Flex position="relative">
// //         <Box display="inline-block" width="100%">
// //           {mediaItems.map((media, index) => (
// //             <Box key={index} display={index === currentMedia ? 'block' : 'none'}>
// //               {renderMedia(media)}
// //             </Box>
// //           ))}
// //         </Box>
// //         <Box position="absolute" bottom={4} width="100%" display="flex" justifyContent="center">
// //           <IconButton
// //             _hover={{ backgroundColor: 'transparent' }}
// //             bg="black"
// //             borderRadius="50%"
// //             color="white"
// //             fontSize="26px"
// //             icon={<ChevronLeftIcon />}
// //             size="lg"
// //             left={0}
// //             onClick={handlePrevious}
// //           />
// //           {mediaItems.map((_, index) => (
// //             <Box
// //               mt="20px"
// //               key={index}
// //               bg={index === currentMedia ? 'blue' : 'gray.400'}
// //               width={3}
// //               height={3}
// //               borderRadius="50%"
// //               mx={1}
// //             />
// //           ))}
// //           <IconButton
// //             _hover={{ backgroundColor: 'transparent' }}
// //             bg="black"
// //             borderRadius="50%"
// //             color="white"
// //             fontSize="26px"
// //             icon={<ChevronRightIcon />}
// //             size="lg"
// //             right={0}
// //             onClick={handleNext}
// //           />
// //         </Box>
// //       </Flex>
// //     </ChakraProvider>
// //   );
// // }

// // export default Slider;

