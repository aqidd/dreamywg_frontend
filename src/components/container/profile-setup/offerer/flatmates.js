import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {Button, Col, Form, Icon, Row} from 'antd'
import Container from '../../../common/form/container'
import FlatmateItem from '../../../presentation/profile-setup/FlatDetails/flatmateitem'
import Title from '../../../common/title'
import ControlButton from '../../../common/form/controlButtons'
import styled from 'styled-components'

let id = 0

@inject('store')
@observer
class Flatmates extends Component {
  remove = k => {
    const {form} = this.props
    // can use data-binding to get
    const keys = form.getFieldValue('keys')
    // We need at least one passenger
    if (keys.length === 1) {
      return
    }
    form.setFieldsValue({
      keys: keys.filter(key => key !== k)
    })
  }

  add = () => {
    const {form} = this.props
    const keys = form.getFieldValue('keys')
    const nextKeys = keys.concat(id++)
    form.setFieldsValue({
      keys: nextKeys
    })
  }

  handleResult = (type, result) => {
    result.preventDefault()

    this.props.form.validateFields((error, values) => {
      error && type !== 'Back'
        ? this.props.displayError(error)
        : type === 'Next'
        ? this.props.onNext(values)
        : this.props.onBack(values)
    })
  }



  render() {
    const {getFieldDecorator, getFieldValue} = this.props.form
    getFieldDecorator('keys', {initialValue: []})
    const keys = getFieldValue('keys')
    const formItems = keys.map((k, index) => (
      <FlatmateItem index={k} decorator={getFieldDecorator} fieldValue={getFieldValue}/>
    ))
    return (
      <Container>
        <Title>Flatmates</Title>
        <Form layout="vertical">
          {formItems}
          <RowContainer>
            <Col span={24}>
              <Button type="dashed" onClick={() => this.add()} block>
                <Icon type="plus"/> Click here to add flatmate
              </Button>
            </Col>
          </RowContainer>
          <ControlButton
            onClick={(type, result) => this.handleResult(type, result)}
            next="Next"
            back="Back"
          />
        </Form>
      </Container>
    )
  }
}

const RowContainer = styled(Row)`
  margin-bottom: 5vh;
`

export default Form.create()(Flatmates)
