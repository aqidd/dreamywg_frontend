import React from 'react'
import { Card, Row, Col } from 'antd'
import styled from 'styled-components'

const { Meta, Grid } = Card

const CustomCard = () => (
  <CardContainer>
    <StyledImage
      alt="example"
      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    />

    <ContentContainer>
      <Title>Novum Hotel München – Am Hauptbahnhof</Title>
    </ContentContainer>
  </CardContainer>
)

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 170px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover ${CardContainer} {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`
const ContentContainer = styled.div`
  margin-top: 1vh;
  margin-left: 2vh;
  margin-right: 2vh;
`

const StyledImage = styled.img`
  max-width: 250px;
`

const Title = styled.p`
  font-weight: bold;
  font-size: 1.2em;
`

const ImgContainer = {
  width: '30%',
  textAlign: 'center'
}
const contentStyle = {
  width: '70%',
  textAlign: 'center'
}

export default CustomCard
