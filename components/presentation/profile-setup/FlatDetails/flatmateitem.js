import { Form, Input, Row, Col } from 'antd'
import WrappedInput from '../../../common/form/warppedInput'
import WrappedSelection from '../../../common/form/wrappedSelection'
import styled from 'styled-components'

const FlatmateItem = ({ index, decorator }) => (
  <div style={{ marginBottom: '5vh' }}>
    <Subtitle> {'Roommate: ' + (index + 1)} </Subtitle>
    <Input.Group>
      <Row gutter={5}>
        <Col span={6}>
          <Form.Item label="Nationality">
            <WrappedInput
              required
              dec={decorator}
              objName={'nationality' + index}
              placeHolder="Nationality"
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="Age">
            <WrappedInput
              required
              dec={decorator}
              objName={'age' + +index}
              placeHolder="Age"
              type="number"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={5}>
        <Col span={12}>
          <Form.Item label="Occupation">
            <WrappedInput
              required
              dec={decorator}
              objName={'occupation' + index}
              placeHolder="Occupation"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          {decorator('description' + index)(
            <Input.TextArea
              placeholder="Enter your description"
              autoSize={{ maxRow: 5 }}
            />
          )}
        </Col>
      </Row>
    </Input.Group>
  </div>
)

const Subtitle = styled.p`
  font-size: 2em;
`

export default FlatmateItem
