import axios from 'axios'

const AUTH_URL = 'https://whispering-river-87788.herokuapp.com/api/register'


const register = (userInfo) => {
    return axios.post(AUTH_URL, userInfo)
}

export default { register }