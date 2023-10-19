import useTrailers from '@/hooks/useTrailers'

type Props = {
  slug: string
}

export default function GameTrailer({ slug }: Props) {
  const { data, isLoading, error } = useTrailers(slug!)

  if (isLoading) return null

  if (error) throw error

  const first = data.results[0]
  return first ? <video src={first.data[480]} poster={first.preview} controls /> : null
}
