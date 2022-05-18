import axios from 'axios'

const user = axios.create({
  baseURL: 'http://localhost:3001/user',
})
const auth = axios.create({
  baseURL: 'http://localhost:3001/auth',
})

// export const insertUser = payload => user.post(`/user`, payload)
// export const getAllUsers = () => user.get(`/users`)
export const updateUserByID = (id, payload) => user.put(`/user/${id}`, payload)
export const deleteUserByID = id => user.delete(`/user/${id}`)
// export const getOrCreateUserByID = id => user.get(`/user/${id}`)
export const googleSignIn = token => auth.post(`/google`, { token: token })
export const createGroup = (payload) => auth.post('/group', { group: payload })

const users = {
    updateUserByID,
    deleteUserByID,
    // getOrCreateUserByID,
    googleSignIn,
    createGroup,
}

export default users