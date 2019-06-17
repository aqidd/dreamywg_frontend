import { Menu, Row, Col, Icon } from 'antd'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styled-theming'
import img from '../../resources/logo.png'
import Image from './Image'

const CustomHeader = ({ theme }) => (
  <ThemeProvider theme={{ mode: theme }}>
    <Container>
      <Row type="flex" justify="center">
        <Col xs={2} sm={2} md={2} lg={2} xl={5} />
        <Col xs={10} sm={10} md={10} lg={10} xl={7}>
          <div className="logo">
            <Image img={img} style={{ width: 80 }} />
          </div>
        </Col>
        <Col xs={10} sm={10} md={10} lg={10} xl={7}>
          <Icon style={{ fontSize: 32, float: 'right' }} type="user" />
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={5} />
      </Row>
    </Container>
  </ThemeProvider>
)

const backgroundColor = theme('mode', {
  light: 'white',
  dark: '#222'
})

const textColor = theme('mode', {
  light: '#000',
  dark: '#fff'
})

const Container = styled.div`
  height: 80px;
  margin-top: 2vh;
  background-color: ${backgroundColor};
  color: ${textColor};
`

export default CustomHeader
