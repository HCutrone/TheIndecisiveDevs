import React from 'react'
import { Container, Divider, Text } from '@chakra-ui/react'
// TODO: add 's' to session length if multiple weeks
const Group = ({ group }) => {
  return (
    <Container borderWidth="1px" borderRadius="lg" centerContent padding="15px">
      <Text fontSize="3xl">{group['name']}</Text>
      <Divider />
      {group['currentStory'] != '' ?
        <>
          <Text fontSize="xl">{group['currentStory']}</Text>
          <Text>By: {group['author']}</Text> 
        </>
        : <></>}
      <Divider />
      <Text>Members: {group['size']}</Text>
      <Text>Stories Read: {group['storiesRead']}</Text>
      <Text>Session Length: {group['sessionLength']} week</Text>
      <Text>New Story Day: {group['startDate']}</Text>
    </Container>
  )
}

export default Group