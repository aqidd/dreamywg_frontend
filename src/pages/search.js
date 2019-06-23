import React, { Component } from 'react'
import { Layout, Menu, Icon, Row, Col } from 'antd'
import CustomHeader from '../components/common/customHeader'
import SearchContainer from '../components/container/search/searchContainer'
import styled from 'styled-components'

const { SubMenu } = Menu
const { Header, Sider, Content } = Layout

export default class SearchScreen extends Component {
  render() {
    return (
      <Layout>
        <Header
          style={{
            backgroundColor: 'white',
            border: 'solid',
            borderColor: 'lightgray',
            borderWidth: '1px'
          }}
        />
        <Layout>
          <StyledSider
            breakpoint="xl"
            collapsedWidth={0}
            width={400}
            theme="light"
          />
          <Content style={{ backgroundColor: 'white' }}>
            <SearchContainer />
          </Content>
        </Layout>
      </Layout>
    )
  }
}

const StyledSider = styled(Sider)`
  border-right: 1px solid lightgray;
`

const StyledRow = styled(Row)`
  background-color: white;
`
