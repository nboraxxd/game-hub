import { Box, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  term: string
  children: ReactNode | ReactNode[]
}

export default function DefinitionItem({ children, term }: Props) {
  return (
    <Box my={3}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  )
}
