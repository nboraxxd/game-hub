import useGameDetail from '@/hooks/useGameDetail'
import { useParams } from 'react-router-dom'
import DOMPurify from 'dompurify'
import { Helmet } from 'react-helmet-async'

export default function GameDetail() {
  const { slug } = useParams()
  const { data: gameDetail, isLoading, error } = useGameDetail(slug!)

  if (error) return <p>Không tìm thấy game</p>

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      <Helmet>
        <title>{gameDetail.name} | GameHub</title>
        <meta name="description" content={gameDetail.description_raw} />
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(gameDetail?.description) }}></div>
    </div>
  )
}
