import { Menu, Row, Col, Icon } from 'antd'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styled-theming'

const CustomHeader = ({ theme }) => (
  <ThemeProvider theme={{ mode: theme }}>
    <Container>
      <Row type="flex" justify="center">
        <Col xs={2} sm={2} md={2} lg={2} xl={5} />
        <Col xs={20} sm={20} md={20} lg={20} xl={14}>
          <div className="logo" />
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
