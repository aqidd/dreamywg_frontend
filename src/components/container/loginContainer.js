import React, { Component } from 'react'
import CredentialForm from './../presentation/authentication/credentialForm'
import { inject, observer, Provider } from 'mobx-react'
import 'antd/dist/antd.css'
import ResponseModal from '../common/responseModal'

@inject('AuthStore')
@observer
export default class LoginContainer extends Component {

  state = {visible: false, formResponse: ''}

  onSubmit = async (data) => {
    const response = await this.props.AuthStore.login(data)
    this.updateFormResponse(response);
  }

  dismissModal = () => {
    this.setState({
      visible: false
    })
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  updateFormResponse = (response) => {
    // TODO: message should be moved to constant
    let message = ''; 
    // success responses. lol 
    if(parseInt(response.status / 100) === 2 ) { 
      message = 'Login success, token: ' + response.data.token
    } else {
      message = `Login error. Code ${response.status}`
    }
    this.setState({
      visible: true,
      formResponse: message
    })
    
  }

  render() {
    return (
      <div>
        <Provider store='AuthStore'>
            <CredentialForm
                processData={(name,data) => this.onSubmit(data)}/>
        </Provider>
        <ResponseModal 
            response={this.state.formResponse} 
            visible={this.state.visible}
            hideModal={this.dismissModal}>  
        </ResponseModal>
      </div>
    )
  }
}