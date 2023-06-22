import axios from 'axios'

const REGISTER_URL = 'https://whispering-river-87788.herokuapp.com/api/register'
const LOGIN_URL = 'https://whispering-river-87788.herokuapp.com/api/login'


const register = (userInfo) => {
    return axios.post(REGISTER_URL, userInfo)
}

const login = (userInfo) => {
    return axios.post(LOGIN_URL, userInfo)
}

export default { register, login }