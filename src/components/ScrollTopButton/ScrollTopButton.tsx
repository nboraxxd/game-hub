import { useEffect, useState } from 'react'
import { IconButton } from '@chakra-ui/react'
import { SCROLL_TRIGGER_POSITION } from '@/config'
import { icons } from '@/utils'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > SCROLL_TRIGGER_POSITION) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    })
  }, [])

  return (
    visible && (
      <IconButton
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }}
        isRound={true}
        variant="solid"
        aria-label="Scroll to top"
        icon={<icons.up />}
        position="fixed"
        zIndex="99_999"
        bottom={10}
        right={10}
        fontSize={24}
      />
    )
  )
}
