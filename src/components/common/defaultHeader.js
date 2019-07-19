import React from 'react'
import {Col, Icon, Popover, Row} from 'antd'
import styled, {ThemeProvider} from 'styled-components'
import theme from 'styled-theming'
import img from '../../resources/logo.png'
import Image from './Image'
import {Link} from "react-router-dom";

const DefaultHeader = ({theme}) => (
  <ThemeProvider theme={{mode: theme}}>
    <Container>
      <Row type="flex" justify="center">
        <Col xs={2} sm={2} md={2} lg={2} xl={5}/>
        <Col xs={10} sm={10} md={10} lg={10} xl={7}>
          <div className="logo">
            <Link to="/" refresh="true">
              <Image img={img} style={{width: 80}}/>
            </Link>
          </div>
        </Col>
        <Col xs={10} sm={10} md={10} lg={10} xl={7}>
          {/*TODO: super ugly but works for now*/}
          {localStorage.getItem('token') === null ?
            <Link to="/login" refresh="true">
              <Icon style={{fontSize: 32, float: "right"}} type="user"/>
            </Link> :
            <Popover placement="bottomRight"
                     content={
                       <Link to="/" refresh="true" onClick={() => localStorage.removeItem('token')}>
                         <span>Logout</span>
                       </Link>
                     }
                     trigger="click">
              <Icon style={{fontSize: 32, float: "right"}} type="user"/>
            </Popover>}
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={5}/>
      </Row>
    </Container>
  </ThemeProvider>
);




const backgroundColor = theme('mode', {
  light: 'white',
  dark: '#222'
});

const textColor = theme('mode', {
  light: '#000',
  dark: '#fff'
});

const Container = styled.div`
  height: 80px;
  margin-top: 2vh;
  background-color: ${backgroundColor};
  color: ${textColor};
`;

export default DefaultHeader
