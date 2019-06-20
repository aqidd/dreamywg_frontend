import React, { Component } from 'react'
import { Layout } from 'antd'
import CustomHeader from '../components/container/customHeader'
import RoleSelection from '../components/container/roleSelection'
import CustomFooter from '../components/container/customFooter'
import 'antd/dist/antd.css'
import styled, { ThemeProvider } from 'styled-components'
import { Provider } from "mobx-react"
const { Header, Footer } = Layout

const theme = 'dark'

export default class RoleSelectionScreen extends Component {
  constructor(props) {
    super(props)
    this.store = initStore()
  }
  render = () => (
    <Provider RoleSelectionStore={this.store}>
    <div>
      <Layout>
        <StyledHeader
          style={{ backgroundColor: theme === 'dark' ? '#222' : 'white' }}
        >
          <CustomHeader theme={theme} />
        </StyledHeader>
        <RoleSelection theme={theme} />
        <StyledFooter>
           <CustomFooter />
        </StyledFooter>
      </Layout>
    </div>
    </Provider>
  )
}

const themeDecider = () => (theme == 'dark' ? '#222' : 'white')

const StyledHeader = styled(Header)`
  background-color: ${themeDecider()};
`
const StyledFooter = styled(Footer)`
  background-color: ${themeDecider()};
`
