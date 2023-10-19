import { SimpleGrid, Text } from '@chakra-ui/react'

import { Game } from '@/types'
import { DefinitionItem } from '@/components/DefinitionItem'
import { CriticScore } from '@/components/CriticScore'

type Props = {
  game: Game
}

export default function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid as="dl" columns={2} spacing={2} mt={3}>
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => <Text key={platform.id}>{platform.name}</Text>)}
      </DefinitionItem>

      <DefinitionItem term="Metascore">{game.metacritic && <CriticScore score={game.metacritic} />}</DefinitionItem>

      <DefinitionItem term="Genres">{game.genres?.map(({ id, name }) => <Text key={id}>{name}</Text>)}</DefinitionItem>

      <DefinitionItem term="Publishers">
        {game.publishers?.map(({ id, name }) => <Text key={id}>{name}</Text>)}
      </DefinitionItem>
    </SimpleGrid>
  )
}
