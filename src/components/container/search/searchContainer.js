import React, { Component } from 'react'
import CustomCard from '../../common/customCard'
import styled from 'styled-components'
import FilterBar from '../../presentation/search/filterBar'
import { observer, inject } from 'mobx-react'
import { Row, Col, Pagination, Empty } from 'antd'
import Title from '../../common/title'

@inject('store')
@observer
export default class SearchContainer extends Component {
  render() {
    const store = this.props.store
    return (
      <Container>
        {store.data.length === 0 ? (
          <NotFound description="We are unable to find your place" />
        ) : (
          <Row>
            <Col xl={18} lg={24} md={24} sm={24} xs={24}>
              <Row>
                  <Title>Our suggestions for you</Title>
              </Row>
              <Row>
                <CardContainer>
                  {store.data.map((element, index) => (
                    <CustomCard
                      ready={store.ready}
                      key={index}
                      sponsor={element.sponsored}
                      id={element.id}
                      img={element.img}
                      title={element.title}
                      description={element.description}
                      matched={element.matched}
                      location={element.location}
                      price={element.price}
                      roomSize={element.roomSize}
                      dateAvailable={element.dateAvailable}
                    />
                  ))}
                </CardContainer>
              </Row>
              <Row>
                <PaginationContainer>
                  <Pagination
                    defaultPageSize={3}
                    onChange={(page) => store.switchPage(page)}
                    defaultCurrent={store.currentStep}
                    total={store.totalResults}
                  />
                </PaginationContainer>
              </Row>
            </Col>
            <Col xl={6} lg={0} md={0} sm={0} xs={0}>
              <div style={{ marginTop: '10vh', textAlign: 'center' }}>
                Advertising
              </div>
            </Col>
          </Row>
        )}
      </Container>
    )
  }
}

const Container = styled.div`
  margin-left: 5vh;
  margin-right: 5vh;
  margin-top: 10vh;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -2vh;
  -webkit-animation: fade-in-right 1.5s;
  @keyframes fade-in-right {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const PaginationContainer = styled.div`
  margin-top: 2vh;
  text-align: center;
`
const NotFound = styled(Empty)`
  margin-top: 5vh;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5vh;
  text-align: center;
`
