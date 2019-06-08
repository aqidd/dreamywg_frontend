import { Row, Col, Typography } from 'antd'

const { Text, Title } = Typography

const TitleContent = ({ subtitle, title, flex }) => (
  <Row>
    <Row>
      <Text strong> {subtitle}</Text>
    </Row>
    <Row>
      {flex ? (
        <Title style={{ fontSize: 'calc(2em + 2.0vw)' }} level={1}>
          {title}{' '}
        </Title>
      ) : (
        <Title level={3}>{title} </Title>
      )}
    </Row>
  </Row>
)

export default TitleContent
