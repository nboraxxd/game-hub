import { Stack, Text } from '@chakra-ui/react'
import { Genre } from '@/types/genres.type'
import useFetch from '@/hooks/useFetch'
import { genresService } from '@/services/genres.service'

export default function GenreList() {
  const { data } = useFetch<Genre>(genresService.getGenres)

  return (
    <Stack>
      {data.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
    </Stack>
  )
}
