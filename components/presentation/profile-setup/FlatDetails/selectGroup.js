import { Input, Form, Row, Col } from 'antd'
import WrappedSelection from '../../../common/form/wrappedSelection'

const { Item } = Form

const SelectGroup = ({ decorator }) => (
  <Input.Group>
    <Row gutter={5}>
      <Col span={12}>
        <Item label="Rental type">
          <WrappedSelection
            required
            placeHolder="Select your rental type"
            dec={decorator}
            objName="rent-type"
            value={['limited', 'unlimited']}
          />
        </Item>
      </Col>
      <Col span={12}>
        <Item label="Flat type">
          <WrappedSelection
            required
            placeHolder="Select your flat type"
            dec={decorator}
            objName="flat-type"
            value={[
              'student only',
              'work only',
              'female only',
              'male only',
              'mixed'
            ]}
          />
        </Item>
      </Col>
    </Row>
    <Item label="Nearby station">
      <WrappedSelection
        placeHolder="Add nearby station"
        type="tags"
        dec={decorator}
        objName="nearby-station"
        value={['Bus', 'S-Bahn Station', 'U-Bahn Station', 'Tram']}
      />
    </Item>

    <Item label="Nearby store">
      <WrappedSelection
        placeHolder="Add nearby store"
        type="tags"
        dec={decorator}
        objName="nearby-store"
        value={['Supermarket', 'Department Store']}
      />
    </Item>
  </Input.Group>
)

export default SelectGroup
