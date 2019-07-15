import React, {Component} from 'react'
import CredentialForm from './../presentation/authentication/credentialForm'
import {inject, observer, Provider} from 'mobx-react'
import 'antd/dist/antd.css'
import {Redirect} from "react-router-dom";
import WrappedModal from "../common/form/wrappedModal";

@inject('store')
@observer
export default class LoginContainer extends Component {

  constructor(props) {
    super(props);

  }

  onSubmit = async (data) => {
    return this.props.store.login(data);
  };

  render() {
    if (this.props.store.loginResponse.success) {
      console.log('successful: ' + this.props.store.loginResponse.type + " " + !this.props.store.loginResponse.type);
      if (this.props.store.loginResponse.type === "SEEKER") {
        return <Redirect to={'/search'}/>;
      } else if (this.props.store.loginResponse.type === "OFFERER") {
        return <Redirect to={'/'}/>; // TODO: AQID CHANGE HERE!
      } else {
        return <Redirect to={'/roleSelection'}/>;
      }
    } else if (this.props.store.loginResponse.completed && !this.props.store.loginResponse.success) {
      WrappedModal(this.props.store.loginResponse.errorMessage)
    } else if (this.props.store.hasToken()) {
      return <Redirect to={'/'}/>;
    }

    return (
      <Provider store='store'>
        <CredentialForm
          processData={(name, data) => this.onSubmit(data)}/>
      </Provider>
    )

  }
}
