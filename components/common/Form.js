import {Form, Input, Select} from 'antd'
import styled from "styled-components";

const {Option} = Select;

export const WrappedInput = ({type, dec, objName, placeHolder, suffix}) =>
  dec(objName, {
    rules: [{required: true, message: 'Please complete this field!'}]
  })(<Input type={type} addonAfter={suffix} placeholder={placeHolder}/>);

export const WrappedOthersInput = ({tag, dec, objName}) =>
  dec(objName, {
    rules: [{required: true, message: 'Please complete this field!'}]
  })(tag);

export const Selections = ({dec, objName, placeHolder, value, type = 'default'}) =>
  dec(objName, {
    rules: [{required: true, message: 'Please complete this field!'}]
  })(
    <Select mode={type} placeholder={placeHolder}>
      {value.map((val, index) => (
        <Option key={index} value={val}>
          {val}
        </Option>
      ))}
    </Select>
  );

export const Item = props => <Form.Item {...props}>{props.children}</Form.Item>;

export const Container = styled.div`
  margin-top: 5vh;
`
