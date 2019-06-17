import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import store from '../../../stores/registrationStepStore'
import {Button, Form, Input, InputNumber, Select, Switch} from 'antd'
import Title from '../../common/title'
import {Container, Item, Selections, WrappedOthersInput} from '../../common/Form'

const InputGroup = Input.Group;

const {Option} = Select;

@inject('store')
@observer
class RegistrationFlatmatePreferences extends Component {
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

  render() {
    const {getFieldDecorator} = this.props.form;

    return (
      <Container>
        <Title> Flat Preferences </Title>
        <Form layout={'vertical'}>
          <Item label="Gender">
            <Selections
              placeHolder="Please select"
              dec={getFieldDecorator}
              objName="gender"
              value={['Females only', 'Male only', 'Both']}
            />
          </Item>

          <Item label="Age">
            <InputGroup compact>
              {getFieldDecorator('FlatmatePreferencesAgeFrom')(
                <InputNumber style={{width: 70, textAlign: 'center'}}/>
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
                  style={{width: 70, textAlign: 'center', borderLeft: 0}}
                />
              )}
            </InputGroup>
          </Item>

          <Item label="Occupations">
            <Selections
              placeHolder="Add nearby station"
              type="multiple"
              dec={getFieldDecorator}
              objName="occupations"
              value={['Student', 'Working', 'On Vacation']}
            />
          </Item>

          <Item label="Required flatshare experience">
            {getFieldDecorator('flatshareExperience')(
              <Select placeholder="Please select">
                <Option value="0">None</Option>
                <Option value="1">&lt; 1 year</Option>
                <Option value="2">&gt; 1 year</Option>
                <Option value="3">&gt; 2 years</Option>
              </Select>
            )}
          </Item>

          <Item label="Accepted Practices of Abstaining">
            <Selections
              placeHolder="Please select"
              type="multiple"
              dec={getFieldDecorator}
              objName="practiceOfAbstaining"
              value={['Vegan', 'Vegetarian', 'Paleo']}
            />
          </Item>

          <Item label="Expected Cleanliness">
            <Selections
              placeHolder="Please select"
              dec={getFieldDecorator}
              objName="cleanliness"
              value={['We don\'t care', 'Common rooms should be tidied up regularly', 'Common rooms must always be clean']}
            />
          </Item>

          <Item label="Cleaning schedule">
            <Selections
              placeHolder="Please select"
              dec={getFieldDecorator}
              objName="cleaningSchedule"
              value={['None', 'Whole appartment cleand by one flatmate; (bi-)weekly &rotating', 'Each flatmate cleans 1-2 rooms; (bi-)weekly & rotating', 'Cleaningstaff', 'Others']}
            />
          </Item>

          <Form.Item label="Flatshare activities">
            {getFieldDecorator('FlatmatePreferencesFlatshareActivities')(
              <Select
                mode="tags"
                placeholder="Please select"
                style={{width: '100%'}}
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
            <WrappedOthersInput
              tag={<Switch defaultChecked={false}/>}
              dec={getFieldDecorator}
              objName="smokersAllowed"
            />
          </Item>

          <Item label="Pets">
            <WrappedOthersInput
              tag={<Switch defaultChecked={false}/>}
              dec={getFieldDecorator}
              objName="petsAllowed"
            />
          </Item>

          <Button
            style={{float: 'right'}}
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


export default Form.create()(RegistrationFlatmatePreferences)
