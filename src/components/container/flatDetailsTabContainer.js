import React from 'react'
import { Tabs } from 'antd';
import AboutFlat from '../presentation/flat-details/aboutFlat';
import ResidentList from '../presentation/flat-details/residentList';
import InterviewDetails from '../presentation/flat-details/interviewDetails';
import { inject, observer, Provider } from 'mobx-react'

const { TabPane } = Tabs;

var FlatDetailsTab = inject("store")(
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
          <InterviewDetails></InterviewDetails>
        </TabPane>
      </Tabs>
    );
  })
)

export default FlatDetailsTab