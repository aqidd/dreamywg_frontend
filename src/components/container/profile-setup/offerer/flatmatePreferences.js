import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {Button, Col, Form, Input, InputNumber, Row, Select, Switch} from 'antd'
import Title from '../../../common/title'
import Container from '../../../common/form/container'
import WrappedSelection from '../../../common/form/wrappedSelection'
import WrappedAnyInput from '../../../common/form/wrappedAnyInput'
import {
  activities,
  cleaningSchedule,
  cleanliness,
  flatshareExperience, genderPreference,
  genderRestriction,
  occupation,
  practiceOfAbstaining
} from "../../../../util/selections";

const Item = Form.Item;
const InputGroup = Input.Group;

const {Option} = Select;

@inject('store')
@observer
class FlatmatePreferences extends Component {
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
    const {getFieldDecorator} = this.props.form;

    return (
      <Container>
        <Title> Flatmate Preferences </Title>
        <Form layout={'vertical'}>
          <Row gutter={24}>
            <Col span={8}>
              <Item label="Gender">
                <WrappedSelection
                  placeHolder="Please select"
                  dec={getFieldDecorator}
                  objName="gender"
                  value={genderPreference}
                />
              </Item>
            </Col>
            <Col span={8}>
              <Item label="Age">
                <InputGroup compact>
                  <WrappedAnyInput
                    tag={<InputNumber style={{width: "40%", textAlign: 'center'}}/>}
                    dec={getFieldDecorator}
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
                    dec={getFieldDecorator}
                    objName="ageTo"
                  />
                </InputGroup>
              </Item>
            </Col>
            <Col span={8}>
              <Item label="Occupations">
                <WrappedSelection
                  placeHolder="Please select"
                  type="multiple"
                  dec={getFieldDecorator}
                  objName="occupations"
                  value={occupation}
                />
              </Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Item label="Required flatshare experience">
                <WrappedSelection
                  placeHolder="Please select"
                  dec={getFieldDecorator}
                  objName="flatshareExperience"
                  value={flatshareExperience}
                />
              </Item>
            </Col>
            <Col span={12}>
              <Item label="Accepted Practices of Abstaining">
                <WrappedSelection
                  placeHolder="Please select"
                  type="multiple"
                  dec={getFieldDecorator}
                  objName="practiceOfAbstaining"
                  value={practiceOfAbstaining}
                />
              </Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={8}>
              <Item label="Expected Cleanliness">
                <WrappedSelection
                  placeHolder="Please select"
                  dec={getFieldDecorator}
                  objName="cleanliness"
                  value={cleanliness}
                />
              </Item>
            </Col>
            <Col span={8}>
              <Item label="Cleaning schedule">
                <WrappedSelection
                  placeHolder="Please select"
                  dec={getFieldDecorator}
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
                  dec={getFieldDecorator}
                  objName="activities"
                  value={activities}
                />
              </Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={8}>
              <Item label="Smokers">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={getFieldDecorator}
                  objName="smokersAllowed"
                />
              </Item>
            </Col>
            <Col span={8}>
              <Item label="Pets">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={getFieldDecorator}
                  objName="petsAllowed"
                />
              </Item>
            </Col>
            <Col span={8}>
              <Item label="Weekend Absent">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={getFieldDecorator}
                  objName="weekendAbsent"
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

export default Form.create()(FlatmatePreferences)
