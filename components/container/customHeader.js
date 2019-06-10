import { Menu, Row, Col, Icon } from 'antd'

const CustomHeader = () => (
  <div style={{ height: '80px', marginTop: '2vh', verticalAlign: 'middle' }}>
    <Row type="flex" justify="center">
      <Col xs={2} sm={2} md={2} lg={2} xl={5} />
      <Col xs={20} sm={20} md={20} lg={20} xl={14}>
        <div className="logo" />
        <Icon style={{ fontSize: 32, float: 'right' }} type="user" />
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={5} />
    </Row>
  </div>
)

export default CustomHeader
