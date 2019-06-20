import React from 'react'
import { Row } from 'antd'
import styled from 'styled-components'

const TitleContent = ({ subtitle, title, flex }) => (
  <Row>
    <Row>
      <Text strong> {subtitle}</Text>
    </Row>
    <Row>
      {flex ? (
        <Title style={{ fontSize: 'calc(2em + 2.0vw)' }} level={1}>
          {title}
        </Title>
      ) : (
        <Title level={3}>{title} </Title>
      )}
    </Row>
  </Row>
)

const Title = styled.p`
  margin-top: -2vh;
  font-size: calc(0.25em + 2.5vw);
  font-weight: bold;
`

const Text = styled.p`
  font-weight: normal;
`

export default TitleContent
