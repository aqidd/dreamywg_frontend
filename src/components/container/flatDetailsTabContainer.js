import React from 'react'
import { Tabs } from 'antd'
import AboutFlat from '../presentation/flat-details/aboutFlat'
import ResidentList from '../presentation/flat-details/residentList'
import InterviewContainer from '../container/interview/InterviewContainer'
import { inject, observer, Provider } from 'mobx-react'

const { TabPane } = Tabs

const FlatDetailsTab = inject("store")(
  observer(({ store }) => {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="About" key="1">
          <Provider store={store}>
            <AboutFlat></AboutFlat>
          </Provider>
        </TabPane>
        <TabPane tab="Residents" key="2">
          <Provider store={store}>
            <ResidentList></ResidentList>
          </Provider>
        </TabPane>
        <TabPane tab="Interviews" key="3">
          <Provider store={store}>
            <InterviewContainer></InterviewContainer>
          </Provider>
        </TabPane>
      </Tabs>
  );
}))

export default FlatDetailsTab
