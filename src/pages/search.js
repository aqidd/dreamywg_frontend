import React, {Component} from 'react'
import {Layout} from 'antd'
import SearchContainer from '../components/container/search/searchContainer'
import styled from 'styled-components'
import FilterGroup from '../components/presentation/search/filterGroup'
import {Provider} from 'mobx-react'
import SearchStore from '../stores/searchStore'
import MainLayout from '../components/presentation/mainLayout';

const {Sider, Content} = Layout
const theme = "light"

export default class SearchScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      priceRange: [0, 10000]
    }
  }

  render() {
    return (
      <MainLayout>
        <Provider store={SearchStore}>
            <Layout>
              <StyledSider
                breakpoint="lg"
                collapsedWidth={0}
                width={400}
                theme="light"
              >
                <FilterGroup/>
              </StyledSider>
              <StyledContent>
                <SearchContainer/>
              </StyledContent>
            </Layout>
        </Provider>
      </MainLayout>
      
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
