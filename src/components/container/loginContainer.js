import React, {Component} from 'react'
import CredentialForm from './../presentation/authentication/credentialForm'
import {inject, observer, Provider} from 'mobx-react'
import 'antd/dist/antd.css'
import ResponseModal from '../common/responseModal'
import {Redirect} from "react-router-dom";

@inject('AuthStore')
@observer
export default class LoginContainer extends Component {

  state = {visible: false, formResponse: '', redirect: false}

  constructor(props) {
    super(props);

  }

  onSubmit = async (data) => {
    const response = await this.props.AuthStore.login(data)
    return this.updateFormResponse(response);
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
    if (response.status === 200) {
      const token = response.data.token;
      localStorage.setItem('token', token);
      this.setState({
        redirect: true
      })
    } else {
      this.setState({
        visible: true,
        formResponse: `${response.data.message}`
      })
    }
  }

  render() {
    if (this.state.redirect)
      return <Redirect to={'/roleSelection'}/>;
    if (!this.state.visible) {
      return <Provider store='AuthStore'>
        <CredentialForm
          processData={(name, data) => this.onSubmit(data)}/>
      </Provider>
    } else {
      return <ResponseModal
        response={this.state.formResponse}
        visible={this.state.visible}
        hideModal={this.dismissModal}>
      </ResponseModal>
    }
  }
}
