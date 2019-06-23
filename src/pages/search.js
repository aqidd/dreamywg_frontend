import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd'
import CustomHeader from '../components/common/customHeader'
import SearchContainer from '../components/container/search/searchContainer'
import styled from 'styled-components'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

export default class SearchScreen extends Component {
  render() {
    return (
      <Layout>
        <Header style={{ backgroundColor: 'white' }} />
        <StyledRow>
            <SearchContainer />
        </StyledRow>
      </Layout>
    )
  }
}

const StyledHeader = styled(Header)`
  background-color: white;
`

const StyledSider = styled(Sider)`
  background: white;
`

const StyledRow = styled(Row)`
  background-color: white;
`
