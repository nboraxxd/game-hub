import { Link } from 'react-router-dom'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { PATH } from '@/config'
import background from '@/assets/images/background-not-found-page.jpg'

export default function NotFound() {
  return (
    <Flex
      as="section"
      pos="relative"
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="100vh"
      pb="100"
      backgroundImage={background}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      _before={{
        content: `""`,
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        bgGradient: 'linear(to-r, black, blackAlpha.900)',
        opacity: '0.9',
      }}
    >
      <Box pos="relative" px="4" color="white" textAlign="center" fontSize="3xl">
        <Heading as="h1" fontSize="12rem" fontWeight="semibold" noOfLines={1}>
          404
        </Heading>
        <Text>We couldn't find that page.</Text>
        <Button
          as={Link}
          height="3.125rem"
          maxWidth="19rem"
          width="full"
          mt="8"
          backgroundColor="white"
          _hover={{ backgroundColor: 'gray.100' }}
          color="#333"
          fontSize="lg"
          fontWeight="semibold"
          to={PATH.homePage}
        >
          Main page
        </Button>
      </Box>
    </Flex>
  )
}
