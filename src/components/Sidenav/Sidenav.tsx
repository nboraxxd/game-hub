import { Box } from '@chakra-ui/react'
import { GenreList } from '@/components/GenreList'

export default function SideNav() {
  return (
    <Box
      as="nav"
      pos="sticky"
      top="3rem"
      flexShrink="0"
      width="200px"
      height="calc(100vh - 6.75rem)"
      mr={3}
      pr={2}
      overflowY="auto"
      overscrollBehavior="contain"
    >
      <GenreList />
    </Box>
  )
}
