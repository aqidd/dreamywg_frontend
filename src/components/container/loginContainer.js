import React, {Component} from 'react'
import CredentialForm from './../presentation/authentication/credentialForm'
import {inject, observer, Provider} from 'mobx-react'
import 'antd/dist/antd.css'
import {Redirect} from "react-router-dom";
import WrappendModal from "../common/form/wrappendModal";

@inject('store')
@observer
export default class LoginContainer extends Component {

  constructor(props) {
    super(props);

  }

  onSubmit = async (data) => {
    return this.props.store.login(data);
  }

  render() {
    if (this.props.store.response.success) {
      console.log('successful: ' + this.props.store.response.type + " " + !this.props.store.response.type)
      if (this.props.store.response.type === "SEEKER") {
        console.log("1")
        return <Redirect to={'/search'}/>;
      } else if (this.props.store.response.type === "OFFERER") {
        console.log("2")
        return <Redirect to={'/'}/>; // TODO: AQID CHANGE HERE!
      } else {
        console.log("3")
        return <Redirect to={'/roleSelection'}/>;
      }
    }
    if (this.props.store.response.completed && !this.props.store.response.success) {
      WrappendModal(this.props.store.response.errorMessage)
    }

    if (this.props.store.hasToken()) {
      console.log("4")
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
