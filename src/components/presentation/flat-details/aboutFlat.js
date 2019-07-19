import React from 'react'
import { Row, Col, Card } from 'antd'
import RoomListContainer from '../../container/roomListContainer'
import { inject, observer, Provider } from 'mobx-react'
import style from './about-flat.css'
import styled from 'styled-components'
import FlatCard from './flatCard'

const AboutFlat = inject('store')(
  observer(({ store }) => {
<<<<<<< HEAD
    const flat = store.flatStore.flat;
    return(
      <div>
        <Row gutter={32}>
          <Col span={12}>
            <Row>
              <Col span={12}>
                <Card
                  cover={
                    <Carousel autoplay>
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Best_House_in_fall.JPG/1200px-Best_House_in_fall.JPG"/>
                      </div>
                      <div>
                        <img src="http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/up_house.jpg"/>
                      </div>
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Best_House_in_fall.JPG/1200px-Best_House_in_fall.JPG"/>
                      </div>
                    </Carousel>
                  }
                >
                  <Meta
                    title={flat.title}
                  />
                  <br/>
                  <div>
                    Flatshare Type: {flat.flatshareType}
                  </div>
                  <div>
                    Equipments: &nbsp;
                    {
                      Object.keys(flat.flatEquipment)
                      .map(function (key) { return flat.flatEquipment[key]? key : undefined; })
                      .filter(value => !!value)
                      .map(equipment => {
                        return (
                          <Tag key={equipment}>{equipment}</Tag>
                        )
                      })
                    }
                  </div>
                  <div>
                    Store Nearby : &nbsp;
                    {
                      flat.stores.map(store => {
                        return (
                          <Tag key={store}>{store}</Tag>
                        )
                      })
                    }
                  </div>
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  cover={
                    <GoogleMap center={
                      flat.coordinate
                    } zoom={15}></GoogleMap>
                  }
                >
                  <Meta
                    title={`${flat.region} ${flat.street}, ${flat.houseNr}`}
                  />
                  <br/>
                  <div>
                    Stations Nearby : &nbsp;
                    {
                      flat.stations.map(station => {
                        return (
                          <Tag key={station}>{station}</Tag>
                        )
                      })
                    }
                  </div>
                </Card>
              </Col>
            </Row>
            <Row className="flat-description">
=======
    const flat = store.flatStore.flat
    return (
      <BaseContainer>
        <Row gutter={46}>
          <Col span={18}>
            <Row gutter={16}>
>>>>>>> redesign/refactor
              <Col span={24}>
                <FlatCard
                  title={flat.title}
                  type={flat.flatshareType}
                  store={flat.stores}
                  equipment={store.flatStore.equipmentAsIcon()}
                  description={flat.longDescription}
                  station={flat.stations}
                />
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Provider store={store}>
              <StyledCard style={{ ...roundCorner, marginRight: '2vh' }}>
                <RoomListContainer />
              </StyledCard>
            </Provider>
          </Col>
        </Row>
      </BaseContainer>
    )
  })
)

const BaseContainer = styled.div`
  margin-left: 15vh;
  margin-right: 15vh;
  margin-bottom: 15vh;
`

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

export default AboutFlat
