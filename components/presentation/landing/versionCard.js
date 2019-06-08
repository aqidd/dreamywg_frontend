import { Row, Col, Button, Typography } from 'antd'

const { Text } = Typography

const VersionCard = () => (
  <Row type="flex" justify="start" gutter={16} style={{ textAlign: 'center' }}>
    <Col>
      <Button type="primary" shape="round">
        Beta
      </Button>
    </Col>
    <Col>
      <div style={{ marginTop: 5 }}>
        <Text> Version 0.0.1 is Available</Text>
      </div>
    </Col>
  </Row>
)

export default VersionCard
