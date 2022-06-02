/*
  Use this hook to fetch data from backend whenever user or group data is changed
  This should hopefully stop the high number of promise issues we are getting
  This should also help clean things up and make it more usable...hopefully
*/

/* have a useEffect that watches a variable containing the name of a group 
   when you need info on a group, change the variable */

import { useEffect, useState } from 'react'
import axios from 'axios'
const api = axios.create({ baseURL: 'http://localhost:3001/auth' })

function useBackend({ googleToken, groupNameToFetch }) {
  const [fetchedGroupData, setFetchedGroupData] = useState(null);

  useEffect(() => {
    api.get(`/group/${groupNameToFetch}`).then(res => {
      // console.log(res.data['group'])
      setFetchedGroupData(res.data['group'])
    })
  }, [groupNameToFetch])


  // useEffect(() => {
  //   console.log("google token was changed to", googleToken)
  //   if (googleToken && googleToken.length > 0) {
  //     console.log("logging in")
  //     api.post(`/google`, { token: googleToken }).then(res => {
  //       console.log(JSON.parse(res.data['user']))
  //       console.log("setting user to", JSON.parse(res.data['user']))
  //       setUser(JSON.parse(res.data['user']));
  //       console.log("setting groups to", JSON.parse(res.data['user']['groups']))
  //       setGroups(JSON.parse(res.data['user']['groups']));
  //       navigate('/home');
  //     })
  //   }
  // }, [googleToken])

  return { fetchedGroupData, setFetchedGroupData }
}

export default useBackend