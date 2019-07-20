import React from "react"
import {Col, Form, Input, Row} from "antd"
import WrappedInput from "../../../common/form/wrappedInput"
import WrappedSelection from "../../../common/form/wrappedSelection"
import styled from "styled-components"
import languages from "../../../../util/languages";
import {field, hobbies, occupation, practiceOfAbstaining} from "../../../../util/selections";

const {Item} = Form;
const {Group, TextArea} = Input;

const FlatmateItem = ({index, decorator, fieldValue}) => (
  <div style={{marginBottom: "5vh"}}>
    <Subtitle> {`Flatmate: ${fieldValue(`flatmates[${index}].firstName`) !== undefined ? fieldValue(`flatmates[${index}].firstName`) : ""} ${fieldValue(
      `flatmates[${index}].lastName`) !== undefined ? fieldValue(`flatmates[${index}].lastName`) : ""}`} </Subtitle>
    <Group>
      <Row gutter={16}>
        <Col span={12}>
          <Item label="First Name*">
            <WrappedInput
              dec={decorator}
              objName={`flatmates[${index}].firstName`}
              placeHolder="First Name"
              required
            />
          </Item>
        </Col>
        <Col span={12}>
          <Item label="Last Name*">
            <WrappedInput
              dec={decorator}
              objName={`flatmates[${index}].lastName`}
              placeHolder="Last Name"
              required
            />
          </Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Item label="Languages">
            <WrappedSelection
              type="multiple"
              placeHolder="Please select"
              dec={decorator}
              objName={`flatmates[${index}].languages`}
              value={languages}
            />
          </Item>
        </Col>
        <Col span={8}>
          <Item label="Age*">
            <WrappedInput
              dec={decorator}
              objName={`flatmates[${index}].age`}
              type="number"
              required
            />
          </Item>
        </Col>
        <Col span={8}>
          <Item label="Practice of Abstaining">
            <WrappedSelection
              placeHolder="Please select"
              dec={decorator}
              type="multiple"
              objName={`flatmates[${index}].practiceOfAbstaining`}
              value={practiceOfAbstaining}
            />
          </Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Item label="Occupation*">
            <WrappedSelection
              required
              placeHolder="Please select"
              dec={decorator}
              objName={`flatmates[${index}].occupation`}
              value={occupation}
            />
          </Item>
        </Col>
        <Col span={12}>
          <Item label="Field">
            <WrappedSelection
              placeHolder="Please select"
              dec={decorator}
              objName={`flatmates[${index}].field`}
              value={field}
            />
          </Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Item label="Hobbies">
            <WrappedSelection
              placeHolder="Please select"
              type="tags"
              dec={decorator}
              objName={`flatmates[${index}].hobbies`}
              value={hobbies}
            />
          </Item>
        </Col>
        <Col span={12}>
          <Item label="Link to social media profile">
            <WrappedInput
              dec={decorator}
              objName={`flatmates[${index}].socialMedia`}
            />
          </Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {decorator(`flatmates[${index}].description`)(
            <TextArea placeholder="Enter your description"/>
          )}
        </Col>
      </Row>
    </Group>
  </div>
)


const Subtitle = styled.p`
     font-size: 2em;
`;

export default FlatmateItem
