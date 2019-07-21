import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Col, DatePicker, Form, Input, Row, Select, Switch } from 'antd'
import Title from '../../../common/title'
import Container from '../../../common/form/container'
import WrappedSelection from '../../../common/form/wrappedSelection'
import WrappedAnyInput from '../../../common/form/wrappedAnyInput'
import {
  activities,
  cleaningSchedule,
  cleanliness,
  genderRestriction,
  stores
} from '../../../../util/selections'
import NumberRange from '../../../presentation/profile-setup/flatsharePreferences/numberRange'
import SwitchGroup from '../../../presentation/profile-setup/FlatDetails/switchGroup'
import {
  RegionSelection,
  TypeOfFlatshareSelection,
  TypeOfRentSelection
} from '../../../presentation/profile-setup/flatsharePreferences/commonFields'
import ControlButton from '../../../common/form/controlButtons'

const Item = Form.Item
const { RangePicker } = DatePicker
const { Option } = Select

@inject('store')
@observer
class FlatsharePreferences extends Component {
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
    const decorator = this.props.form.getFieldDecorator
    const fieldValue = this.props.form.getFieldValue

    return (
      <Container>
        <Title> Flatshare Preferences </Title>
        <Form layout={'vertical'}>
          <Row gutter={24}>
            <Col span={12}>
              <RegionSelection decorator={decorator} />
            </Col>
            <Col span={6}>
              <TypeOfRentSelection decorator={decorator} />
            </Col>
            <Col span={6}>
              <TypeOfFlatshareSelection decorator={decorator} />
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <NumberRange decorator={decorator} itemLabel="Room size in m&sup2;*"
                           objName={'preferences.flat.room.size'}/>
            </Col>
            <Col span={8}>
              <NumberRange decorator={decorator} itemLabel={'Rent in €*'} objName={'preferences.flat.room.rent'}/>
            </Col>
            <Col span={8}>
              <Item label="Date available*">
                <WrappedAnyInput
                  required
                  tag={
                    fieldValue('preferences.flat.room.rentType') ===
                    'limited' ? (
                      <RangePicker />
                    ) : (
                      <DatePicker style={{ width: '100%' }} />
                    )
                  }
                  dec={decorator}
                  objName={
                    fieldValue('preferences.flat.room.rentType') === 'limited'
                      ? 'preferences.flat.room.dateAvailableRange'
                      : 'preferences.flat.room.dateAvailable'
                  }
                />
              </Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Item label="Gender restrictions*">
                <WrappedSelection
                  placeHolder="Please select"
                  dec={decorator}
                  objName="preferences.genderRestriction"
                  value={genderRestriction}
                />
              </Item>
            </Col>
            <Col span={8}>
              <NumberRange decorator={decorator} itemLabel="Flatmates age*" objName={'preferences.flatmates.age'}/>
            </Col>

            <Col span={8}>
              <NumberRange decorator={decorator} itemLabel="Number of Flatmates*"
                           objName={'preferences.flatmates.amount'}/>
            </Col>
          </Row>

          <hr />
          <br />

          <Row gutter={24}>
            <Col span={12}>
              <Item label="Stations Nearby">
                {decorator('preferences.flat.stations')(
                  <Select
                    mode="multiple"
                    placeholder="Please select"
                    filterOption={false}
                    onSearch={this.props.store.search}
                  >
                    {this.props.store.filteredStations.map(d => (
                      <Option key={d}>{d}</Option>
                    ))}
                  </Select>
                )}
              </Item>
            </Col>
            <Col span={12}>
              <Item label="Stores nearby">
                <WrappedSelection
                  placeHolder="Please select"
                  type="multiple"
                  dec={decorator}
                  objName="preferences.flat.stores"
                  value={stores}
                />
              </Item>
            </Col>
          </Row>

          <hr />
          <br />
          <h2>Flat properties and Equipment</h2>

          <SwitchGroup
            decorator={decorator}
            basePath={'preferences.flatEquipment'}
            funisheBasePath={'preferences.flat.room'}
          />

          <hr />
          <br />
          <h2>Flatshare living</h2>
          <Row gutter={24}>
            <Col span={8}>
              <Item label="Expected Cleanliness*">
                <WrappedSelection
                  required
                  placeHolder="Please select"
                  dec={decorator}
                  objName="preferences.cleanliness"
                  value={cleanliness}
                />
              </Item>
            </Col>
            <Col span={8}>

              <Item label="Cleaning schedule*">
                <WrappedSelection
                  required
                  placeHolder="Please select"
                  dec={decorator}
                  objName="preferences.cleaningSchedule"
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
                  objName="preferences.activities"
                  value={activities}
                />
              </Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Item label="Smokers">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false} />}
                  dec={decorator}
                  objName="preferences.smokers"
                />
              </Item>
            </Col>
            <Col span={12}>
              <Item label="Pets">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false} />}
                  dec={decorator}
                  objName="preferences.pets"
                />
              </Item>
            </Col>
          </Row>
          <div>
            <Button
              style={{ float: 'right' }}
              htmlType="submit"
              onClick={result => this.handleResult('Next', result)}
              type="primary"
            >
              Next
            </Button>
          </div>
        </Form>
      </Container>
    )
  }
}

export default Form.create()(FlatsharePreferences)
