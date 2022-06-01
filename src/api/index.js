import axios from 'axios'

const user = axios.create({
  baseURL: 'http://localhost:3001/user',
})
const auth = axios.create({
  baseURL: 'http://localhost:3001/auth',
})

export const updateUserByID = (id, payload) => user.put(`/user/${id}`, payload)
export const deleteUserByID = id => user.delete(`/user/${id}`)
export const googleSignIn = token => auth.post(`/google`, { token: token })
export const createGroup = (userData, groupData) => auth.post('/group', { user: userData, group: groupData })
export const getGroupData = (groupName) => auth.get(`/group/${groupName}`)
export const joinGroup = (userData, code) => auth.post('/joingroup', {user: userData, code: code})

const users = {
    updateUserByID,
    deleteUserByID,
    googleSignIn,
    createGroup,
    getGroupData,
    joinGroup,
}

export default users