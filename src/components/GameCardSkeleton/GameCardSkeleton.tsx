import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

export default function GameCardSkeleton() {
  return (
    <Card w="300px" overflow="hidden" borderRadius={10}>
      <Skeleton h="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}
