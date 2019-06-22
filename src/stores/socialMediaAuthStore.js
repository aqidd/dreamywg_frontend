import {action, observable} from "mobx"

class Store {
  @observable authenticationResult = {isAuthenticated: false, userId: '', token: '', name: '', email: ''};

  constructor() {
    this.authenticationResult.isAuthenticated = false;
    this.authenticationResult.userId = '';
    this.authenticationResult.token = '';
    this.authenticationResult.name = '';
    this.authenticationResult.email = '';
  }

  @action linkedInResponse = (response) => {
  	console.log("linkedin response", response)
  	

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