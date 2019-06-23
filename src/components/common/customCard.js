import React from 'react'
import { Card, Row, Col } from 'antd'
import styled from 'styled-components'

const { Meta, Grid } = Card

const CustomCard = () => (
  <CardContainer>
    <Row>
      <Col md={13} lg={12} xl={8}>
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      </Col>
      <Col md={11} lg={12} xl={16}>
        <ContentContainer>content</ContentContainer>
      </Col>
    </Row>
  </CardContainer>
)

const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover ${CardContainer} {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`
const ContentContainer = styled.div`
  margin-top: 2vh;
`

const Title = styled.p``

const ImgContainer = {
  width: '30%',
  textAlign: 'center'
}
const contentStyle = {
  width: '70%',
  textAlign: 'center'
}

export default CustomCard
