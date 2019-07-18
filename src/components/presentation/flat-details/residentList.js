import React from 'react'
import { Row, Col, Avatar, Descriptions, Tag } from 'antd'
import { inject, observer } from 'mobx-react'
import {toJS} from 'mobx'

const ResidentList = inject('store')(
  observer(({ store }) => {
    return (
      <div>
        <h2> Residents in this building </h2>
        <br/>
        {
          store.flatStore.flat.flatmates.map(flatmate => {
            return (
              <Row key={flatmate._id} style={listStyle}>
                <Col span={2}>
                  <Avatar shape="square" size={72} icon="user" />
                </Col>
                <Col span={20}>
                  <Descriptions title={flatmate.firstName}>
                      <Descriptions.Item label="Occupation">{flatmate.occupation}</Descriptions.Item>
                      <Descriptions.Item label="Field">{flatmate.field}</Descriptions.Item>
                      <Descriptions.Item label="Age">{flatmate.age}</Descriptions.Item>
                      <Descriptions.Item label="Hobbies">
                        <div>
                          {
                            flatmate.hobbies.map(hobby => {
                              return (
                                <Tag key={hobby}>{hobby}</Tag>
                              )
                            })
                          }
                        </div>
                      </Descriptions.Item>
                      <Descriptions.Item label="Languages">
                        <div>
                          {
                            flatmate.languages.map(language => {
                              return (
                                <Tag key={language}>{language}</Tag>
                              )
                            })
                          }
                        </div>
                      </Descriptions.Item>
                      <Descriptions.Item label="Abstaining">
                        <div>
                          {
                            flatmate.practiceOfAbstaining.map(abstain => {
                              return (
                                <Tag key={abstain}>{abstain}</Tag>
                              )
                            })
                          }
                        </div>
                      </Descriptions.Item>
                  </Descriptions>
                </Col>
              </Row>
            )
          })
        }
      </div>
    )
  })
)

export default ResidentList

const listStyle = {
  marginBottom: '20px'
}