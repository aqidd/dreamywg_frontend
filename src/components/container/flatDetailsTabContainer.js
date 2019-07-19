import React from 'react'
import { Tabs } from 'antd'
import AboutFlat from '../presentation/flat-details/aboutFlat'
import ResidentList from '../presentation/flat-details/residentList'
import InterviewContainer from '../container/interview/InterviewContainer'
import { inject, observer, Provider } from 'mobx-react'
import ChatContainer from '../container/chatContainer'

const { TabPane } = Tabs

const FlatDetailsTab = inject('store')(
  observer(({ store }) => {
    return (
      <Tabs
        animated={false}
        tabBarStyle={{ textAlign: 'center' }}
        defaultActiveKey="4"
      >
        <TabPane tab="About" key="1">
          <Provider store={store}>
            <AboutFlat />
          </Provider>
        </TabPane>
        <TabPane tab="Residents" key="2">
          <Provider store={store}>
            <ResidentList />
          </Provider>
        </TabPane>
        <TabPane tab="Interviews" key="3">
          <Provider store={store}>
            <InterviewContainer />
          </Provider>
        </TabPane>
        <TabPane tab="Messages" key="4">
          <ChatContainer />
        </TabPane>
      </Tabs>
    )
  })
)

export default FlatDetailsTab
