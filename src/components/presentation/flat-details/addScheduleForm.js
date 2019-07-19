import React from 'react'
import { Form, DatePicker, Button, Input } from 'antd';
import { inject, observer } from 'mobx-react'

const AddScheduleForm = inject("store")(
    observer(( {store} ) => {
      return (
        <Form layout="inline" onSubmit={store.interviewStore.submitSchedules}>
            {/* TODO : hidden form  */}
            <Input type="hidden" name="flatId" value={store.flatStore.id}/>
            <Form.Item label="Start Date">
                <DatePicker name="startDate"/>
            </Form.Item>
            <Form.Item label="End Date">
                <DatePicker name="endDate"/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
  }))

export default AddScheduleForm