import useTrailers from '@/hooks/useTrailers'

type Props = {
  gameSlug: string
}

export default function GameTrailer({ gameSlug }: Props) {
  const { data, isLoading, error } = useTrailers(gameSlug!)

  if (isLoading) return null

  if (error) throw error

  const first = data.results[0]
  return first ? <video src={first.data[480]} poster={first.preview} controls /> : null
}
