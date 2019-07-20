import React from 'react'
import { Form, TimePicker, Input, Button } from 'antd';
import { inject, observer } from 'mobx-react'

var AddTimeslotForm = inject("store")(
    observer(({ store }) => {
      return (
        <Form layout="inline" onSubmit={store.interviewStore.submitTimeslots}>
            {/* TODO : hidden form since current schedule is unreadable in interview store */}
            <Input type="hidden" name="scheduleId" value={store.interviewStore.currentSchedule._id}/>
            <Form.Item>
                <TimePicker name="startTime" placeholder="Start Time"/>
            </Form.Item>
            <Form.Item>
                <TimePicker name="endTime" placeholder="End Time"/>
            </Form.Item>
            <Form.Item>
                <Input name="sessionTime" placeholder="Duration (minute)"/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
  }))

export default AddTimeslotForm