import React from 'react'
import { Container, Divider, Text } from '@chakra-ui/react'

const Group = ({ group }) => {
  return (
    <Container borderWidth="1px" borderRadius="lg" centerContent padding="15px">
      <Text fontSize="3xl">{group.name}</Text>
      <Divider />
      <Text fontSize="xl">{group.currentStory}</Text>
      <Text>By: {group.author}</Text>
      <Divider />
      <Text>Members: {group.members}</Text>
      <Text>Stories Read: {group.storiesRead}</Text>
      <Text>Session Length: {group.sessionLength}</Text>
    </Container>
  )
}

export default Group