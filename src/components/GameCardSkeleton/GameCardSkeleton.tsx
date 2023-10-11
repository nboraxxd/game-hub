import { Card, CardBody, HStack, Skeleton, Stack } from '@chakra-ui/react'

export default function GameCardSkeleton() {
  return (
    <Card>
      <Skeleton
        h={{ base: '320px', lg: '232px', xl: '240px', '2xl': '250px' }}
        w={{ base: '480px', lg: 'full' }}
        borderTopRadius={6}
        borderBottomRadius="none"
      />
      <CardBody>
        <HStack justify="space-between" mb={3}>
          <Skeleton h="21px" w="50%" />
          <Skeleton h="21px" w="15%" />
        </HStack>
        <Stack spacing="1">
          <Skeleton h="27px" w="full" />
          <Skeleton h="27px" w="full" />
        </Stack>
      </CardBody>
    </Card>
  )
}
