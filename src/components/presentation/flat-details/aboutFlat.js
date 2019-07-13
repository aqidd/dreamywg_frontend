import React from 'react'
import { Row, Col, Card, Carousel, Icon } from 'antd'
import GoogleMap from '../../common/googleMap';
import RoomListContainer from '../../container/roomListContainer'
import { inject, observer, Provider } from 'mobx-react'
import style from './about-flat.css'
const { Meta } = Card

const AboutFlat = inject('store')(
  observer(({ store }) => {
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
                    title={store.flatStore.flat.title}
                    description="2 Bedroom - 1 Bathroom - Furnished - WG Friendly"
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  cover={
                    <GoogleMap></GoogleMap>
                  }
                  actions={[<Icon type="pushpin"/>]}
                >
                  <Meta
                    title="Obersendling straße 6969"
                  />
                </Card>
              </Col>
            </Row>
            <Row className="flat-description">
              <Col span={24}>
                <p>
                Die Wohnung befindet sich drei Gehminuten von der U- und S-Bahnstation am Harras entfernt und liegt – ideal für Medizinstudenten – genau zwischen dem Sendlinger Tor (Medizinische Fakultät Vorklinik) und dem Klinikum Großhadern. Für Studenten an der TU als auch LMU ist die Lage perfekt gelegen und mit der U6 schnell zu erreichen. 
                </p>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <RoomListContainer></RoomListContainer>
          </Col>
        </Row>

      </div>
    )
  })
)

export default AboutFlat