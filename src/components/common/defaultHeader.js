import React from 'react'
import {Col, Icon, Popover, Row} from 'antd'
import styled, {ThemeProvider} from 'styled-components'
import theme from 'styled-theming'
import img from '../../resources/logo.png'
import Image from './Image'
import {Link} from "react-router-dom";

const DefaultHeader = ({theme}) => (
  <ThemeProvider theme={{mode: theme}}>
      <Container type="flex" justify="center">
        <Col xs={2} sm={2} md={2} lg={2} xl={5}/>
        <Col xs={10} sm={10} md={10} lg={10} xl={7}>
          <div className="logo">
            <Link to="/" refresh="true">
              <Image img={img} style={{width: 80}}/>
            </Link>
          </div>
        </Col>
        <Col xs={10} sm={10} md={10} lg={10} xl={7}>
          {localStorage.getItem('token') === null ?
            <Link to="/login" refresh="true">
              <div style={rightMenu}>Login</div>
            </Link> :
            <Link to="/" refresh="true" onClick={() => localStorage.removeItem('token')}>
              <div style={rightMenu}>Logout</div>
            </Link>
          }
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={5}/>
      </Container>

  </ThemeProvider>
);

const rightMenu = {
  float: 'right',
  paddingTop: '10px'
}

const backgroundColor = theme('mode', {
  light: 'white',
  dark: '#222'
});

const textColor = theme('mode', {
  light: '#000',
  dark: '#fff'
});

const Container = styled(Row)`
  padding-top: 2vh;
  height: 80px;
  background-color: white; // ${backgroundColor} not working
  color: ${textColor};
`;

export default DefaultHeader
