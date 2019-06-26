import {action, observable} from "mobx"

class Store {
  @observable authenticationResult = {isAuthenticated: false, userId: '', token: '', name: '', email: '', linkedincode:''};

  constructor() {
    this.authenticationResult.isAuthenticated = false;
    this.authenticationResult.userId = '';
    this.authenticationResult.token = '';
    this.authenticationResult.name = '';
    this.authenticationResult.email = '';
    this.authenticationResult.linkedincode = '';
  }

  @action linkedInResponse = (error, code, redirectUri) => {
    if (error) {
      console.log("linkedin login failed")
      // signin failed
    } else {
      console.log("linkedin login success", code)
      this.authenticationResult.isAuthenticated = true;
      this.authenticationResult.linkedincode = code;
      
    }
  }

  @action facebookResponse = (response) => {
  	console.log("facebookResponse", response)
  	this.authenticationResult.isAuthenticated = true;
  	this.authenticationResult.email = response.email;
  	this.authenticationResult.userId = response.userID;
  	this.authenticationResult.token = response.accessToken;
  	this.authenticationResult.name = response.name;
  }

  @action onFailure = (error) => {
  	console.log("failure", error)
    
  };

}

const initStore = () => new Store();

export default initStore