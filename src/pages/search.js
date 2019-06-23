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
          <Col xs={1} sm={1} md={4} lg={4} xl={4} />
          <Col xs={0} sm={0} md={3} lg={4} xl={4} />
          <Col xs={22} sm={22} md={16} lg={14} xl={14}>
            <SearchContainer />
          </Col>
          <Col xs={1} sm={1} md={1} lg={2} xl={2} />
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
