import { useState } from 'react'
import { Button, Text } from '@chakra-ui/react'

type Props = {
  children: string
}

export default function ExpandableText({ children }: Props) {
  const [expanded, setExpanded] = useState(false)
  const limit = 300

  if (!children) return null

  if (children.length <= limit) return <Text mt={5}>{children}</Text>

  const summary = expanded ? children : children.substring(0, limit)

  return (
    <Text lineHeight="tall">
      {summary}
      {!expanded && '...'}
      <Button size="xs" colorScheme="teal" ml={1} fontWeight="bold" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Show Less' : 'Read More'}
      </Button>
    </Text>
  )
}
