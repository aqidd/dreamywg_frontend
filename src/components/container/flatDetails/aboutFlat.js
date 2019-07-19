import React from 'react'
import { Row, Col, Card } from 'antd'
import RoomListContainer from '../roomListContainer'
import { inject, observer, Provider } from 'mobx-react'
import styled from 'styled-components'
import FlatCard from '../../presentation/flat-details/flatCard'

const AboutFlat = inject('store')(
  observer(({ store }) => {
    const flat = store.flatStore.flat
    return (
      <BaseContainer>
        <Row gutter={46}>
          <Col span={18}>
            <Row gutter={16}>
              <Col span={24}>
                <FlatCard
                  title={flat.title}
                  type={flat.flatshareType}
                  store={flat.stores}
                  equipment={store.flatStore.equipmentAsIcon()}
                  description={flat.longDescription}
                  station={flat.stations}
                  address={flat.coordinate}
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
