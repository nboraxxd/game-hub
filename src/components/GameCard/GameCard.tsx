import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { Game } from '@/types/games.type'

interface Props {
  game: Game
}

export default function GameCard({ game }: Props) {
  return (
    <Card overflow="hidden" borderRadius={10}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  )
}
