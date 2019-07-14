import React, {Component} from 'react'
import 'antd/dist/antd.css'
import {Provider} from 'mobx-react'
import ConfirmationContent from "../components/container/confirmation/confirmationContent";
import ConfirmationStore from "../stores/confirmationStore";
import {withRouter} from 'react-router';
import {Layout} from "antd";
import DefaultHeader from "../components/common/defaultHeader";

const theme = "light";


export default withRouter(
  class ConfirmationScreen extends Component {
    constructor(props) {
      super(props);
      this.store = ConfirmationStore();
    }

    render = () => {
      const token = this.props.match.params.token;

      return (
        <Provider store={this.store}>
          <Layout>
            <DefaultHeader theme={theme}/>
            <ConfirmationContent token={token}/>
          </Layout>
        </Provider>
      )
    }
  }
)
