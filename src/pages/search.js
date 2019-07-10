import React, { Component } from 'react'
import { Layout, Pagination } from 'antd'
import SearchContainer from '../components/container/search/searchContainer'
import styled from 'styled-components'
import FilterGroup from '../components/presentation/search/filterGroup'
import { Provider } from 'mobx-react'
import SearchStore from '../stores/searchStore'
import DefaultHeader from "../components/common/defaultHeader";

const { Sider, Content } = Layout

export default class SearchScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      priceRange: [0, 10000]
    }
  }
  render() {
    return (
      <Provider store={SearchStore}>
        <Layout>
          <DefaultHeader/>
          <Layout>
            <StyledSider
              breakpoint="lg"
              collapsedWidth={0}
              width={400}
              theme="light"
            >
              <FilterGroup
                priceRange={[100, 10000]}
                sliderChange={value => console.log(value)}
              />
            </StyledSider>
            <StyledContent>
              <SearchContainer />
            </StyledContent>
          </Layout>
        </Layout>
      </Provider>
    )
  }
}

const StyledSider = styled(Sider)`
  display: flex;
  margin-top: 7vh;
  position: fixed;
  left: 0;
`

const StyledContent = styled(Content)`
  background-color: white;
  overflow: auto;
`
