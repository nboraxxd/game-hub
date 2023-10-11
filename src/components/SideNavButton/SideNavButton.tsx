import { Button } from '@chakra-ui/react'
import { IconType } from 'react-icons'

type Props = {
  IconButton: IconType
  buttonColor: string
  buttonColorHover: string
  isAll: boolean
  handleToggle: () => void
}

export default function SideNavButton({ IconButton, buttonColor, buttonColorHover, isAll, handleToggle }: Props) {
  return (
    <Button
      leftIcon={<IconButton size="1.5rem" />}
      variant="unstyled"
      onClick={handleToggle}
      display="flex"
      alignItems="center"
      justifyContent="start"
      w="full"
      h={8}
      color={buttonColor}
      _hover={{ color: buttonColorHover }}
      sx={{
        '& .chakra-button__icon': {
          marginRight: '12px',
        },
      }}
    >
      {isAll ? 'Hide' : 'Show all'}
    </Button>
  )
}
