import { Box, Spinner } from '@chakra-ui/react'

export default function SuspenseLoading() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w="full"
      height={{ base: 'calc(100vh - 4.625rem)', lg: 'calc(100vh - 6.75rem)' }}
    >
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="#3A3AA1" size="xl" />
    </Box>
  )
}
