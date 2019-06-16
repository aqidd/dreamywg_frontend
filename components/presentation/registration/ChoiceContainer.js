import { Row, Col, Card, Icon } from 'antd'
import TitleContent from '../../common/titlecontent'
import styled from 'styled-components'

const ChoiceContainer = () => (
  <Container>
    <TitleContent flex title="Who are you?" />
    {CardContent}
    <StyledCard style={{ marginTop: '2vh' }}>
      <Row>
        <Col span={5}>
          <StyledIconSeeker type="usergroup-add" />
        </Col>
        <Col span={19} />
      </Row>
    </StyledCard>
  </Container>
)

const CardContent = () => (
  <StyledCard>
    <Row>
      <Col span={5}>
        <StyledIconOfferer type="team" />
      </Col>
      <Col span={19}>
        <Row>
          <Title> Flat Seeker</Title>
        </Row>
        <Row>
          <Description> You are looking for place to live. </Description>
        </Row>
      </Col>
    </Row>
  </StyledCard>
)

const Container = styled.div`
  margin-top: 5vh;
  text-align: center;
`

const StyledIcon = styled(Icon)`
  font-size: 5em;
`

const StyledIconOfferer = styled(StyledIcon)`
  color: #096dd9;
`
const StyledIconSeeker = styled(StyledIcon)`
  color: #389e0d;
`

const StyledCard = styled(Card)`
  height: 20vh;
`

const Title = styled.p`
  text-align: left;
  font-size: 2em;
  font-weight: bold;
`

const Description = styled.p`
  text-align: left;
  font-size: 1em;
  font-weight: bold;
`

export default ChoiceContainer
