import React from 'react'
import { Col, Icon, Popover, Row, Button } from 'antd'
import styled from 'styled-components'
import img from '../../resources/logo.png'
import Image from './Image'
import { Link } from 'react-router-dom'
import withRedirect from './class/withRedirect'

const DefaultHeader = ({ redirect }) => (
  <Container>
    <Row type="flex" justify="center">
      <Col xs={2} sm={2} md={2} lg={2} xl={5} />
      <Col xs={10} sm={10} md={10} lg={10} xl={7}>
        <div className="logo">
          <Link to="/" refresh="true">
            <Image img={img} style={{ width: 80 }} />
          </Link>
        </div>
      </Col>
      <Col xs={10} sm={10} md={10} lg={10} xl={7}>
        {/*TODO: super ugly but works for now*/}
        {localStorage.getItem('token') === null ? (
          <Popover content={<Login redirect={url => redirect(url)} />}>
            <Icon style={{ fontSize: 32, float: 'right' }} type="user" />
          </Popover>
        ) : (
          <Popover
            placement="bottomRight"
            content={
              <Link to="/" refresh="true" onClick={() => localStorage.clear()}>
                <span>Logout</span>
              </Link>
            }
            trigger="click"
          >
            <Icon style={{ fontSize: 32, float: 'right' }} type="user" />
          </Popover>
        )}
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={5} />
    </Row>
  </Container>
)

const Login = ({ redirect }) => (
  <PopoverContainer>
    <Title> Welcome </Title>
    <StyledSection>
      <p>
        <strong>Have not Registered</strong> yet? Get started!
      </p>
      <Button type="primary" onClick={() => redirect('/register')} block>
        Registered
      </Button>
    </StyledSection>
    <StyledSection>
      <p>
        <strong>Registered?</strong> Get right into our site
      </p>
      <Button type="primary" block onClick={() => redirect('/login')}>
        Login
      </Button>
    </StyledSection>
  </PopoverContainer>
)

const StyledSection = styled.div`
  margin-bottom: 2vh;
`

const PopoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`

const Container = styled(Row)`
  padding-top: 2vh;
  height: 80px;
  background-color: white;
`
const Title = styled.p`
  font-size: 1.5em;
`

export default withRedirect(DefaultHeader)
