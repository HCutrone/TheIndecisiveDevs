import { useState, useEffect } from 'react'
import './App.css';
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav.js'
import Home from './routes/Home'
import Library from './routes/Library'
import Groups from './routes/Groups'
import Chat from './routes/Chat'
import LogIn from './components/LogIn'
import { Container, Heading, useToast } from '@chakra-ui/react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import api from './api'
import useBackend from './useBackend'

function App() {
  // localStorage.clear();
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);
  const [groups, setGroups] = useState(localStorage.getItem('groups') ? JSON.parse(localStorage.getItem('groups')) : []);
  // const [googleToken, setGoogleToken] = useState('');
  // const [groupNameToFetch, fetchGroupByName] = useState('');

  const toast = useToast()
  const displaySuccessToast = (title, desc) => {
    toast({
      title: `${title}`,
      description: `${desc}`,
      position: "top",
      status: 'success',
      duration: 4500,
      isClosable: true,
    })
  }

  const displayFailureToast = (title, desc) => {
    toast({
      title: `${title}`,
      description: `${desc}`,
      position: "top",
      status: 'failure',
      duration: 4500,
      isClosable: true,
    })
  }

  const getGroupDataByName = async (groupName) => {
    try {
      let groupData = await api.getGroupData(groupName);
      return groupData['data']['group'];
      // fetchGroupByName(groupName)
      // return fetchedGroupData
    } catch (error) {
      console.error(error);
    }
  }

  const getUserGroupData = async (groupNames) => {
    let userGroupData = [];
    for (const groupName of groupNames) {
      userGroupData.push(await getGroupDataByName(groupName))
    }
    return Promise.resolve(userGroupData)
  }

  const getGroupToastDesc = (group) => {
    let dayText = ""
    if (group['sessionLength'] === 1) {
      dayText = ""
    } else if (group['groupLength'] === 2) {
      dayText = "other"
    } else {
      dayText = "third"
    }
    return `${group['name']} will get a new story every ${dayText} ${group['startDate']}`
  }

  const handleLogIn = async (logInToken) => {
    // send the id token to the server for authentication, and return the user
    const loggingInUser = await api.googleSignIn(logInToken);
    // the googleSignIn returns either a new user or the existing user data from the DB, so lets use it
    const userData = JSON.parse(loggingInUser['data']['user'])
    displaySuccessToast("We've successfully signed you in!", "Happy Reading :)")
    setUser(userData);
    setGroups(await getUserGroupData(userData['groups']));
  //   // const logInToken = googleData.getAuthResponse().id_token
  //   console.log("setting google token to:", logInToken);
  //   console.log("token before setting:", googleToken)
  //   setGoogleToken(logInToken);
  //   console.log("token after setting:", googleToken)
  //   console.log(user)
  }
  
  // const { fetchedGroupData, setFetchedGroupData } = useBackend(googleToken, groupNameToFetch)
  
  const handleLogOut = () => {
    console.log("logging out")
    setUser(null);
    setGroups([]);
    displaySuccessToast("You're signed out.", "Have a great day!")
    navigate('/')
  }

  const handleCreateGroup = async (groupData) => {
    let newGroup;
    newGroup = await api.createGroup(user, groupData);
    if (newGroup['data']['group']) {
      // we successfully made the new group
      const userData = JSON.parse(newGroup['data']['user'])
      setUser(userData)
      setGroups(await getUserGroupData(userData['groups']))
      // navigate('/home')
      const toastDesc = getGroupToastDesc(JSON.parse(newGroup['data']['group']));
      displaySuccessToast("Group Created!", toastDesc);
    } else {
      // we had an error
      // alert(JSON.parse(newGroup['data']['message']))
      displayFailureToast("Error", newGroup['data']['message']);
    }
  }

  // when the user state changes (log in/out), change the page
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
      navigate('/home')
    } else {
      setGroups([])
      localStorage.removeItem('user')
      localStorage.removeItem('groups')
      navigate('/')
    }
  }, [user])

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups))
  }, [groups])

  return (
    <Routes>
      <Route path="/" element={
        <body>
          <Nav user={user} handleLogIn={handleLogIn} handleLogOut={handleLogOut} displayFailureToast={displayFailureToast} />
          <Container className="app-container" maxW="100vw" centerContent>
            {user ? <></> :
              /* if there's no user, load the welcome/sign-in prompt */
              /* we need the tertiary because the elements in this body appear on every page */
              /* thus, when we sign in, we want the welcome text to go away but everything else to stay */
              <Container className="app-header">
                <Heading as="h1">Novellas for the Fellas</Heading>
                <Heading as="h2">Welcome, please <LogIn btnText="Log-In or Sign-Up" handleLogIn={handleLogIn} displayFailureToast={displayFailureToast}/> to get started!</Heading>
              </Container>}
          </Container>
          <Outlet />
        </body>
      }>
        <Route path="home" element={<Home user={user} groups={groups} handleCreateGroup={handleCreateGroup}/>} />
        <Route path="library" element={<Library />} />
        <Route path="Group/:group" element={<Groups />} />
        <Route path="chat" element={<Chat />} />
      </Route>
    </Routes>
  );
}

export default App;