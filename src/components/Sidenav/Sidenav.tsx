import { Box } from '@chakra-ui/react'
import { GenreList } from '@/components/GenreList'

export default function Sidenav() {
  return (
    <Box
      as="aside"
      w="200px"
      flexShrink="0"
      pos="sticky"
      top="0"
      height="100vh"
      overflow="auto"
      css={{
        '&::-webkit-scrollbar': {
          height: 'var(--chakra-sizes-1)',
          width: 'var(--chakra-sizes-1)',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'var(--chakra-colors-gray-400)',
        },
      }}
    >
      <GenreList />
    </Box>
  )
}
