import React from 'react'
import { Form, TimePicker, Input, Button } from 'antd';
import { inject, observer } from 'mobx-react'

var AddTimeslotForm = inject("store")(
    observer(({ store }) => {
      return (
        <Form layout="horizontal" onSubmit={console.log}>
            <Form.Item label="Start Time">
                <TimePicker/>
            </Form.Item>
            <Form.Item label="End Time">
                <TimePicker/>
            </Form.Item>
            <Form.Item label="Duration per person">
                <Input/>
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