import React, {Component} from 'react'
import CredentialForm from './../presentation/authentication/credentialForm'
import {inject, observer, Provider} from 'mobx-react'
import 'antd/dist/antd.css'
import {Redirect} from "react-router-dom";
import {Modal} from "antd";

@inject('AuthStore')
@observer
export default class LoginContainer extends Component {

  state = {redirect: false}

  constructor(props) {
    super(props);

  }

  onSubmit = async (data) => {
    const response = await this.props.AuthStore.login(data)
    return this.updateFormResponse(response);
  }

  updateFormResponse = (response) => {
    if (response.status === 200) {
      const token = response.data.token;
      localStorage.setItem('token', token);
      this.setState({
        redirect: true
      })
    } else {
      this.showModal(response.data.message)
    }
  }

  showModal = (message) => {
    Modal.info({
      content: (
        <div>
          {message}
        </div>
      ),
      onOk() {
      }
    })
  }

  render() {
    if (this.state.redirect)
      return <Redirect to={'/roleSelection'}/>;

    return (
      <Provider store='AuthStore'>
        <CredentialForm
          processData={(name, data) => this.onSubmit(data)}/>
      </Provider>
    )

  }
}
