import React from 'react'
import { Row, Col, Avatar, Descriptions, Tag } from 'antd'

const ResidentList = props => (
  <div>
    <h2> Residents in this building </h2>
    <br/>
    {Array(3).fill (
        <Row style={listStyle}>
            <Col span={2}>
              <Avatar shape="square" size={72} icon="user" />
            </Col>
            <Col span={20}>
              <Descriptions title="This Random Dude">
                  <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                  <Descriptions.Item label="Email">random.dude@email.com</Descriptions.Item>
                  <Descriptions.Item label="Nationality">Chinese</Descriptions.Item>
                  <Descriptions.Item label="Room Number">30B</Descriptions.Item>
                  <Descriptions.Item label="Interests">
                    <div>
                      {Array.from({length:3}, (value, index) =>
                          <Tag>Hobby{value}:{index}</Tag>
                      )}
                    </div>
                  </Descriptions.Item>
              </Descriptions>
            </Col>
        </Row>
    )}
  </div>
)

export default ResidentList

const listStyle = {
  marginBottom: '20px'
}