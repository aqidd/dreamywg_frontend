import React from 'react'
import { Form, DatePicker, Button } from 'antd';
import { inject, observer } from 'mobx-react'

var AddScheduleForm = inject("store")(
    observer(({ store }) => {
      return (
        <Form layout="inline" onSubmit={console.log}>
            <Form.Item label="Start Date">
                <DatePicker/>
            </Form.Item>
            <Form.Item label="End Date">
                <DatePicker/>
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