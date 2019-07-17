import React from 'react'
import { Row, Col, Card, Carousel, Icon, Tag } from 'antd'
import GoogleMap from '../../common/googleMap';
import RoomListContainer from '../../container/roomListContainer'
import { inject, observer, Provider } from 'mobx-react'
import style from './about-flat.css'
const { Meta } = Card

const AboutFlat = inject('store')(
  observer(({ store }) => {
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
                      {
                        lat: 61.95,
                        lng: 100.33
                      }
                    } zoom={11}></GoogleMap>
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
              <Col span={24}>
                <p>
                  {flat.longDescription}
                </p>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Provider store={store}>
              <RoomListContainer></RoomListContainer>
            </Provider>
          </Col>
        </Row>

      </div>
    )
  })
)

export default AboutFlat