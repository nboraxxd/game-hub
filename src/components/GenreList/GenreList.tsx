import { Stack, Text } from '@chakra-ui/react'
import useGenres from '@/hooks/useGenres'

export default function GenreList() {
  const { genres, status, error } = useGenres()
  console.log('🔥 ~ GenreList ~ genres:', genres)

  return (
    <Stack>
      {genres.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
    </Stack>
  )
}
