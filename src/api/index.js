import axios from 'axios'

const user = axios.create({
  baseURL: 'http://localhost:3001/user',
})
const auth = axios.create({
  baseURL: 'http://localhost:3001/user',
})

export const insertUser = payload => user.post(`/user`, payload)
export const getAllUsers = () => user.get(`/users`)
export const updateUserByID = (id, payload) => user.put(`/user/${id}`, payload)
export const deleteUserByID = id => user.delete(`/user/${id}`)
export const getOrCreateUserByID = id => user.get(`/user/${id}`) //maybe make a post????
export const googleSignIn = token => auth.post(`/google`, token)

const users = {
    insertUser,
    getAllUsers,
    updateUserByID,
    deleteUserByID,
    getOrCreateUserByID,
    googleSignIn,
}

export default users