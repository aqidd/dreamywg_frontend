import React from 'react'
import { Form, TimePicker, Input, Button } from 'antd';
import { inject, observer } from 'mobx-react'

var AddTimeslotForm = inject("store")(
    observer(({ store }) => {
      return (
        <Form layout="horizontal" onSubmit={store.interviewStore.submitTimeslots}>
            {/* TODO : hidden form since current schedule is unreadable in interview store */}
            <Input type="hidden" name="scheduleId" value={store.interviewStore.currentSchedule._id}/>
            <Form.Item label="Start Time">
                <TimePicker name="startTime"/>
            </Form.Item>
            <Form.Item label="End Time">
                <TimePicker name="endTime"/>
            </Form.Item>
            <Form.Item label="Duration per person">
                <Input name="sessionTime"/>
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