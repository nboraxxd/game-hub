import { type ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

export default function GameCardContainer({ children }: Props) {
  return (
    <Box w="300px" overflow="hidden" borderRadius={10}>
      {children}
    </Box>
  )
}
