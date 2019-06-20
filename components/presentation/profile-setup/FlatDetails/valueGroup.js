import { Row, Col, Input, Form } from 'antd'
import WrappedInput from '../../../common/form/warppedInput'

const Item = Form.Item

const ValueGroup = ({ decorator }) => (
  <Input.Group>
    <Row gutter={5}>
      <Col span={8}>
        <Item label="Flat">
          <WrappedInput
            dec={decorator}
            objName="apartment-size"
            placeHolder="Apartment"
            suffix="Square Meter"
            type="number"
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Room">
          <WrappedInput
            dec={decorator}
            objName="room-size"
            placeHolder="Room"
            suffix="Square Meter"
            type="number"
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Minimum rent">
          <WrappedInput
            dec={decorator}
            objName="month"
            placeHolder="Month"
            suffix=" ‎€/Month"
            type="number"
          />
        </Item>
      </Col>
    </Row>
  </Input.Group>
)

export default ValueGroup
