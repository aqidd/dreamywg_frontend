import React from 'react'
import { Tabs } from 'antd';
import AboutFlat from '../presentation/flat-details/aboutFlat';
import ResidentList from '../presentation/flat-details/residentList';
import RoomDetails from '../presentation/flat-details/roomDetails';
import InterviewDetails from '../presentation/flat-details/interviewDetails';

const { TabPane } = Tabs;

const FlatDetailsTab = props => (

  <Tabs defaultActiveKey="1">
    <TabPane tab="About" key="1">
      <AboutFlat></AboutFlat>
    </TabPane>
    <TabPane tab="Rooms" key="2">
      <RoomDetails></RoomDetails>
    </TabPane>
    <TabPane tab="Residents" key="3">
      <ResidentList></ResidentList>
    </TabPane>
    <TabPane tab="Interviews" key="4">
      <InterviewDetails></InterviewDetails>
    </TabPane>
  </Tabs>

)

export default FlatDetailsTab