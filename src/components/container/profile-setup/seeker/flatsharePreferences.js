import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {Button, Col, DatePicker, Form, Input, InputNumber, Row, Select, Switch} from 'antd'
import Title from '../../../common/title'
import Container from '../../../common/form/container'
import WrappedSelection from '../../../common/form/wrappedSelection'
import WrappedAnyInput from '../../../common/form/wrappedAnyInput'
import Stations from "../../../../util/shortStations";
import Regions from "../../../../util/regions";
import {
  activities,
  cleaningSchedule,
  cleanliness,
  genderRestriction,
  stores,
  flatshareType,
  rentType
} from "../../../../util/selections";

const Item = Form.Item;
const InputGroup = Input.Group;
const {RangePicker} = DatePicker;
const {Option} = Select;

@inject('store')
@observer
class FlatsharePreferences extends Component {
  handleResult = (type, result) => {
    result.preventDefault();
    this.props.form.validateFields((error, values) => {
      error && type !== 'Back'
        ? this.displayError(error)
        : type === 'Next'
        ? this.props.onNext(values)
        : this.props.onBack(values)
    })
  };
  displayError = obj => {
    const errorValue = Object.keys(obj).reduce((a, b) => a + ' ' + b);
    alert('Please complete the following field : ' + errorValue)
  };

