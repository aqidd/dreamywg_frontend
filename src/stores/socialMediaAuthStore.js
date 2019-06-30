import {action, observable} from "mobx"

class Store {
  @observable authenticationResult = {isAuthenticated: false, userId: '', token: '', name: '', email: '', linkedincode:''};

  constructor() {
  }

  @action linkedInResponse = (error, code, redirectUri) => {
    if (error) {
      console.log("linkedin login failed")
      // signin failed
    } else {
      console.log("linkedin login success", code)
    }
  }

  @action facebookResponse = (response) => {
  	console.log("facebookResponse", response)
  }

  @action onFailure = (error) => {
  	console.log("failure", error)
    
  };

}

const initStore = () => new Store();

export default initStore
