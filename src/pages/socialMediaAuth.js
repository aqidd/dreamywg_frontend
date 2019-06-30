import React, {Component} from 'react'
import {Layout} from 'antd'
import { Provider } from "mobx-react"
import initStore from "../stores/socialMediaAuthStore";
import CustomHeader from '../components/common/customHeader'
import CustomFooter from '../components/common/customFooter'
import SocialMediaContent from '../components/container/socialMediaAuthContainer'
import styled, { ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css'
const { Header, Footer } = Layout



const theme = 'light'

export default class Home extends Component {
    constructor(props) {
    super(props);
    this.store = initStore();
  }

  render = () => {
    return (
      <Provider SocialMediaAuthStore={this.store}>
        <div>
          <Layout>
            <StyledHeader
          style={{ backgroundColor: theme === 'dark' ? '#222' : 'white' }}
        >
          <CustomHeader theme={theme} />
            </StyledHeader>
            <SocialMediaContent theme={theme}/>
            <StyledFooter>
              <CustomFooter />
            </StyledFooter>
          </Layout>
        </div>
      </Provider>
    )
  }
}

const themeDecider = () => (theme == 'dark' ? '#222' : 'white')

const StyledHeader = styled(Header)`
  background-color: ${themeDecider()};
`
const StyledFooter = styled(Footer)`
  background-color: ${themeDecider()};
`
