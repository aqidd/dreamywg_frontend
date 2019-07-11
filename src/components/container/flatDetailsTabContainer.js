import React from 'react'
import { Tabs } from 'antd'
import AboutFlat from '../presentation/flat-details/aboutFlat'
import ResidentList from '../presentation/flat-details/residentList'
import RoomDetails from '../presentation/flat-details/roomDetails'
import InterviewContainer from '../container/interview/InterviewContainer'

const { TabPane } = Tabs

const FlatDetailsTab = props => (
  <Tabs defaultActiveKey="4">
    <TabPane tab="About" key="1">
      <AboutFlat />
    </TabPane>
    <TabPane tab="Rooms" key="2">
      <RoomDetails />
    </TabPane>
    <TabPane tab="Residents" key="3">
      <ResidentList />
    </TabPane>
    <TabPane tab="Interviews" key="4">
      <InterviewContainer />
    </TabPane>
  </Tabs>
)

export default FlatDetailsTab
