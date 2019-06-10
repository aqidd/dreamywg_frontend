import axios from 'axios'


const URL = {
     baseUrl: "",
     devUrl: "",
}


let config = {
     headers: {
          authentication : "",
     }
}

const Api = {
     login =  (username, password) => axios.post(devUrl + "", {username, password}, config),
     register = (registerForm) => axios.post(devUrl + "", registerForm, config)
}


export default Api