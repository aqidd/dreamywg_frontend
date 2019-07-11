import React, {Component} from 'react'
import styled from 'styled-components'
import {Button, Col, DatePicker, Form, Row, Switch} from 'antd'
import WrappedAnyInput from '../../common/form/wrappedAnyInput'
import regions from '../../../util/regions'
import {inject, observer} from 'mobx-react'
import NumberRange from "../profile-setup/flatsharePreferences/numberRange";
import {
  RegionSelection,
  TypeOfFlatshareSelection,
  TypeOfRentSelection
} from "../profile-setup/flatsharePreferences/commonFields";

const {Item} = Form
const {RangePicker} = DatePicker

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
    const {setFieldsValue} = this.props.form //todo here:
    const filterValues = this.props.store.filterValues
    setFieldsValue({
      preferences: {
        flat: {
          regions: filterValues.preferences.flat.regions,
          room: {
            size: {
              from: filterValues.preferences.flat.room.size.from,
              to: filterValues.preferences.flat.room.size.to,
            },
            rent: {
              from: filterValues.preferences.flat.room.rent.from,
              to: filterValues.preferences.flat.room.rent.to,
            },
            furnished: filterValues.preferences.flat.room.furnished,
            rentType: filterValues.preferences.flat.room.rentType,
            dateAvailable: filterValues.preferences.flat.room.dateAvailable,
            dateAvailableRange: filterValues.preferences.flat.room.dateAvailableRange,
          },
          flatshareType: filterValues.preferences.flat.flatshareType,

        },
        flatEquipment: {
          balcony: filterValues.preferences.flatEquipment.balcony
        },
        smokers: filterValues.preferences.smokers,
        pets: filterValues.preferences.pets
      }
    })
  }
  render = () => {
    const {getFieldDecorator, getFieldValue} = this.props.form
    return (
      <Border>
        <Container>
          <Form layout="vertical">
            <Row>
              <RegionSelection decorator={getFieldDecorator}/>

              <Row gutter={16}>
                <Col span={12}>
                  <NumberRange decorator={getFieldDecorator} itemLabel="Room size in m&sup2;"
                               objName={"preferences.flat.room.size"}/>
                </Col>
                <Col span={12}>
                  <NumberRange decorator={getFieldDecorator} itemLabel={"Rent in €"}
                               objName={"preferences.flat.room.rent"}/>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <TypeOfFlatshareSelection decorator={getFieldDecorator}/>
                </Col>
                <Col span={12}>
                  <TypeOfRentSelection decorator={getFieldDecorator}/>
                </Col>
              </Row>
              <Item label="Date available">
                <WrappedAnyInput
                  required
                  tag={getFieldValue("preferences.flat.room.rentType") === "limited" ? <RangePicker/> :
                    <DatePicker style={{width: "100%"}}/>}
                  dec={getFieldDecorator}
                  objName={getFieldValue("preferences.flat.room.rentType") === "limited" ? "preferences.flat.room.dateAvailableRange" : "preferences.flat.room.dateAvailable"}
                />
              </Item>
              <Row>
                <Col span={12}>
                  <Item label="Furnished">
                    <WrappedAnyInput
                      tag={<Switch defaultChecked={false}/>}
                      dec={getFieldDecorator}
                      objName="preferences.flat.room.furnished"
                    />
                  </Item>
                </Col>
                <Col span={12}>
                  <Item label="Balcony">
                    <WrappedAnyInput
                      tag={<Switch defaultChecked={false}/>}
                      dec={getFieldDecorator}
                      objName="preferences.flatEquipment.balcony"
                    />
                  </Item>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Item label="Smoke allowed">
                    <WrappedAnyInput
                      tag={<Switch defaultChecked={false}/>}
                      dec={getFieldDecorator}
                      objName="preferences.smokers"
                    />
                  </Item>
                </Col>
                <Col span={12}>
                  <Item label="Pet-allowed">
                    <WrappedAnyInput
                      tag={<Switch defaultChecked={false}/>}
                      dec={getFieldDecorator}
                      objName="preferences.pets"
                    />
                  </Item>
                </Col>
              </Row>
              <Row>
                <Col span={12}/>
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
