import React, {Component} from 'react'
import CredentialForm from './../presentation/authentication/credentialForm'
import {inject, observer, Provider} from 'mobx-react'
import 'antd/dist/antd.css'
import {Redirect} from "react-router-dom";
import WrappendModal from "../common/form/wrappendModal";

@inject('AuthStore')
@observer
export default class LoginContainer extends Component {

  constructor(props) {
    super(props);

  }

  onSubmit = async (data) => {
    return this.props.AuthStore.login(data);
  }

  render() {
    if (this.props.AuthStore.response.success)
      return <Redirect to={'/roleSelection'}/>;

    if (this.props.AuthStore.response.completed && !this.props.AuthStore.response.success) {
      WrappendModal(this.props.AuthStore.response.errorMessage)
    }

    return (
      <Provider store='AuthStore'>
        <CredentialForm
          processData={(name, data) => this.onSubmit(data)}/>
      </Provider>
    )

  }
}
