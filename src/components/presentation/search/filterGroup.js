import React, { Component } from 'react'
import styled from 'styled-components'
import { Form, Input, Row, Col, Switch, DatePicker, Button } from 'antd'
import WrappedInput from '../../common/form/wrappedInput'
import WrappedSelection from '../../common/form/wrappedSelection'
import WrappedAnyInput from '../../common/form/wrappedAnyInput'
import WrappedAutoComplete from '../../common/form/wrappedAutoComplete'
import regions from '../../../util/regions'
import { inject, observer } from 'mobx-react'
import {flatshareType, rentType} from "../../../util/selections";

const { Item } = Form
const { RangePicker } = DatePicker

@inject('store')
@observer
class FilterGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: regions
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch = value =>
    this.setState({
      data: regions.filter(
        element => element.toLowerCase().indexOf(value.toLowerCase()) != -1
      )
    })

  handleResult = (type, result) => {
    result.preventDefault()
    this.props.form.validateFields((error, values) => {
      error && type != 'Back'
        ? this.displayError(error)
        : this.props.store.onSearch(values)
    })
  }

  componentDidMount = () => {
    const { setFieldsValue } = this.props.form
    setFieldsValue({
      location: 'Munchen' //set initial value of form here!!!
    })
  }
  render = () => {
    const { getFieldDecorator } = this.props.form
    return (
      <Border>
        <Container>
          <Form layout="vertical">
            <Row>
              <Item label="Regions">
                <WrappedAutoComplete
                  objName="regions"
                  dec={getFieldDecorator}
                  data={this.state.data}
                  placeHolder="Regions in Munich"
                  handleSearch={value => this.handleSearch(value)}
                />
              </Item>

              <Input.Group>
                <Row gutter={16}>
                  <Col span={12}>
                    <Item label="Flat size">
                      <WrappedInput
                        dec={getFieldDecorator}
                        objName="size"
                        placeHolder="flatSize"
                        suffix="m&sup2;"
                        type="number"
                      />
                    </Item>
                  </Col>
                  <Col span={12}>
                    <Item label="Room size">
                      <WrappedInput
                        dec={getFieldDecorator}
                        objName="roomSize"
                        placeHolder="Room"
                        suffix="m&sup2;"
                        type="number"
                      />
                    </Item>
                  </Col>
                </Row>
              </Input.Group>

              <Item label="Price">
                <Input.Group>
                  <Row gutter={16}>
                    <Col span={12}>
                      <WrappedInput
                        dec={getFieldDecorator}
                        objName={'mininum-price'}
                        placeHolder="Minimum"
                        suffix="€"
                      />
                    </Col>
                    <Col span={12}>
                      <WrappedInput
                        dec={getFieldDecorator}
                        objName={'maximum-price'}
                        placeHolder="Maximum"
                        suffix="€"
                      />
                    </Col>
                  </Row>
                </Input.Group>
              </Item>
              <Item label="Type of rent">
                <WrappedSelection
                  placeHolder="Select your rental type"
                  dec={getFieldDecorator}
                  objName="rentType"
                  value={rentType}
                />
              </Item>
              <Item label="Type of flat">
                <WrappedSelection
                  placeHolder="Select flat type"
                  dec={getFieldDecorator}
                  objName="flatshareType"
                  value={flatshareType}
                />
              </Item>
              <Item label="Dates">
                <WrappedAnyInput
                  tag={<RangePicker />}
                  dec={getFieldDecorator}
                  objName="dates"
                />
              </Item>
              <Row>
                <Col span={12}>
                  <Item label="Furnished">
                    <WrappedAnyInput
                      tag={<Switch defaultChecked={false} />}
                      dec={getFieldDecorator}
                      objName="furnished"
                    />
                  </Item>
                </Col>
                <Col span={12}>
                  <Item label="Balcony">
                    <WrappedAnyInput
                      tag={<Switch defaultChecked={false} />}
                      dec={getFieldDecorator}
                      objName="balcony"
                    />
                  </Item>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Item label="Smoke allowed">
                    <WrappedAnyInput
                      tag={<Switch defaultChecked={false} />}
                      dec={getFieldDecorator}
                      objName="smoker"
                    />
                  </Item>
                </Col>
                <Col span={12}>
                  <Item label="Pet-allowed">
                    <WrappedAnyInput
                      tag={<Switch defaultChecked={false} />}
                      dec={getFieldDecorator}
                      objName="pet"
                    />
                  </Item>
                </Col>
              </Row>
              <Row>
                <Col span={12} />
                <Col span={12}> </Col>
              </Row>
            </Row>
            <Footer>
              <Button
                onClick={data => this.handleResult(0, data)}
                size="large"
                htmlType="submit"
                block
                type="primary"
              >
                Search
              </Button>
            </Footer>
          </Form>
        </Container>
      </Border>
    )
  }
}

const Border = styled.div`
  border-right: 1px solid lightgray;
  height: 80vh;
`

const Container = styled.div`
  margin: 5vh 5vh 5vh 5vh;
  display: flex;
  flex-direction: column;
`

const Footer = styled(Row)`
  margin-top: 5vh;
  float: bottom;
`

export default Form.create()(FilterGroup)
