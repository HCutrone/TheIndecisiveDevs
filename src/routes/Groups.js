import { Container, Text, Heading, Button, Spacer, Flex } from '@chakra-ui/react';
import React, { useState } from 'react'
import Comments from "../components/Comments"
import { useParams } from 'react-router-dom';
import api from '../api'

let start = new Date();
const end = new Date(2023,1,1,1,1,0,0);

const total = end - start;

function buttonTest()
{
  console.log("click");
}

function CountDown() {
    let s = new Date();
    const e = new Date(2023,1,1,1,1,0,0);
    const [time, setTime] = useState((e - s));
    const [sec, setSec] = useState(Math.floor((time / 1000) % 60));
    const [min, setMin] = useState(Math.floor((time / 1000 / 60) % 60));
    const [hour, setHour] = useState(Math.floor((time / 1000 / 60 / 60) % 24));
    const [days, setDays] = useState(Math.floor((time / 1000 / 60 / 60 / 24) % 365));

    function update() {
        s = new Date();
        setTime(e - s);
        setSec(Math.floor((time / 1000) % 60));
        setMin(Math.floor((time / (1000 * 60)) % 60));
        setHour(Math.floor((time / (1000 * 60 * 60)) % 24));
        setDays(Math.floor((time / (1000 * 60 * 60 * 24)) % 365));
    }

    let intervalId = setInterval(update,1000);

    /*useEffect(() => {
        //s = new Date();
        setTime(e-s);
    });*/

    return (
      <div>
          <h2>Time Remaining: {days}:{(hour<10)?"0"+hour:hour}:{(min<10)?"0"+min:min}:{(sec<10)?"0"+sec:sec}</h2>
      </div>
    );
}

// const getGroupByName = async (name) => {
//   try {
//     let groupData = await api.getGroupData(name);
//     return groupData['data']['group'];
//   } catch (error) {
//     console.error(error);
//   }
// }
// TODO: use chakra to make look good
// TODO: only show info like book title when actually there
const Groups = ({ user }) => {
  const { group } = useParams();
  const groupData = JSON.parse(group)
  // console.log("fetching data for " + (decodeURI(group)))
  // const groupData = await handleGetGroup(decodeURI(group))
  // console.log("final group data: ", groupData)
  return (
      <Container className="groupData" centerContent>
        <Heading as="h1">{groupData['name']}</Heading>
        {groupData['currentStory']
          ?
            <>
              <Text as='h2'>Reading: {groupData['currentStory']}</Text>
              <Text>By: {groupData['author']}</Text>
              <Button>Click here to read your story, {groupData['currentStory']}</Button>
            </>
          :
            <>
              <Text as="h2">No current reading!</Text>
              <Text>Check back on {groupData['startDate']} to see what your group will be reading</Text>
            </>}
        {/* <Link href={group['bookLink']} isExternal><img alt={group['currentStory']} src={group['image']}></img></Link> */}
        <div>
        <Spacer />
        <Comments
        commentsUrl="http://localhost:3004/comments" 
        currentUserId={String(user['email'])}
        userName={String(user['username'])}
        ></Comments>
        </div>
        {/*<Button colorScheme='yellow'>See what your group members are saying about your reading!</Button>*/}
        {/* <Button onClick={buttonTest} mt={2}>See what your group members are saying about your reading!</Button> */}
      </Container>
  )
}
export default Groups