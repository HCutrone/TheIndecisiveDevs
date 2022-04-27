import './Routes.css'
import React from 'react'
import Group from '../components/Group.js'
import { Link } from 'react-router-dom'
import { Flex, Center, Container, VStack, Heading, Text } from '@chakra-ui/react'

const Home = ({ user, groups }) => {
  return (
    <Container className="home" maxW="100vw" centerContent>
      <Container className="home-header">
        <Heading as="h1">Novellas for the Fellas</Heading>
        {user ? <Heading as="h2">Welcome, {user}!</Heading> :
            <Heading as="h2">Welcome, please <Link to="/Library">sign in</Link> or <Link to="/Groups">register</Link> to get started!</Heading>}
      </Container>

      <VStack className="home-groups" align="stretch" spacing="20px" padding="20px">
        {groups.map(group => {
          return <Group group={group}></Group>
        })}
      </VStack>
    </Container>
  )
}

export default Home