import React, {Component} from 'react'
import {Layout} from 'antd'
import CustomHeader from '../components/container/customHeader'
import CustomFooter from '../components/container/customFooter'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import initStore from "../stores/confirmationStore";
import {inject, observer, Provider} from 'mobx-react'
import ConfirmationContent from "../components/container/confirmationContent";


const {Header, Footer} = Layout;

export default class ConfirmationScreen extends Component {
  constructor(props) {
    super(props);
    this.store = initStore();
  }

  render = () => {
    return (
      <Provider ConfirmationStore={this.store}>
        <div>
          <Layout>
            <StyledHeader>
              <CustomHeader/>
            </StyledHeader>
            <ConfirmationContent/>
    
          </Layout>
        </div>
      </Provider>
    )
  }
}

const
  StyledHeader = styled(Header)`
  background-color: white;
`;
