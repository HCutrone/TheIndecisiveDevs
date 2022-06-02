import React from 'react'
import './Components.css'
import { Container, Divider, Text, Box } from '@chakra-ui/react'

const Group = ({ group }) => {
  return (
    <Box className="groupBox" borderWidth="1px" borderRadius="lg">
      <Container centerContent padding="15px" width='300px'>
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
        <Text>Members: {group['members'].length}</Text>
        <Text>Stories Read: {group['storiesRead']}</Text>
        {group['sessionLength'] != '1'
          ? <Text>Session Length: {group['sessionLength']} weeks</Text>
          : <Text>Session Length: {group['sessionLength']} week</Text>}
        <Text>New Story Day: {group['startDate']}</Text>
        <Text>Group ID: {group['groupID']}</Text>
      </Container>
    </Box>
  )
}

export default Group