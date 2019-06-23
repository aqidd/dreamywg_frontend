import React from 'react'
import { Row, Col, Card } from 'antd'
import GoogleMap from '../../common/googleMap';
import RoomListContainer from '../../container/roomListContainer'
const { Meta } = Card

const AboutFlat = props => (
  <div>
    <Row>
      <Col span={12}>
        <Row>
          <Col span={12}>
            <Card
              hoverable
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Photo and desc" description="www.instagram.com" />
            </Card>
          </Col>
          <Col span={12} style={{height:'450px'}}>
            <GoogleMap></GoogleMap>
          </Col>
        </Row>
        <Row>
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

export default AboutFlat