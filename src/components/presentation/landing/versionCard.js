import React from 'react'
import { Row, Col, Button } from 'antd'
import styled from 'styled-components'

const VersionCard = () => (
  <Row type="flex" justify="start" gutter={16}>
    <Col>
      <Button type="primary" shape="round">
        Beta
      </Button>
    </Col>
    <Col>
      <VersionContainer>
        <p> Version 0.0.1 is Available </p>
      </VersionContainer>
    </Col>
  </Row>
)

const VersionContainer = styled.div`
  margin-top: 5px;
`

export default VersionCard
