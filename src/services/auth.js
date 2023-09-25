import axios from 'axios'

// const REGISTER_URL = 'https://whispering-river-87788.herokuapp.com/api/register'
const LOGIN_URL = 'https://api.escuelajs.co/api/v1/auth/login'
const USER_URL = 'https://api.escuelajs.co/api/v1/auth/profile'


const register = (userInfo) => {
    // return axios.post(REGISTER_URL, userInfo)
}

const login = (userInfo) => {
    return axios.post(LOGIN_URL, userInfo)
}
const getUser = (token) => {
    return fetch(USER_URL, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}
export default { register, login, getUser }