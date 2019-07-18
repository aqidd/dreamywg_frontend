import React from 'react'
import { Row, Col, Card, Carousel, Icon, Tag } from 'antd'
import GoogleMap from '../../common/googleMap'
import RoomListContainer from '../../container/roomListContainer'
import { inject, observer, Provider } from 'mobx-react'
import style from './about-flat.css'
import styled from 'styled-components'
const { Meta } = Card

const AboutFlat = inject('store')(
  observer(({ store }) => {
    const flat = store.flatStore.flat
    return (
      <div>
        <Row gutter={46}>
          <Col span={18}>
            <Row gutter={16}>
              <Col span={24}>
                <FlatCard
                  title={flat.title}
                  type={flat.flatshareType}
                  store={flat.stores}
                  equipment={flat.flatEquipment}
                />
              </Col>
            </Row>
            <Row className="flat-description">
              <Col span={24}>
                <p>{flat.longDescription}</p>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Provider store={store}>
              <StyledCard style={{...roundCorner, marginRight: '2vh'} }>
                <RoomListContainer />
              </StyledCard>
            </Provider>
          </Col>
        </Row>
      </div>
    )
  })
)

const FlatCard = ({ title, type, store, equipment }) => (
  <StyledCard style={roundCorner}>
    <CardContainer>
      <Carousel
        style={{ minHeight: '30vh', maxHeight: '30vh' }}
        effect="fade"
        dotPosition="top"
        adaptiveHeight
        autoplay
      >
        <div>
          <StyledImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Best_House_in_fall.JPG/1200px-Best_House_in_fall.JPG" />
        </div>
        <div>
          <StyledImage src="http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/up_house.jpg" />
        </div>
        <div>
          <StyledImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Best_House_in_fall.JPG/1200px-Best_House_in_fall.JPG" />
        </div>
      </Carousel>
      <ContentContainer>
        <CardTitle> {title} </CardTitle>
        <p>Type: {type}</p>
        <p>
          Equipments: &nbsp;
          {Object.keys(equipment)
            .map(function(key) {
              return equipment[key] ? key : undefined
            })
            .filter(value => !!value)
            .map(equipment => {
              return (
                <Tag color="#108ee9" key={equipment}>
                  {equipment}
                </Tag>
              )
            })}
        </p>
        <div>
          Store Nearby : &nbsp;
          {store.map(store => {
            return (
              <Tag color="#108ee9" key={store}>
                {store}
              </Tag>
            )
          })}
        </div>
      </ContentContainer>
    </CardContainer>
  </StyledCard>
)

const Map = () => (
  <StyledCard style={roundCorner}>
    <CardContainer>
      <GoogleMap
        center={{
          lat: 61.95,
          lng: 100.33
        }}
        zoom={11}
      />
      <Meta title={`${flat.region} ${flat.street}, ${flat.houseNr}`} />
      <br />
      <div>
        Stations Nearby : &nbsp;
        {flat.stations.map(station => {
          return <Tag key={station}>{station}</Tag>
        })}
      </div>
    </CardContainer>
  </StyledCard>
)

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover ${StyledCard} {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
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
  margin-left: 2vh;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  line-height: 1;
`

const StyledImage = styled.img`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  object-fit: cover;
  width: 100%;
`

const CardTitle = styled.p`
  font-size: 2em;
  margin-bottom: 16px;
`

export default AboutFlat