  render() {
    const decorator = this.props.form.getFieldDecorator;

    return (
      <Container>
        <Title> Flat Preferences </Title>
        <Form layout={'vertical'}>

          <Row gutter={24}>
            <Col span={12}>
              <Item label="Regions">
                <WrappedSelection
                  placeHolder="Please select"
                  type="multiple"
                  dec={decorator}
                  objName="regions"
                  value={Regions}
                />
              </Item>
            </Col>
            <Col span={6}>
              <Item label="Type of rent">
                <WrappedSelection
                  placeHolder="Please select"
                  dec={decorator}
                  objName="rentType"
                  value={rentType}
                />
              </Item>
            </Col>
            <Col span={6}>
              <Item label="Type of flatshare">
                <WrappedSelection
                  tag="multiple"
                  placeHolder="Please select"
                  dec={decorator}
                  objName="flatshareType"
                  value={flatshareType}
                />
              </Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Item label="Room size in m&sup2;">
                <InputGroup compact>
                  <WrappedAnyInput
                    tag={<InputNumber style={{width: "40%", textAlign: 'center'}}/>}
                    dec={decorator}
                    objName="roomSizeFrom"
                  />
                  <Input
                    style={{
                      width: "20%",
                      borderLeft: 0,
                      pointerEvents: 'none',
                      backgroundColor: '#fff'
                    }}
                    placeholder="-"
                    disabled
                  />
                  <WrappedAnyInput
                    tag={<InputNumber style={{width: "40%", textAlign: 'center', borderLeft: 0}}/>}
                    dec={decorator}
                    objName="roomSizeTo"
                  />
                </InputGroup>
              </Item>
            </Col>
            <Col span={8}>

              <Item label="Rent in €">
                <InputGroup compact>
                  <WrappedAnyInput
                    tag={<InputNumber style={{width: "40%", textAlign: 'center'}}/>}
                    dec={decorator}
                    objName="rentFrom"
                  />
                  <Input
                    style={{
                      width: "20%",
                      borderLeft: 0,
                      pointerEvents: 'none',
                      backgroundColor: '#fff'
                    }}
                    placeholder="-"
                    disabled
                  />
                  <WrappedAnyInput
                    tag={<InputNumber style={{width: "40%", textAlign: 'center', borderLeft: 0}}/>}
                    dec={decorator}
                    objName="rentTo"
                  />
                </InputGroup>
              </Item>
            </Col>
            <Col span={8}>
              <Item label="Date available">
                <WrappedAnyInput
                  tag={<RangePicker style={{width: "100%"}} placeholder={["earliest", "latest"]}/>}
                  dec={decorator}
                  objName="dateAvailable"
                />
              </Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Item label="Gender">
                <WrappedSelection
                  placeHolder="Please select"
                  dec={decorator}
                  objName="genderRestriction"
                  value={genderRestriction}
                />
              </Item>
            </Col>
            <Col span={8}>

              <Item label="Flatmates age">
                <InputGroup compact>
                  <WrappedAnyInput
                    tag={<InputNumber style={{width: "40%", textAlign: 'center'}}/>}
                    dec={decorator}
                    objName="ageFrom"
                  />
                  <Input
                    style={{
                      width: "20%",
                      borderLeft: 0,
                      pointerEvents: 'none',
                      backgroundColor: '#fff'
                    }}
                    placeholder="-"
                    disabled
                  />
                  <WrappedAnyInput
                    tag={<InputNumber style={{width: "40%", textAlign: 'center', borderLeft: 0}}/>}
                    dec={decorator}
                    objName="ageTo"
                  />
                </InputGroup>
              </Item>
            </Col>

            <Col span={8}>
              <Item label="Flatmates">
                <InputGroup compact>
                  <WrappedAnyInput
                    tag={<InputNumber style={{width: "40%", textAlign: 'center'}}/>}
                    dec={decorator}
                    objName="flatmatesFrom"
                  />
                  <Input
                    style={{
                      width: "20%",
                      borderLeft: 0,
                      pointerEvents: 'none',
                      backgroundColor: '#fff'
                    }}
                    placeholder="-"
                    disabled
                  />
                  <WrappedAnyInput
                    tag={<InputNumber style={{width: "40%", textAlign: 'center', borderLeft: 0}}/>}
                    dec={decorator}
                    objName="flatmatesTo"
                  />
                </InputGroup>
              </Item>
            </Col>
          </Row>
          <hr/>
          <br/>

          <Row gutter={24}>
            <Col span={12}>
              <Item label="Stations Nearby">
                <WrappedSelection
                  placeHolder="Please select"
                  type="multiple"
                  dec={decorator}
                  objName="stations"
                  value={Stations}
                />
              </Item>
            </Col>
            <Col span={12}>
              <Item label="Stores nearby">
                <WrappedSelection
                  placeHolder="Please select"
                  type="multiple"
                  dec={decorator}
                  objName="stores"
                  value={stores}
                />
              </Item>
            </Col>
          </Row>

          <hr/>
          <br/>
          <h2>Flat properties and Equipment</h2>

          <Row>
            <Col span={8}>
              <Item label="Furnished">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={decorator}
                  objName="furnished"
                />
              </Item>
            </Col>
            <Col span={8}>
              <Item label="Parking lot">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={decorator}
                  objName="parkingLot"
                />
              </Item>
            </Col>
            <Col span={8}>
              <Item label="Separate living room">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={decorator}
                  objName="livingroom"
                />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Item label="Shower">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={decorator}
                  objName="shower"
                />
              </Item>
            </Col>
            <Col span={8}>
              <Item label="Bathtub">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={decorator}
                  objName="bathtub"
                />
              </Item>
            </Col>
            <Col span={8}>
              <Item label="Kitchen">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={decorator}
                  objName="kitchen"
                />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Item label="Internet">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={decorator}
                  objName="internet"
                />
              </Item>
            </Col>
            <Col span={8}>
              <Item label="Balcony">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={decorator}
                  objName="balcony"
                />
              </Item>
            </Col>
            <Col span={8}>
              <Item label="Terrace">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={decorator}
                  objName="terrace"
                />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Item label="Garden">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={decorator}
                  objName="garden"
                />
              </Item>
            </Col>
            <Col span={8}>
              <Item label="Washing machine">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={decorator}
                  objName="washingMachine"
                />
              </Item>
            </Col>
            <Col span={8}>
              <Item label="Dishwasher">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={decorator}
                  objName="dishwasher"
                />
              </Item>
            </Col>
          </Row>
          <hr/>
          <br/>
          <h2>Flatshare living</h2>
          <Row gutter={24}>
            <Col span={8}>
              <Item label="Expected Cleanliness">
                <WrappedSelection
                  placeHolder="Please select"
                  dec={decorator}
                  objName="cleanliness"
                  value={cleanliness}
                />
              </Item>
            </Col>
            <Col span={8}>

              <Item label="Cleaning schedule">
                <WrappedSelection
                  placeHolder="Please select"
                  dec={decorator}
                  objName="cleaningSchedule"
                  value={cleaningSchedule}
                />
              </Item>
            </Col>
            <Col span={8}>
              <Item label="Flatshare activities">
                <WrappedSelection
                  type="tags"
                  placeHolder="Please select"
                  dec={decorator}
                  objName="activities"
                  value={activities}
                />
              </Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Item label="Smokers">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={decorator}
                  objName="smokers"
                />
              </Item>
            </Col>
            <Col span={12}>
              <Item label="Pets">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={decorator}
                  objName="pets"
                />
              </Item>
            </Col>
          </Row>

          <Button
            style={{float: 'right'}}
            htmlType="submit"
            onClick={result => this.handleResult('Next', result)}
            type="primary"
          >
            Submit
          </Button>
          <Button
            htmlType="submit"
            onClick={result => this.handleResult('Back', result)}
          >
            Back
          </Button>
        </Form>
      </Container>
    )
  }
}

export default Form.create()(FlatsharePreferences)
