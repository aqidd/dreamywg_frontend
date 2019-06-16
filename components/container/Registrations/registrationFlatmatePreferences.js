import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import store from "../../../stores/registrationStepStore";
import {Button, Form, Input, InputNumber, Select, Switch} from 'antd';

const InputGroup = Input.Group;

const {Option} = Select;


@inject('store')
@observer
class RegistrationFlatmatePreferences extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.store.FlatmatePreferencesAgeFrom = values.FlatmatePreferencesAgeFrom;
        this.props.store.FlatmatePreferencesAgeTo = values.FlatmatePreferencesAgeTo;
        this.props.store.FlatmatePreferencesGender = values.FlatmatePreferencesGender;
        this.props.store.FlatmatePreferencesOccupations = values.FlatmatePreferencesOccupations;
        this.props.store.FlatmatePreferencesFlatshareExperience = values.FlatmatePreferencesFlatshareExperience;
        this.props.store.FlatmatePreferencesPracticeOfAbstaining = values.FlatmatePreferencesPracticeOfAbstaining;
        this.props.store.FlatmatePreferencesCleanliness = values.FlatmatePreferencesCleanliness;
        this.props.store.FlatmatePreferencesCleaningSchedule = values.FlatmatePreferencesCleaningSchedule;
        this.props.store.FlatmatePreferencesFlatshareActivities = values.FlatmatePreferencesFlatshareActivities;
        this.props.store.FlatmatePreferencesSmoker = values.FlatmatePreferencesSmoker;
        this.props.store.FlatmatePreferencesPetsAllowed = values.FlatmatePreferencesPetsAllowed;
        this.props.store.nextStep()
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>

        <Form.Item label="Gender">
          {getFieldDecorator('FlatmatePreferencesGender')(
            <Select placeholder="Please select">
              <Option value="Female">Females only</Option>
              <Option value="Male">Male only</Option>
              <Option value="Non">Both</Option>
            </Select>,
          )}
        </Form.Item>

        <Form.Item label="Age">
          <InputGroup compact>
            {getFieldDecorator('FlatmatePreferencesAgeFrom')(
              <InputNumber style={{width: 70, textAlign: 'center'}}/>)}
            <Input
              style={{
                width: 30,
                borderLeft: 0,
                pointerEvents: 'none',
                backgroundColor: '#fff',
              }}
              placeholder="-"
              disabled
            />
            {getFieldDecorator('FlatmatePreferencesAgeTo')(<InputNumber
              style={{width: 70, textAlign: 'center', borderLeft: 0}}/>)}
          </InputGroup>
        </Form.Item>


        <Form.Item label="Occupations">
          {getFieldDecorator('FlatmatePreferencesOccupations')(
            <Select mode="multiple" placeholder="Please select">
              <Option value="Student">Student</Option>
              <Option value="Working">Working</Option>
              <Option value="On Vacation">On Vacation</Option>
            </Select>
          )}
        </Form.Item>

        <Form.Item label="Required flatshare experience">
          {getFieldDecorator('FlatmatePreferencesFlatshareExperience')(
            <Select placeholder="Please select">
              <Option value="0">None</Option>
              <Option value="1">&lt; 1 year</Option>
              <Option value="2">&gt; 1 year</Option>
              <Option value="3">&gt; 2 years</Option>
            </Select>,
          )}
        </Form.Item>

        <Form.Item label="Accepted Practices of Abstaining">
          {getFieldDecorator('FlatmatePreferencesPracticeOfAbstaining')(
            <Select mode="multiple" placeholder="Please select">
              <Option value="Vegan">Vegan</Option>
              <Option value="Vegetarian">Vegetarian</Option>
              <Option value="Paleo">Paleo</Option>
            </Select>
          )}
        </Form.Item>

        <Form.Item label="Expected Cleanliness">
          {getFieldDecorator('FlatmatePreferencesCleanliness')(
            <Select placeholder="Please select">
              <Option value="0">We don't care</Option>
              <Option value="1">Common rooms should be tidied up regularly</Option>
              <Option value="2">Common rooms must always be clean</Option>
            </Select>,
          )}
        </Form.Item>


        <Form.Item label="Cleaning schedule">
          {getFieldDecorator('FlatmatePreferencesCleaningSchedule')(
            <Select placeholder="Please select">
              <Option value="0">None</Option>
              <Option value="1">Whole appartment cleand by one flatmate; (bi-)weekly & rotating</Option>
              <Option value="2">Each flatmate cleans 1-2 rooms; (bi-)weekly & rotating</Option>
              <Option value="3">Cleaningstaff</Option>
              <Option value="4">Others</Option>
            </Select>,
          )}
        </Form.Item>

        <Form.Item label="Flatshare activities">
          {getFieldDecorator('FlatmatePreferencesFlatshareActivities')(
            <Select
              mode="tags"
              placeholder="Please select"
              style={{width: '100%'}}
              tokenSeparators={[',']}
            >
              {['Cooking', 'Partying', 'Drinking Wine/Beer', 'Sport'].map(item => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
          )}
        </Form.Item>

        <Form.Item label="Smokers">
          {getFieldDecorator('FlatmatePreferencesSmoker')(
            <Switch/>
          )}
        </Form.Item>

        <Form.Item label="Pets">
          {getFieldDecorator('FlatmatePreferencesPetsAllowed')(
            <Switch/>
          )}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(RegistrationFlatmatePreferences);
