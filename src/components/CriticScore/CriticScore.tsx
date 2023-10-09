import { Badge } from '@chakra-ui/react'

interface Props {
  score: number
}

export default function CriticScore({ score }: Props) {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''

  return (
    <Badge colorScheme={color} fontSize="sm" px="2" borderRadius="4">
      {score}
    </Badge>
  )
}
