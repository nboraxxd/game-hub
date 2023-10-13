import bullsEye from '@/assets/images/bulls-eye.webp'
import thumbsUp from '@/assets/images/thumbs-up.webp'
import meh from '@/assets/images/meh.webp'
import { Box } from '@chakra-ui/react'

type Props = {
  rating: number
}

type Emoji = {
  [key in number]: { backgroundImage: string }
}

export default function Emoji({ rating }: Props) {
  if (rating < 3) return null

  const emojiMap: Emoji = {
    3: { backgroundImage: meh },
    4: { backgroundImage: thumbsUp },
    5: { backgroundImage: bullsEye },
  }

  return (
    <Box display="inline" position="relative">
      <Box
        position="absolute"
        w="25px"
        h="full"
        top="4px"
        left="8px"
        {...emojiMap[rating]}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
      />
    </Box>
  )
}
