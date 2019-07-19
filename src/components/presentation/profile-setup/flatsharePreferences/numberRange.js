import React from 'react'
import {Form, Input, InputNumber} from 'antd'
import WrappedAnyInput from "../../../common/form/wrappedAnyInput";

const Item = Form.Item;

const NumberRange = ({decorator, itemLabel, objName}) => (
  <Item label={itemLabel}>
    <Input.Group compact>
      <WrappedAnyInput
        tag={<InputNumber style={{width: "40%", textAlign: 'center'}}/>}
        dec={decorator}
        objName={`${objName}.from`}
      />
      <Input
        style={{
          width: "20px",
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
        objName={`${objName}.to`}
      />
    </Input.Group>
  </Item>
);

export default NumberRange
