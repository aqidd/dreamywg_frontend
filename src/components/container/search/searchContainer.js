import React, { Component } from 'react'
import CustomCard from '../../common/customCard'
import styled from 'styled-components'
import FilterBar from '../../presentation/search/filterBar'
import { observer, inject } from 'mobx-react'
import { Row, Col, Pagination, Empty } from 'antd'

@inject('store')
@observer
export default class SearchContainer extends Component {
  render() {
    const store = this.props.store
    return (
      <Container>
        {store.data.length == 0 ? (
          <NotFound description="We are unable to find your place" />
        ) : (
          <Row>
            <Col xl={18} lg={24} md={24} sm={24} xs={24}>
              <Row>
                <FilterBar handleChange={data => store.sortData(data)} />
              </Row>
              <Row>
                <CardContainer>
                  {store.data.map((element, index) => (
                    <CustomCard
                      key={index}
                      sponsor={element.sponsored}
                      img={element.img}
                      name={element.name}
                      description={element.description}
                      recommendation={element.recommendation}
                      location={element.location}
                      price={element.price}
                    />
                  ))}
                </CardContainer>
              </Row>
              <Row>
                <PaginationContainer>
                  <Pagination
                    defaultPageSize={3}
                    onChange={(page, pageSize) => store.switchPage(page)}
                    defaultCurrent={store.currentStep}
                    total={store.totalFound}
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
  display: flex;
  flex-direction: column;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const PaginationContainer = styled.div`
  margin-top: 5vh;
  text-align: center;
`
const NotFound = styled(Empty)`
  margin-top: 5vh;
`
