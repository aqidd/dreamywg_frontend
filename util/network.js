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

const currentURL = URL.devUrl

const Api = {
     login =  (username, password) => axios.post(currentURL + "", {username, password}, config),
     register = (registerForm) => axios.post(currentURL + "", registerForm, config)
}


export default Api
