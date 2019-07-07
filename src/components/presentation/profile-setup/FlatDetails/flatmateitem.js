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
    <Subtitle> {`Flatmate: ${fieldValue(`flat.flatmates[${index}].firstName`) !== undefined ? fieldValue(`flat.flatmates[${index}].firstName`) : ""} ${fieldValue(
      `flat.flatmates[${index}].lastName`) !== undefined ? fieldValue(`flat.flatmates[${index}].lastName`) : ""}`} </Subtitle>
    <Group>
      <Row gutter={16}>
        <Col span={12}>
          <Item label="First Name">
            <WrappedInput
              dec={decorator}
              objName={`flat.flatmates[${index}].firstName`}
              placeHolder="first name"
            />
          </Item>
        </Col>
        <Col span={12}>
          <Item label="Last Name">
            <WrappedInput
              dec={decorator}
              objName={`flat.flatmates[${index}].lastName`}
              placeHolder="last name"
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
              objName={`flat.flatmates[${index}].languages`}
              value={languages}
            />
          </Item>
        </Col>
        <Col span={8}>
          <Item label="Age">
            <WrappedInput
              dec={decorator}
              objName={`flat.flatmates[${index}].age`}
              type="number"
            />
          </Item>
        </Col>
        <Col span={8}>
          <Item label="Practice of Abstaining">
            <WrappedSelection
              placeHolder="Please select"
              dec={decorator}
              type="multiple"
              objName={`flat.flatmates[${index}].practiceOfAbstaining`}
              value={practiceOfAbstaining}
            />
          </Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Item label="Occupation">
            <WrappedSelection
              placeHolder="Please select"
              dec={decorator}
              objName={`flat.flatmates[${index}].occupation`}
              value={occupation}
            />
          </Item>
        </Col>
        <Col span={12}>
          <Item label="Field">
            <WrappedSelection
              placeHolder="Please select"
              dec={decorator}
              objName={`flat.flatmates[${index}].field`}
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
              objName={`flat.flatmates[${index}].hobbies`}
              value={hobbies}
            />
          </Item>
        </Col>
        <Col span={12}>
          <Item label="Link to social media profile">
            <WrappedInput
              dec={decorator}
              objName={`flat.flatmates[${index}].socialMedia`}
            />
          </Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {decorator(`flat.flatmates[${index}].description`)(
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
