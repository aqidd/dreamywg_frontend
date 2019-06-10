import { Row, Col, Button, Typography } from 'antd'
import styled from 'styled-components'

const { Text } = Typography

const VersionCard = () => (
  <Row type="flex" justify="start" gutter={16}>
    <Col>
      <Button type="primary" shape="round">
        Beta
      </Button>
    </Col>
    <Col>
      <VersionContainer>
        <Text> Version 0.0.1 is Available </Text>
      </VersionContainer>
    </Col>
  </Row>
)

const VersionContainer = styled.div`
  margin-top: 5px;
`

export default VersionCard
