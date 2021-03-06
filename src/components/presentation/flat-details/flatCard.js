import React from 'react'
import { Row, Col, Card, Carousel, Icon, Tag } from 'antd'
import GoogleMap from '../../common/googleMap'
import styled from 'styled-components'
import * as network from '../../../util/network'

const FlatCard = ({
  title,
  description,
  images,
  type,
  store,
  station,
  equipment,
  address
}) => (
  <StyledCard style={roundCorner}>
    <CardContainer>
      <Carousel
        style={{ minHeight: '30vh', maxHeight: '30vh' }}
        effect="fade"
        dotPosition="top"
        adaptiveHeight
        autoplay
      >
        {images.map((image, index) => {
          return (
            <div key={index}>
              <StyledImage src={`${network.serverUrl}/static/${image}`} />
            </div>
          )
        })}
      </Carousel>

      <ContentContainer>
        <StyledSection>
          <ContentDescription>
            <CardTitle>
              {title}
            </CardTitle>
            <Tag color="purple"> {type} </Tag>
            <br/><br/>
            <p>{description}</p>
          </ContentDescription>
        </StyledSection>
        <StyledSection>
          <Subtitle>Equipments</Subtitle>
          <Row style={{ marginTop: '2vh' }}>
            {Object.keys(equipment).map(each => (
              <Col span={8} key={each}>
                <EquipmentContainer>
                  <StyledIcon type={equipment[each]} />
                  <p> {each}</p>
                </EquipmentContainer>
              </Col>
            ))}
          </Row>
        </StyledSection>
        <StyledSection>
          <Subtitle>Location</Subtitle>
          <GoogleMap center={address} zoom={15} />
        </StyledSection>
        <StyledSection>
          <Row>
            <Col span={12}>
              <Subtitle> Nearby Store </Subtitle>
              <ul>
                {store.map(store => {
                  return <li key={store}>{store}</li>
                })}
              </ul>
            </Col>
            <Col span={12}>
              <Subtitle> Nearby Station </Subtitle>
              <ul>
                {station.map(station => {
                  return <li key={station}>{station}</li>
                })}
              </ul>
            </Col>
          </Row>
        </StyledSection>
      </ContentContainer>
    </CardContainer>
  </StyledCard>
)

const EquipmentContainer = styled.div`
  text-align: center;
  margin-top: 2vh;
  margin-bottom: 2vh;
`
const StyledSection = styled.section`
  margin-top: 2vh;
  margin-bottom: 2vh;
`

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover ${StyledCard} {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

const StyledIcon = styled(Icon)`
  font-size: 3em;
`

const roundCorner = {
  borderRadius: 30
}

const CardContainer = styled.div`
  margin-top: -24px;
  margin-left: -24px;
  margin-right: -24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ContentContainer = styled.div`
  margin-left: 5vh;
  margin-right: 5vh;
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  line-height: 2;
  text-align: justify;
`

const ContentDescription = styled.div``

const StyledImage = styled.img`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  object-fit: cover;
  width: 100%;
`

const CardTitle = styled.p`
  font-size: 2.5em;
  margin-bottom: -5px;
  font-weight: bold;
`
const Subtitle = styled.p`
  font-size: 1.5em;
  margin-bottom: 16px;
`

export default FlatCard
