import { Input, Form, DatePicker, Switch } from 'antd'
import WrappedAnyInput from '../../../common/form/wrappedAnyInput'

const { Item } = Form

const SwitchGroup = ({ decorator }) => (
  <Input.Group>
    <Item label="Date available">
      <WrappedAnyInput
        required
        tag={<DatePicker />}
        dec={decorator}
        objName="date-available"
      />
    </Item>
    <Item label="Furnished">
      <WrappedAnyInput
        tag={<Switch defaultChecked={false} />}
        dec={decorator}
        objName="furnished"
      />
    </Item>
    <Item label="Parking lot">
      <WrappedAnyInput
        tag={<Switch defaultChecked={false} />}
        dec={decorator}
        objName="parking-lot"
      />
    </Item>
  </Input.Group>
)

export default SwitchGroup
