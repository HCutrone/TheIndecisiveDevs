import React from 'react'
import { Container, Divider, Text } from '@chakra-ui/react'
// TODO: add 's' to session length if multiple weeks
const Group = ({ group }) => {
  return (
    <Container borderWidth="1px" borderRadius="lg" centerContent padding="15px" width='300px'>
      <Text fontSize="3xl" align="center">{group['name']}</Text>
      <Divider />
      {group['currentStory'] != ''
        ?
          <>
            <Text fontSize="xl">{group['currentStory']}</Text>
            <Text>By: {group['author']}</Text> 
          </>
        : 
          <>
            <Text fontSize="xl">No Current Reading</Text>
            <Text>Check back on {group['startDate']}!</Text>
          </>}
      <Divider />
      <Text>Members: {group['size']}</Text>
      <Text>Stories Read: {group['storiesRead']}</Text>
      {group['sessionLength'] != '1'
        ? <Text>Session Length: {group['sessionLength']} weeks</Text>
        : <Text>Session Length: {group['sessionLength']} week</Text>}
      <Text>New Story Day: {group['startDate']}</Text>
    </Container>
  )
}

export default Group