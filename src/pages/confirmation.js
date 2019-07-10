import React, {Component} from 'react'
import 'antd/dist/antd.css'
import {Provider} from 'mobx-react'
import ConfirmationContent from "../components/container/confirmation/confirmationContent";
import BaseLayout from "../components/presentation/baseLayout";
import ConfirmationStore from "../stores/confirmationStore";
import {withRouter} from 'react-router';


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
          <BaseLayout>
            <ConfirmationContent token={token}/>
          </BaseLayout>
        </Provider>
      )
    }
  }
)
