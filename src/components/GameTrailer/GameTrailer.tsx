import useTrailers from '@/hooks/useTrailers'
import { Skeleton } from '@chakra-ui/react'

type Props = {
  slug: string
}

export default function GameTrailer({ slug }: Props) {
  const { data, isLoading, error } = useTrailers(slug!)

  if (isLoading) return <Skeleton h={{ base: '212px', md: '405px', lg: '258px', '2xl': '500px' }}></Skeleton>

  if (error) throw error

  const first = data?.results[0]
  return first ? <video src={first.data[480]} poster={first.preview} controls /> : null
}
