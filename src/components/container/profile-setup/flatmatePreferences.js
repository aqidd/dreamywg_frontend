import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Form, Input, InputNumber, Select, Switch } from 'antd'
import Title from '../../common/title'
import Container from '../../common/form/container'
import WrappedSelection from '../../common/form/wrappedSelection'
import WrappedAnyInput from '../../common/form/wrappedAnyInput'

const Item = Form.Item
const InputGroup = Input.Group

const { Option } = Select

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
  }
  displayError = obj => {
    const errorValue = Object.keys(obj).reduce((a, b) => a + ' ' + b)
    alert('Please complete the following field : ' + errorValue)
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <Container>
        <Title> Flat Preferences </Title>
        <Form layout={'vertical'}>
          <Item label="Gender">
            <WrappedSelection
              placeHolder="Please select"
              dec={getFieldDecorator}
              objName="gender"
              value={['Females only', 'Male only', 'Both']}
            />
          </Item>

          <Item label="Age">
            <InputGroup compact>
              {getFieldDecorator('FlatmatePreferencesAgeFrom')(
                <InputNumber style={{ width: 70, textAlign: 'center' }} />
              )}
              <Input
                style={{
                  width: 30,
                  borderLeft: 0,
                  pointerEvents: 'none',
                  backgroundColor: '#fff'
                }}
                placeholder="-"
                disabled
              />
              {getFieldDecorator('FlatmatePreferencesAgeTo')(
                <InputNumber
                  style={{ width: 70, textAlign: 'center', borderLeft: 0 }}
                />
              )}
            </InputGroup>
          </Item>

          <Item label="Occupations">
            <WrappedSelection
              placeHolder="Add nearby station"
              type="multiple"
              dec={getFieldDecorator}
              objName="occupations"
              value={['Student', 'Working', 'On Vacation']}
            />
          </Item>

          <Item label="Required flatshare experience">
            <WrappedSelection
              required
              placeHolder="Please select"
              dec={getFieldDecorator}
              objName="flatshareExperience"
              value={['None', '≤ 1 year', '> 1 year', '> 2 year']}
            />
          </Item>

          <Item label="Accepted Practices of Abstaining">
            <WrappedSelection
              placeHolder="Please select"
              type="multiple"
              dec={getFieldDecorator}
              objName="practiceOfAbstaining"
              value={['Vegan', 'Vegetarian', 'Paleo']}
            />
          </Item>

          <Item label="Expected Cleanliness">
            <WrappedSelection
              placeHolder="Please select"
              dec={getFieldDecorator}
              objName="cleanliness"
              value={[
                "We don't care",
                'Common rooms should be tidied up regularly',
                'Common rooms must always be clean'
              ]}
            />
          </Item>

          <Item label="Cleaning schedule">
            <WrappedSelection
              placeHolder="Please select"
              dec={getFieldDecorator}
              objName="cleaningSchedule"
              value={[
                'None',
                'Whole appartment cleand by one flatmate; (bi-)weekly &rotating',
                'Each flatmate cleans 1-2 rooms; (bi-)weekly & rotating',
                'Cleaningstaff',
                'Others'
              ]}
            />
          </Item>

          <Form.Item label="Flatshare activities">
            {getFieldDecorator('FlatmatePreferencesFlatshareActivities')(
              <Select
                mode="tags"
                placeholder="Please select"
                style={{ width: '100%' }}
                tokenSeparators={[',']}
              >
                {['Cooking', 'Partying', 'Drinking Wine/Beer', 'Sport'].map(
                  item => (
                    <Option key={item} value={item}>
                      {item}
                    </Option>
                  )
                )}
              </Select>
            )}
          </Form.Item>

          <Item label="Smokers">
            <WrappedAnyInput
              tag={<Switch defaultChecked={false} />}
              dec={getFieldDecorator}
              objName="smokersAllowed"
            />
          </Item>

          <Item label="Pets">
            <WrappedAnyInput
              tag={<Switch defaultChecked={false} />}
              dec={getFieldDecorator}
              objName="petsAllowed"
            />
          </Item>

          <Button
            style={{ float: 'right' }}
            htmlType="submit"
            onClick={result => this.handleResult('Next', result)}
            type="primary"
          >
            Next
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
